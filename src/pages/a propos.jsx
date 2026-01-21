import Scene3D from '../components/Scene3D';
import Avatar3D from '../components/Avatar3D';

const APropos = () => {
  const competences = [
    { nom: 'Développement Informatique (React.js, JavaScript, TypeScript, Node.js, CSS, Tailwind CSS)', niveau: 60 },
    { nom: 'Adobe Creative Suite (Photoshop, Illustrator, After Effects)', niveau: 85 },
    { nom: 'Cinema 4D', niveau: 82 },
    { nom: 'Unity', niveau: 85 }
  ];

  const parcours = [
    {
      periode: '2025 - 2026 (en cours)',
      titre: 'Licence en Modélisation 3D et Jeux Vidéo',
      description: 'Formation spécialisée en modélisation 3D et développement de jeux vidéo'
    },
    {
      periode: '2023 - 2025',
      titre: 'DEUG en Développement Multimédia',
      description: 'Formation en développement multimédia à EPAG'
    },
    {
      periode: '2019 - 2020',
      titre: 'Baccalauréat',
      description: 'Baccalauréat à Moulay Abdellah Rabat'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 text-center">
            À Propos de Moi
          </h2>
          <p className="text-center text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement 3D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 mb-16 sm:mb-24 lg:mb-32">
          {/* 3D Avatar Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center lg:text-left">
              Mon Avatar 3D
            </h3>
            <div className="h-80 sm:h-96 md:h-[450px] bg-gray-50 overflow-hidden mb-6">
              <Scene3D cameraPosition={[0, 0, 5]}>
                <Avatar3D position={[0, 0, 0]} />
              </Scene3D>
            </div>
            <p className="text-center lg:text-left text-gray-600 text-base font-light">
              Interagissez avec mon avatar en faisant glisser la souris sur l'image
            </p>
          </div>

          {/* Bio Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
              Qui suis-je ?
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-light">
              Je suis un étudiant en développement de jeu et 3D et aussi passionné par combiner 
              le 3D et l'expérience. Mon objectif est de créer des interfaces qui non seulement 
              fonctionnent parfaitement, mais qui offrent également une expérience visuelle mémorable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              Le React.js pour moi est une belle expérience qui transforme des idées créatives 
              en applications web interactives et performantes.
            </p>
          </div>
        </div>

        {/* Compétences Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-12 text-center">
            Mes Compétences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {competences.map((competence, index) => (
              <div key={index}>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-base font-medium text-gray-800 break-words pr-4">
                    {competence.nom}
                  </span>
                  <span className="text-base font-medium text-gray-900 flex-shrink-0">
                    {competence.niveau}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-1">
                  <div 
                    className="bg-indigo-600 h-1 transition-all duration-1000"
                    style={{ width: `${competence.niveau}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parcours Section */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-12 text-center">
            Mon Parcours
          </h3>
          <div className="space-y-12 sm:space-y-16 max-w-2xl mx-auto">
            {parcours.map((etape, index) => (
              <div key={index} className="border-l border-indigo-300 pl-6 sm:pl-8 pb-4 relative">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-indigo-600 rounded-full"></div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  {etape.periode}
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
                  {etape.titre}
                </h4>
                <p className="text-base text-gray-600 font-light">
                  {etape.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
