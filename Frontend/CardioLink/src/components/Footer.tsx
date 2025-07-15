// components/Footer.tsx
'use client';

import { useState } from 'react';
import EmergencyCallModal from './EmergencyCallModal';
import ContactDoctorModal from './ContactDoctorModal';
import { PhoneCall, Heart } from 'lucide-react';

const Footer = () => {
  const [isEmergencyOpen, setEmergencyOpen] = useState(false);
  const [isDoctorOpen, setDoctorOpen] = useState(false);

  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-6 px-8 mt-10 rounded-t-2xl shadow-inner">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Logo and slogan */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold text-blue-700">CardioLink</h1>
          <p className="text-sm text-gray-600">Your health, your priority.</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setEmergencyOpen(true)}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
          >
            <PhoneCall size={18} /> Call Ambulance
          </button>

          <button
            onClick={() => setDoctorOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
          >
            <Heart size={18} /> Contact Doctor
          </button>
        </div>
      </div>

      {/* Modals */}
      <EmergencyCallModal isOpen={isEmergencyOpen} onClose={() => setEmergencyOpen(false)} />
      <ContactDoctorModal isOpen={isDoctorOpen} onClose={() => setDoctorOpen(false)} />
    </footer>
  );
};

export default Footer;
