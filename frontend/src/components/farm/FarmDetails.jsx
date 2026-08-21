import React from 'react';
import Card from '../common/Card';
import { FiMap, FiActivity, FiLayers, FiFileText, FiTrash2, FiDroplet } from 'react-icons/fi';

export default function FarmDetails({ farm, onDelete }) {
  if (!farm) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center text-gray-400 border border-gray-100 min-h-[300px] flex items-center justify-center">
        Select a farm to view full details.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Detail Head */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-[#263238]">{farm.name}</h3>
          <p className="text-xs text-gray-500 font-medium">📍 {farm.location}</p>
        </div>
        <button 
          onClick={() => onDelete(farm.id)}
          className="text-red-500 hover:text-red-700 p-2.5 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-sm"
        >
          <FiTrash2 />
        </button>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">Land Area</span>
          <span className="text-lg font-black text-[#263238]">{farm.area} Acres</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">Water Source</span>
          <span className="text-lg font-black text-[#263238] flex items-center gap-1">
            <FiDroplet className="text-blue-500 text-base" /> {farm.waterSource}
          </span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">Soil Class</span>
          <span className="text-lg font-black text-[#263238]">{farm.soilType}</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">Active Crop</span>
          <span className="text-lg font-black text-[#2E7D32]">Soybean</span>
        </div>
      </div>

      {/* GPS Boundaries Map Grid */}
      <Card title="GPS Farm Boundaries Map" icon={<FiMap className="text-[#2E7D32]" />}>
        <div className="bg-[#F8FAF5] rounded-2xl h-48 border border-green-100/60 relative overflow-hidden flex items-center justify-center">
          {/* Map background mockup */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: 'radial-gradient(circle, #2E7D32 10%, transparent 11%)',
            backgroundSize: '15px 15px'
          }}></div>
          
          {/* Farm boundary outline */}
          <div className="border-4 border-dashed border-green-500 bg-green-500/20 px-8 py-10 rounded-2xl text-center z-10 relative">
            <span className="absolute -top-3 -left-3 bg-[#E53935] text-white p-1 rounded-full text-[8px] font-bold">A</span>
            <span className="absolute -bottom-3 -right-3 bg-[#E53935] text-white p-1 rounded-full text-[8px] font-bold">B</span>
            <p className="text-[#2E7D32] font-black text-xs">GPS Polygons Active</p>
            <p className="text-[10px] text-gray-500">Lat: {farm.lat} / Long: {farm.lng}</p>
          </div>
        </div>
      </Card>

      {/* Historical logs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card title="Soil Test History" icon={<FiFileText />} action="New Test">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-700">Lab OCR Report</span>
              <span className="text-gray-400">June 2026</span>
            </div>
            <div className="flex justify-between items-center text-xs p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-700">Manual Entry</span>
              <span className="text-gray-400">Jan 2026</span>
            </div>
          </div>
        </Card>

        <Card title="Connected IoT Sensors" icon={<FiActivity />} action="Connect">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100 text-xs">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <div>
              <h5 className="font-bold text-green-900">ESP32 Soil Moisture Node 1</h5>
              <p className="text-[10px] text-green-700">Connected - Last seen 2 mins ago</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
