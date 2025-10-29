import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Model3DViewer from './Model3DViewer';
import type { Location } from '@/data/locations';

interface PopupContentProps {
  location: Location;
}

const PopupContent = ({ location }: PopupContentProps) => {
  return (
    <div style={{ width: '400px' }}>
      <div style={{ position: 'relative', width: '100%', height: '256px' }}>
        <Model3DViewer modelType={location.modelType} />
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: 'hsl(210, 40%, 98%)' }}>
          {location.name}
        </h3>
        <p style={{ fontSize: '14px', color: 'hsl(215, 20%, 65%)', lineHeight: '1.6', marginBottom: '12px' }}>
          {location.description}
        </p>
        <span style={{
          display: 'inline-block',
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: '500',
          ...(location.category === 'landmark' ? { background: 'hsla(190, 95%, 50%, 0.2)', color: 'hsl(190, 95%, 50%)' } :
          location.category === 'ancient' ? { background: 'hsla(43, 74%, 49%, 0.2)', color: '#daa520' } :
          location.category === 'modern' ? { background: 'hsla(225, 73%, 57%, 0.2)', color: '#4169e1' } :
          { background: 'hsla(16, 100%, 50%, 0.2)', color: '#ff4500' })
        }}>
          {location.category.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

// Helper function to render React component into Leaflet popup
export const createPopupContent = (location: Location): HTMLElement => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<PopupContent location={location} />);
  return container;
};

export default PopupContent;
