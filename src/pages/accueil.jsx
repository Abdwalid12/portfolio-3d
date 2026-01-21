import { useSelector } from 'react-redux';
import Scene3D from '../components/Scene3D';
import RotatingSphere from '../components/RotatingSphere';

const Accueil = () => {
  const nom = useSelector((state) => state.user.nom);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 w-full lg:w-auto">
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
                className="bg-indigo-600 text-white px-8 py-3 rounded-none hover:bg-indigo-700 transition font-medium text-center"
              >
                Voir mes projets
              </a>
              <a 
                href="/contact" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-none hover:bg-gray-50 transition border border-indigo-600 font-medium text-center"
              >
                Me contacter
              </a>
            </div>
          </div>
          
          {/* 3D Scene */}
          <div className="flex-1 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-none overflow-hidden bg-gray-50">
            <Scene3D cameraPosition={[0, 0, 5]}>
              <RotatingSphere position={[0, 0, 0]} color="#4F46E5" speed={0.01} />
              <RotatingSphere position={[2.5, 1, -2]} color="#6366F1" speed={0.015} />
              <RotatingSphere position={[-2.5, -1, -2]} color="#818CF8" speed={0.012} />
            </Scene3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;