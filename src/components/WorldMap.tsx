import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DivIcon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
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

const WorldMap = () => {
  const mapCenter: LatLngExpression = [20, 0];

  return (
    <div className="w-full h-screen relative">
      <MapContainer
        center={mapCenter}
        zoom={2}
        className="w-full h-full"
        style={{ background: 'hsl(220, 25%, 8%)' }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
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
      </MapContainer>
      
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-background/90 to-transparent p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2 drop-shadow-lg">
            World Landmarks Explorer
          </h1>
          <p className="text-muted-foreground drop-shadow">
            Click on any glowing marker to explore 3D models of famous landmarks, buildings, and sites
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border">
        <h3 className="text-sm font-bold text-foreground mb-3">Categories</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" style={{ boxShadow: '0 0 10px hsl(var(--primary))' }}></div>
            <span className="text-muted-foreground">Landmarks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" style={{ boxShadow: '0 0 10px #daa520' }}></div>
            <span className="text-muted-foreground">Ancient Sites</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" style={{ boxShadow: '0 0 10px #4169e1' }}></div>
            <span className="text-muted-foreground">Modern Buildings</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" style={{ boxShadow: '0 0 10px #ff4500' }}></div>
            <span className="text-muted-foreground">Reactor Sites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
