import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

interface Model3DViewerProps {
  modelType: 'tower' | 'pyramid' | 'temple' | 'modern' | 'castle' | 'reactor' | 'statue' | 'dome' | 'wall';
}

// Placeholder 3D models - Replace with actual .obj loading later
const PlaceholderModel = ({ modelType }: { modelType: string }) => {
  const getGeometry = () => {
    switch (modelType) {
      case 'tower':
        return <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.5, 0.7, 3, 8]} />
          <meshStandardMaterial color="#00bfff" metalness={0.3} roughness={0.4} />
        </mesh>;
      
      case 'pyramid':
        return <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[1.5, 2, 4]} />
          <meshStandardMaterial color="#daa520" metalness={0.2} roughness={0.7} />
        </mesh>;
      
      case 'temple':
        return <group>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[2, 1, 2]} />
            <meshStandardMaterial color="#8b7355" metalness={0.1} roughness={0.8} />
          </mesh>
          <mesh position={[0, 1.3, 0]}>
            <coneGeometry args={[1.3, 0.8, 4]} />
            <meshStandardMaterial color="#cd853f" metalness={0.1} roughness={0.8} />
          </mesh>
        </group>;
      
      case 'modern':
        return <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.8, 3, 0.8]} />
          <meshStandardMaterial color="#4169e1" metalness={0.8} roughness={0.2} />
        </mesh>;
      
      case 'castle':
        return <group>
          <mesh position={[0, 0.7, 0]}>
            <boxGeometry args={[1.5, 1.4, 1.5]} />
            <meshStandardMaterial color="#708090" metalness={0.2} roughness={0.7} />
          </mesh>
          <mesh position={[-0.6, 1.6, -0.6]}>
            <cylinderGeometry args={[0.2, 0.2, 0.6, 8]} />
            <meshStandardMaterial color="#696969" metalness={0.2} roughness={0.7} />
          </mesh>
          <mesh position={[0.6, 1.6, -0.6]}>
            <cylinderGeometry args={[0.2, 0.2, 0.6, 8]} />
            <meshStandardMaterial color="#696969" metalness={0.2} roughness={0.7} />
          </mesh>
        </group>;
      
      case 'reactor':
        return <group>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[1.5, 1, 1.5]} />
            <meshStandardMaterial color="#ff4500" emissive="#ff6347" emissiveIntensity={0.2} metalness={0.5} roughness={0.5} />
          </mesh>
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.8, 16]} />
            <meshStandardMaterial color="#ff6347" emissive="#ff4500" emissiveIntensity={0.3} metalness={0.6} roughness={0.4} />
          </mesh>
        </group>;
      
      case 'statue':
        return <group>
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 0.6, 8]} />
            <meshStandardMaterial color="#dcdcdc" metalness={0.1} roughness={0.6} />
          </mesh>
          <mesh position={[0, 1, 0]}>
            <capsuleGeometry args={[0.4, 1, 8, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.1} roughness={0.6} />
          </mesh>
        </group>;
      
      case 'dome':
        return <group>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 1, 16]} />
            <meshStandardMaterial color="#f5deb3" metalness={0.1} roughness={0.7} />
          </mesh>
          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[1.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#daa520" metalness={0.3} roughness={0.5} />
          </mesh>
        </group>;
      
      case 'wall':
        return <group>
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[(i - 2) * 0.6, 0.5, 0]}>
              <boxGeometry args={[0.5, 1, 0.3]} />
              <meshStandardMaterial color="#8b7355" metalness={0.1} roughness={0.8} />
            </mesh>
          ))}
        </group>;
      
      default:
        return <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00bfff" />
        </mesh>;
    }
  };

  return <>{getGeometry()}</>;
};

const Model3DViewer = ({ modelType }: Model3DViewerProps) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary to-background rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, -5]} intensity={0.5} color="#00bfff" />
          <PlaceholderModel modelType={modelType} />
          <Environment preset="city" />
          <OrbitControls 
            enablePan={false} 
            minDistance={3} 
            maxDistance={10}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Model3DViewer;
