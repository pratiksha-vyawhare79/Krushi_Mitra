import React from 'react';
import { FiMapPin, FiMaximize2, FiDroplet } from 'react-icons/fi';

export default function FarmCard({ farm, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'bg-gradient-to-br from-[#E2F0D9] to-[#C3E6B5]/60 border-green-300 shadow-sm' 
          : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-gray-200 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-[#263238] text-base">{farm.name}</h4>
        <span className="bg-white/80 backdrop-blur-sm border border-gray-200 px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-600">
          {farm.soilType}
        </span>
      </div>

      <div className="space-y-1.5 text-xs text-gray-500 font-semibold">
        <p className="flex items-center gap-1.5">
          <FiMaximize2 className="text-[#2E7D32]" />
          <span>{farm.area} Acres</span>
        </p>
        <p className="flex items-center gap-1.5">
          <FiDroplet className="text-blue-500" />
          <span>{farm.waterSource}</span>
        </p>
        <p className="flex items-center gap-1.5">
          <FiMapPin className="text-[#E53935]" />
          <span className="truncate">{farm.location}</span>
        </p>
      </div>
    </div>
  );
}
