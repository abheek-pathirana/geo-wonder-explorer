import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarkers from './MapMarkers';
import LeafletIconFix from './LeafletIcon';

const WorldMap = () => {
  useEffect(() => {
    console.log('WorldMap component mounted');
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={18}
          scrollWheelZoom={true}
          style={{ 
            width: '100%',
            height: '100vh',
            background: 'hsl(220, 25%, 8%)',
            zIndex: 0
          }}
        >
          <LeafletIconFix />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <MapMarkers />
        </MapContainer>
      </div>
      
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-background/90 to-transparent p-6 pointer-events-none">
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
