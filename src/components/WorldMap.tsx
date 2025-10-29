import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarkers from './MapMarkers';

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
        <MapMarkers />
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
