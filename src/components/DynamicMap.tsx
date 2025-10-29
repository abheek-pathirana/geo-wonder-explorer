import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { locations } from '@/data/locations';
import { createPopupContent } from './PopupContent';

// Fix leaflet default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const createCustomIcon = (category: string) => {
  const colors: Record<string, string> = {
    landmark: '#00bfff',
    ancient: '#daa520',
    modern: '#4169e1',
    reactor: '#ff4500'
  };

  const color = colors[category] || '#00bfff';

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="width: 24px; height: 24px; background: ${color}; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px ${color}; animation: pulse 2s infinite;"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

const DynamicMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    console.log('Initializing map...');

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([20, 0], 2);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      minZoom: 2
    }).addTo(map);

    // Add markers
    locations.forEach((location) => {
      const marker = L.marker([location.coordinates[0], location.coordinates[1]], {
        icon: createCustomIcon(location.category)
      }).addTo(map);

      // Bind popup with React content
      const popup = L.popup({
        maxWidth: 450,
        minWidth: 400,
        className: 'custom-popup'
      }).setContent(createPopupContent(location));

      marker.bindPopup(popup);
    });

    console.log('Map initialized with', locations.length, 'markers');

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-full"
      style={{ 
        width: '100%',
        height: '100vh',
        background: 'hsl(220, 25%, 8%)'
      }}
    />
  );
};

export default DynamicMap;
