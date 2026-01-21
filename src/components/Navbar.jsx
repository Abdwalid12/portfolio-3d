import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link 
            to="/" 
            className="text-lg sm:text-xl font-600 text-indigo-600 hover:text-indigo-700 transition"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition ${
                isActive('/') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/projets" 
              className={`text-sm font-medium transition ${
                isActive('/projets') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Projets
            </Link>
            <Link 
              to="/a-propos" 
              className={`text-sm font-medium transition ${
                isActive('/a-propos') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition ${
                isActive('/contact') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-indigo-600 hover:text-indigo-700 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-6">
            <Link 
              to="/" 
              className={`block text-sm font-medium transition ${
                isActive('/') 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/projets" 
              className={`block text-sm font-medium transition ${
                isActive('/projets') 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={closeMenu}
            >
              Projets
            </Link>
            <Link 
              to="/a-propos" 
              className={`block text-sm font-medium transition ${
                isActive('/a-propos') 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={closeMenu}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className={`block text-sm font-medium transition ${
                isActive('/contact') 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;