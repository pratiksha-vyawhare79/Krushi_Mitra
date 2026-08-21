import React from 'react';
import FarmCard from './FarmCard';
import { FiPlus } from 'react-icons/fi';

export default function FarmList({ farms, activeFarmId, onSelectFarm, onAddClick }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-[#263238]">My Registered Farms</h3>
        <button 
          onClick={onAddClick}
          className="bg-[#2E7D32] hover:bg-[#256427] text-white p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
        >
          <FiPlus /> Add Farm
        </button>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
        {farms.map((farm) => (
          <FarmCard
            key={farm.id}
            farm={farm}
            isActive={activeFarmId === farm.id}
            onClick={() => onSelectFarm(farm.id)}
          />
        ))}
      </div>
    </div>
  );
}
