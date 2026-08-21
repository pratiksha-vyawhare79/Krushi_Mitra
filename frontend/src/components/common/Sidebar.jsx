import React from 'react';
import brandLogo from '../../assets/images/image.png';

const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'my-farm', label: 'My Farm', icon: '🚜' },
  { id: 'soil-health', label: 'Soil Health', icon: '🧬' },
  { id: 'weather', label: 'Weather', icon: '☀️' },
  { id: 'recommendations', label: 'Recommendations', icon: '🌾' },
  { id: 'market-prices', label: 'Market Prices', icon: '📈' },
  { id: 'crop-calendar', label: 'Crop Calendar', icon: '📅' },
  { id: 'profit-risk', label: 'Profit & Risk', icon: '📊' },
  { id: 'crop-health', label: 'Crop Health', icon: '🍃' },
  { id: 'notifications', label: 'Notifications', icon: '🔔' },
  { id: 'nearby-services', label: 'Nearby Services', icon: '📍' },
  { id: 'voice-assistant', label: 'Voice Assistant', icon: '🎙️' },
  { id: 'profile', label: 'Profile', icon: '👤' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];

export default function Sidebar({ activeTab = 'home', onTabChange }) {
  return (
    <aside className="w-64 bg-white min-h-screen border-r border-gray-100 flex flex-col justify-between p-4 hidden lg:flex">
      <div>
        {/* Brand Logo */}
        <div className="px-1 py-2 mb-6">
          <img 
            src={brandLogo} 
            alt="Krushi Mitra Logo" 
            className="w-full h-auto object-contain max-h-16"
          />
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange && onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2E7D32] to-[#43A047] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Need Help Widget */}
      <div className="bg-[#F8FAF5] rounded-2xl p-4 border border-green-100/60 mt-6 text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
          📞
        </div>
        <h4 className="text-sm font-bold text-[#263238] mb-1">Need Help?</h4>
        <p className="text-xs text-gray-500 mb-3">Talk to Krushi Mitra</p>
        <button className="w-full bg-[#2E7D32] hover:bg-[#256427] text-white py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm">
          Start Voice Chat
        </button>
      </div>
    </aside>
  );
}
