// components/ContactDoctorModal.tsx
// components/ContactDoctorModal.tsx
'use client';

import { X } from 'lucide-react';

interface ContactDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDoctorModal = ({ isOpen, onClose }: ContactDoctorModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white w-full max-w-md sm:max-w-xl rounded-xl p-6 shadow-xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-blue-700">Available Doctors</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800">Dr. Anjali Mehra</h3>
            <p className="text-sm text-gray-600">Cardiologist • Apollo Hospital</p>
            <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
              Call Doctor
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800">Dr. Rahul Sharma</h3>
            <p className="text-sm text-gray-600">General Physician • Fortis</p>
            <p className="text-sm text-gray-600">Phone: +91 91234 56789</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
              Call Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDoctorModal;


/* 
interface ContactDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
}
*/