import React from 'react';

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Mobile brand placeholder */}
      <div className="flex lg:hidden items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center text-white text-sm font-bold">
          🌱
        </div>
        <h2 className="text-lg font-black text-[#2E7D32]">कृषि Mitra</h2>
      </div>
      
      {/* Search / Left spacer */}
      <div className="hidden sm:block text-sm text-gray-500 font-medium">
        Wednesday, 21 August 2026
      </div>

      {/* Right User Actions */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Language selector */}
        <div className="relative">
          <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-1.5 pr-8 text-xs font-semibold text-gray-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2E7D32]">
            <option>मराठी</option>
            <option>Hindi</option>
            <option>English</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            ▼
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute -top-1.5 -right-1.5 bg-[#E53935] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
            3
          </span>
        </button>

        {/* User Info & Avatar */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
          <div className="text-right hidden sm:block">
            <h4 className="text-xs font-bold text-[#263238]">Namaskar, किसान मित्र</h4>
            <p className="text-[10px] text-gray-500 flex items-center justify-end gap-1">
              📍 Pune, Maharashtra
            </p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 overflow-hidden flex items-center justify-center font-bold text-green-800 text-sm">
              🚜
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#43A047] border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
