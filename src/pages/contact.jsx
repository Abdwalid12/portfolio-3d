import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, resetForm } from '../store';
import Scene3D from '../components/Scene3D';
import GeometricShape from '../components/GeometricShape';

const Contact = () => {
  const dispatch = useDispatch();
  const { submitted, error } = useSelector((state) => state.contact);
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est obligatoire';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est obligatoire';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse e-mail valide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    dispatch(submitContactForm(formData));
  };

  const handleReset = () => {
    setFormData({ nom: '', email: '', message: '' });
    setErrors({});
    dispatch(resetForm());
  };

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 text-center">
            Contactez-moi
          </h2>
          <p className="text-center text-gray-600 text-lg sm:text-xl font-light max-w-2xl mx-auto">
            Envoyez-moi un message et je vous répondrai dans les plus brefs délais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            {submitted ? (
              <div className="text-center py-12 sm:py-16">
                <div className="text-6xl sm:text-7xl mb-6">✅</div>
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                  Message envoyé avec succès !
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-8 font-light">
                  Merci pour votre message. Je vous répondrai bientôt.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-none hover:bg-indigo-700 transition font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                  Formulaire de contact
                </h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-900 mb-3">
                      Nom <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-none focus:outline-none focus:ring-0 transition text-base ${
                        errors.nom ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="Votre nom complet"
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-sm mt-2">{errors.nom}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-3">
                      Adresse e-mail <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-none focus:outline-none focus:ring-0 transition text-base ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-3">
                      Message <span className="text-gray-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full border p-3 rounded-none focus:outline-none focus:ring-0 transition resize-none text-base ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="bg-white border border-red-300 text-red-700 p-4 text-base">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-medium py-3 rounded-none hover:bg-indigo-700 transition text-base"
                  >
                    Envoyer le message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* 3D Visualization */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center lg:text-left">
              Visualisation 3D
            </h3>
            <div className="h-96 sm:h-[450px] md:h-[500px] bg-gray-50 overflow-hidden mb-6">
              <Scene3D cameraPosition={[0, 0, 4]}>
                <GeometricShape type="torus" position={[0, 0, 0]} color="#4F46E5" />
                <GeometricShape type="box" position={[-1.5, 1, -1]} color="#6366F1" />
                <GeometricShape type="octahedron" position={[1.5, -1, -1]} color="#818CF8" />
              </Scene3D>
            </div>
            <p className="text-center lg:text-left text-gray-600 text-base font-light">
              Interagissez avec les formes 3D pendant que vous rédigez votre message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;