# World Landmarks Explorer - Setup Guide

## Overview
An interactive 3D world map showcasing famous landmarks, ancient sites, modern buildings, and reactor sites with 3D model visualizations.

## Current Features
- ✅ Interactive dark-themed world map
- ✅ 32 clickable location markers
- ✅ 3D model viewer with orbit controls
- ✅ Placeholder 3D geometries (towers, pyramids, temples, etc.)
- ✅ Smooth animations and glowing markers
- ✅ Responsive design
- ✅ Category-based color coding

## Installation

```bash
npm install
npm run dev
```

The app will run on `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── WorldMap.tsx          # Main map component with markers
│   └── Model3DViewer.tsx     # 3D model viewer using Three.js
├── data/
│   └── locations.ts          # Location data with coordinates
├── pages/
│   └── Index.tsx             # Main page
└── index.css                 # Design system & styles
```

## Adding Real 3D Models

### Step 1: Obtain .obj Files
Download 3D models from:
- [Sketchfab](https://sketchfab.com/) - Free 3D models
- [TurboSquid](https://www.turbosquid.com/) - Professional models
- [CGTrader](https://www.cgtrader.com/) - Marketplace
- [Free3D](https://free3d.com/) - Free models

### Step 2: Organize Models
Create a `public/models` folder and organize by location:
```
public/
└── models/
    ├── eiffel-tower.obj
    ├── great-wall.obj
    ├── pyramids.obj
    └── ...
```

### Step 3: Update Model Loader
Modify `src/components/Model3DViewer.tsx` to use real models:

```tsx
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const RealModel = ({ modelPath }: { modelPath: string }) => {
  const obj = useLoader(OBJLoader, modelPath);
  return <primitive object={obj} scale={0.5} />;
};
```

### Step 4: Update Location Data
In `src/data/locations.ts`, add model paths:
```typescript
{
  id: 'eiffel-tower',
  name: 'Eiffel Tower',
  coordinates: [48.8584, 2.2945],
  modelPath: '/models/eiffel-tower.obj', // Add this
  // ...
}
```

## Customization

### Change Map Style
Edit `WorldMap.tsx` line 52 for different map tiles:
```tsx
// Light mode
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// Satellite
<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
```

### Modify Colors
Edit `src/index.css` design tokens:
```css
--primary: 190 95% 50%;  /* Change marker color */
--glow: 190 95% 50%;     /* Change glow color */
```

### Add New Locations
Edit `src/data/locations.ts`:
```typescript
{
  id: 'your-location',
  name: 'Location Name',
  coordinates: [latitude, longitude],
  description: 'Your description',
  modelType: 'tower', // or pyramid, temple, etc.
  category: 'landmark' // or ancient, modern, reactor
}
```

## Tech Stack
- **React 18** - UI framework
- **Vite** - Build tool
- **React Leaflet** - Interactive maps
- **Three.js** - 3D rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Performance Tips
1. Optimize .obj files before adding (reduce polygon count)
2. Use compressed textures
3. Consider using `.glb` format for better performance
4. Lazy load models only when marker is clicked
5. Implement level-of-detail (LOD) for distant views

## Known Limitations
- Currently using placeholder geometries instead of real models
- TypeScript type definitions for react-leaflet may show warnings
- Large .obj files may cause performance issues
- Mobile performance may vary based on device

## Contributing
To add more locations:
1. Find coordinates using [LatLong.net](https://www.latlong.net/)
2. Add to `locations.ts`
3. Ensure proper category and model type
4. Test marker appearance and popup

## License
This project is open source and available under the MIT License.
