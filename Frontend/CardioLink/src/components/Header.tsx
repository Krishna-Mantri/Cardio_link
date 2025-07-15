"use client";
import Image from "next/image";
import boyImg from "../app/boy.png"; // path relative to the file
import { useState } from "react";
import SettingsModal from "./SettingsModal";

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">
      <div className="flex items-center space-x-4">
        <Image
          src={boyImg}
          alt="Profile"
          className="rounded-full"
          width={48}
          height={48}
        />
        <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
      </div>
      <button
        onClick={() => setShowSettings(true)}
        className="text-gray-600 hover:text-gray-900"
      >
        ⚙️
      </button>

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </header>
  );
}
