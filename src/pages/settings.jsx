import React from "react";
import { FiSettings } from "react-icons/fi";

const settings = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="bg-purple-100 p-3 rounded-lg">
        <FiSettings size={60} className="text-purple-800" />
      </span>
    </div>
  );
};

export default settings;
