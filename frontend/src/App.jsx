import React, { useState } from 'react';
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex bg-gray-50/50" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <Navbar />

        {/* Dynamic page contents */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-8">
          {activeTab === 'home' ? (
            <Home />
          ) : (
            <div className="flex items-center justify-center min-h-[400px] text-gray-400 bg-white rounded-3xl border border-gray-100 p-8">
              <div className="text-center">
                <span className="text-4xl block mb-2">🚧</span>
                <h3 className="text-lg font-bold text-gray-700 uppercase tracking-wider">{activeTab.replace('-', ' ')} Page</h3>
                <p className="text-xs text-gray-500 mt-1">This module is part of the upcoming sprint roadmap.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
