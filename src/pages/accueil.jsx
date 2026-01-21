import React, { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, Center } from '@react-three/drei';

const MoroccoMap = () => {
  const { scene } = useGLTF('./models/morocco_map.glb');
  const mapRef = useRef();
  useFrame(() => { if (mapRef.current) mapRef.current.rotation.y += 0.002; });
  return <primitive ref={mapRef} object={scene} scale={1.5} />;
};

const Accueil = () => {
  const nom = useSelector((state) => state.user.nom);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* Texte centré sur mobile, aligné gauche sur large */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 tracking-tighter">
              {nom ? `Bienvenue, ${nom}` : "Bienvenue"}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-600 mb-8 font-light tracking-widest uppercase">
              Développeur React & Designer 3D
            </p>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Je crée des expériences web interactives avec des éléments 3D immersifs. Explorez mes projets et découvrez mon univers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="/projets" className="bg-indigo-600 text-white px-10 py-4 hover:bg-indigo-700 transition tracking-widest uppercase text-xs">
                Mes Projets
              </a>
              <a href="/contact" className="border border-gray-900 text-gray-900 px-10 py-4 hover:bg-gray-900 hover:text-white transition tracking-widest uppercase text-xs">
                Contact
              </a>
            </div>
          </div>
          
          {/* Scène 3D centrée */}
          <div className="w-full lg:w-[600px] h-[500px] md:h-[600px] bg-gray-50 rounded-[40px] overflow-hidden shadow-sm mx-auto">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
              <Suspense fallback={null}>
                <PresentationControls global config={{ mass: 2, tension: 400 }} snap rotation={[0, -0.5, 0]}>
                  <Stage environment="city" intensity={0.6} contactShadow={true}>
                    <Center><MoroccoMap /></Center>
                  </Stage>
                </PresentationControls>
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;