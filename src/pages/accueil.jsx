import React, { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, Center } from '@react-three/drei';

// Composant pour charger la carte du Maroc
const MoroccoMap = () => {
  const { scene } = useGLTF('./models/morocco_map.glb'); // Vérifiez bien le nom du fichier
  const mapRef = useRef();

  // Animation de rotation très lente pour donner de la vie
  useFrame((state) => {
    if (mapRef.current) {
      mapRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={mapRef} object={scene} scale={1.5} />;
};

const Accueil = () => {
  const nom = useSelector((state) => state.user.nom);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">
          
          {/* Texte à gauche */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              {nom ? `Bienvenue, ${nom}` : "Bienvenue"}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
              Développeur React & Designer 3D
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-lg font-light">
              Je crée des expériences web interactives avec des éléments 3D immersifs. Explorez mes projets et découvrez mes compétences en développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="/projets" 
                className="bg-indigo-600 text-white px-10 py-4 hover:bg-indigo-700 transition font-medium text-center"
              >
                Voir mes projets
              </a>
              <a 
                href="/contact" 
                className="bg-white text-indigo-600 px-10 py-4 hover:bg-gray-50 transition border border-indigo-600 font-medium text-center"
              >
                Me contacter
              </a>
            </div>
          </div>
          
          {/* Scène 3D à droite */}
          <div className="w-full lg:w-1/2 h-[400px] sm:h-[550px] lg:h-[700px] bg-gray-50 order-1 lg:order-2">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
              <Suspense fallback={null}>
                {/* PresentationControls permet à l'utilisateur de manipuler la carte */}
                <PresentationControls
                  global
                  config={{ mass: 2, tension: 400 }}
                  snap={{ mass: 3, tension: 200 }}
                  rotation={[0, -0.5, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                >
                  {/* Stage gère l'éclairage parfait pour la carte */}
                  <Stage environment="city" intensity={0.6} contactShadow={true}>
                    <Center>
                      <MoroccoMap />
                    </Center>
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