import React, { Suspense } from 'react';
// Importez Canvas ici au cas où Scene3D poserait problème
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';

// Composant de secours si Scene3D ou Avatar3D ne fonctionnent pas
const FallbackBox = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="indigo" />
  </mesh>
);

const APropos = () => {
  const competences = [
    { nom: 'React / JS / TS', niveau: 70 },
    { nom: 'Adobe Suite', niveau: 85 },
    { nom: 'Cinema 4D', niveau: 82 },
    { nom: 'Unity / C#', niveau: 85 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Espacement important en haut pour ne pas être caché par la Navbar */}
      <div className="container mx-auto px-6 max-w-6xl text-center pt-20 pb-32">
        
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter text-gray-900">À Propos</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 tracking-widest uppercase text-xs font-bold">L'Art de coder en 3 dimensions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          {/* Zone 3D avec protection Suspense */}
          <div className="h-[400px] md:h-[500px] bg-gray-50 rounded-[40px] shadow-inner overflow-hidden border border-gray-100">
            <Suspense fallback={<div className="flex items-center justify-center h-full text-gray-400">Chargement de l'avatar...</div>}>
              <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                
                {/* Essayez d'utiliser un cube simple si votre Avatar3D fait bugger la page */}
                <group position={[0, -1, 0]}>
                   <FallbackBox /> 
                </group>

                <OrbitControls enableZoom={false} />
                <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} />
              </Canvas>
            </Suspense>
          </div>

          <div className="text-center lg:text-left space-y-8 px-4">
            <h3 className="text-3xl font-light text-gray-800">Qui suis-je ?</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Étudiant en modélisation 3D, je fusionne le développement web et le design immersif pour créer des interfaces uniques et mémorables.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Mon approche consiste à transformer des lignes de code en expériences visuelles interactives.
            </p>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-light mb-16 uppercase tracking-widest text-gray-400">Expertise Technique</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {competences.map((comp, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between text-[10px] tracking-widest uppercase font-bold text-gray-500">
                  <span>{comp.nom}</span>
                  <span className="text-indigo-600">{comp.niveau}%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full transition-all duration-1000" style={{ width: `${comp.niveau}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;