import React, { Suspense } from 'react';
import { useGLTF, Stage, PresentationControls, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene.clone()} />;
};

const Projets = () => {
  const projets = [
    { id: 1, titre: 'E-Commerce View', description: 'Gestion 3D immersive.', tech: 'React, Node', model: '/models/fountain.glb' },
    { id: 2, titre: 'Data Dashboard', description: 'Visualisation temps réel.', tech: 'Three.js, D3', model: '/models/pouf.glb' },
    { id: 3, titre: '3D Multiplayer', description: 'Jeu en ligne interactif.', tech: 'Socket.io', model: '/models/teapot.glb' },
  ];

  return (
    <div className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-light mb-24 tracking-tighter">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 justify-center items-center max-w-7xl mx-auto">
          {projets.map((p) => (
            <div key={p.id} className="flex flex-col space-y-8 bg-white p-6 rounded-3xl transition-all hover:shadow-xl border border-gray-50">
              <div className="h-[400px] bg-gray-50 rounded-2xl overflow-hidden">
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <Suspense fallback={null}>
                    <PresentationControls global config={{ mass: 2, tension: 500 }} snap>
                      <Stage environment="city" intensity={0.5} contactShadow={true}>
                        <Center><Model path={p.model} /></Center>
                      </Stage>
                    </PresentationControls>
                  </Suspense>
                </Canvas>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light tracking-tight">{p.titre}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{p.description}</p>
                <div className="pt-4 border-t border-gray-100 text-[10px] uppercase tracking-[0.2em] text-indigo-600 font-bold">
                  {p.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;