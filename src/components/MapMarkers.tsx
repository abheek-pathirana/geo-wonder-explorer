import { useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { locations } from '@/data/locations';
import Model3DViewer from './Model3DViewer';

// Custom marker icons based on category
const createCustomIcon = (category: string) => {
  const colors: Record<string, string> = {
    landmark: '#00bfff',
    ancient: '#daa520',
    modern: '#4169e1',
    reactor: '#ff4500'
  };

  const color = colors[category] || '#00bfff';

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="position: relative; width: 24px; height: 24px;"><div style="position: absolute; inset: 0; background: ${color}; border-radius: 50%; opacity: 0.3; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div><div style="width: 24px; height: 24px; background: ${color}; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 15px ${color}; cursor: pointer; transform: translate(-50%, -50%); position: absolute; left: 50%; top: 50%;"></div></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const MapMarkers = () => {
  useEffect(() => {
    console.log('MapMarkers mounted, rendering', locations.length, 'locations');
  }, []);

  return (
    <>
      {locations.map((location) => {
        console.log('Rendering marker for', location.name);
        return (
          <Marker
            key={location.id}
            position={[location.coordinates[0], location.coordinates[1]]}
            icon={createCustomIcon(location.category)}
          >
            <Popup maxWidth={450} minWidth={350}>
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="relative w-full" style={{ height: '256px' }}>
                  <Model3DViewer modelType={location.modelType} />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {location.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      location.category === 'landmark' ? 'bg-primary/20 text-primary' :
                      location.category === 'ancient' ? 'bg-yellow-500/20 text-yellow-500' :
                      location.category === 'modern' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {location.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default MapMarkers;
