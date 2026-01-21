import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const GeometricShape = ({ type = 'box', position = [0, 0, 0], color = '#6366F1', hoverColor = '#818CF8' }) => {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'torus':
        return <torusGeometry args={[0.8, 0.3, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={clicked ? 1.2 : 1}
    >
      {getGeometry()}
      <meshStandardMaterial 
        color={hovered ? hoverColor : color} 
        metalness={0.8} 
        roughness={0.2}
      />
    </mesh>
  );
};

export default GeometricShape;
