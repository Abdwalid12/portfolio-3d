import React, { Suspense } from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import Scene3D from '../components/Scene3D';

// Composant interne pour charger les modèles GLB
const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  // Clone la scène pour pouvoir l'utiliser plusieurs fois si nécessaire
  return <primitive object={scene.clone()} />;
};

const Projets = () => {
  const projets = [
    {
      id: 1,
      titre: 'Application E-Commerce',
      description: 'Une plateforme de vente en ligne moderne avec gestion de panier et paiement sécurisé.',
      technologie: 'React, Node.js, MongoDB',
      modelPath: '/models/fountain.glb', // Assurez-vous du chemin dans /public
    },
    {
      id: 2,
      titre: 'Dashboard Analytique',
      description: 'Tableau de bord interactif pour visualiser des données en temps réel avec graphiques 3D.',
      technologie: 'React, D3.js, WebGL',
      modelPath: '/models/pouf.glb',
    },
    {
      id: 3,
      titre: 'Jeu 3D Multi-joueurs',
      description: 'Jeu en ligne avec environnement 3D immersif et interactions en temps réel.',
      technologie: 'Three.js, Socket.io, Express',
      modelPath: '/models/teapot.glb',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 text-center">
            Mes Projets
          </h2>
          <p className="text-center text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto">
            Découvrez mes réalisations avec des aperçus interactifs de modèles 3D
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {projets.map((projet) => (
            <div key={projet.id} className="flex flex-col group">
              
              {/* 3D Preview Container */}
              <div className="h-56 sm:h-64 md:h-72 bg-gray-50 relative flex-shrink-0 mb-8 overflow-hidden rounded-lg">
                <Scene3D cameraPosition={[0, 0, 4]}>
                  {/* Suspense gère l'attente pendant le chargement du fichier .glb */}
                  <Suspense fallback={null}>
                    {/* PresentationControls permet à l'utilisateur de faire tourner l'objet à la souris */}
                    <PresentationControls global zoom={0.8} config={{ mass: 2, tension: 500 }} snap>
                      {/* Stage gère automatiquement l'éclairage et le centrage du modèle */}
                      <Stage environment="city" intensity={0.6} contactShadow={true}>
                        <Model path={projet.modelPath} />
                      </Stage>
                    </PresentationControls>
                  </Suspense>
                </Scene3D>
              </div>
              
              {/* Project Info */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-light text-gray-900 mb-4">{projet.titre}</h3>
                <p className="text-base text-gray-600 mb-6 font-light leading-relaxed flex-grow">
                  {projet.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projet.technologie.split(', ').map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-none hover:bg-indigo-700 transition font-medium text-sm sm:text-base">
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;