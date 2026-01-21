import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Avatar3D = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>
      
      {/* Left Arm */}
      <mesh position={[-0.6, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#6366F1" />
      </mesh>
      
      {/* Right Arm */}
      <mesh position={[0.6, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#6366F1" />
      </mesh>
      
      {/* Left Leg */}
      <mesh position={[-0.25, -0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
      
      {/* Right Leg */}
      <mesh position={[0.25, -0.5, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
    </group>
  );
};

export default Avatar3D;
