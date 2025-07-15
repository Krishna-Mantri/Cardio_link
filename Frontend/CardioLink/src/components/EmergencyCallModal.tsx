"use client";

import React from "react";

interface EmergencyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyCallModal: React.FC<EmergencyCallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-11/12 max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-red-600">Emergency Call</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to call the ambulance?
        </p>

        <button
          onClick={onClose}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Call Ambulance
        </button>
      </div>
    </div>
  );
};

export default EmergencyCallModal;
