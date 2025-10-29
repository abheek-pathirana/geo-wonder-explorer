import { Marker, Popup } from 'react-leaflet';
import { DivIcon, LatLngExpression } from 'leaflet';
import { locations } from '@/data/locations';
import Model3DViewer from './Model3DViewer';

// Custom marker icons based on category
const createCustomIcon = (category: string) => {
  const colors: { [key: string]: string } = {
    landmark: '#00bfff',
    ancient: '#daa520',
    modern: '#4169e1',
    reactor: '#ff4500'
  };

  return new DivIcon({
    className: 'custom-marker',
    html: `
      <div class="relative">
        <div class="absolute inset-0 animate-ping" style="background: ${colors[category]}; border-radius: 50%; opacity: 0.3;"></div>
        <div style="
          width: 24px;
          height: 24px;
          background: ${colors[category]};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 15px ${colors[category]};
          cursor: pointer;
          transform: translate(-50%, -50%);
        "></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const MapMarkers = () => {
  return (
    <>
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates as LatLngExpression}
          icon={createCustomIcon(location.category)}
        >
          <Popup>
            <div className="bg-card rounded-lg overflow-hidden" style={{ width: '400px' }}>
              <div className="relative">
                <div className="h-64 w-full">
                  <Model3DViewer modelType={location.modelType} />
                </div>
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
      ))}
    </>
  );
};

export default MapMarkers;
