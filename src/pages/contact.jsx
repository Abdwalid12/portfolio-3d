import React, { Suspense, useState } from 'react';
import Scene3D from '../components/Scene3D';
import GeometricShape from '../components/GeometricShape';

const Contact = () => {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-white py-32 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-6xl md:text-8xl font-light mb-24 tracking-tighter">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-gray-50 p-12 rounded-[50px]">
          {/* Formulaire centré */}
          <form className="space-y-8 text-left max-w-md mx-auto w-full">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Nom</label>
              <input type="text" className="w-full bg-white border-none rounded-2xl p-4 shadow-sm focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">E-mail</label>
              <input type="email" className="w-full bg-white border-none rounded-2xl p-4 shadow-sm focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message</label>
              <textarea rows="4" className="w-full bg-white border-none rounded-2xl p-4 shadow-sm focus:ring-2 focus:ring-indigo-600 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-2xl hover:bg-indigo-600 transition-all uppercase tracking-widest text-xs font-bold shadow-lg">
              Envoyer
            </button>
          </form>

          {/* Visualisation 3D centrée */}
          <div className="h-[500px] w-full bg-white rounded-[40px] shadow-inner overflow-hidden mx-auto">
            <Scene3D cameraPosition={[0, 0, 4]}>
               <GeometricShape type="torus" position={[0, 0, 0]} color="#4F46E5" />
            </Scene3D>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;