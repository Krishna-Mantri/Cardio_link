// components/SettingsModal.tsx

interface Props {
    onClose: () => void;
  }
  
  export default function SettingsModal({ onClose }: Props) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-96 shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
          <h2 className="text-lg font-bold mb-4 text-gray-800">Settings</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="bg-gray-100 p-2 rounded-lg">👤 Account</li>
            <li className="bg-gray-100 p-2 rounded-lg">ℹ️ Info</li>
            <li className="bg-gray-100 p-2 rounded-lg">📄 About</li>
          </ul>
        </div>
      </div>
    );
  }
  