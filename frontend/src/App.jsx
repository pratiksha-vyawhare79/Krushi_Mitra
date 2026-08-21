import React, { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: "कृषि Mitra",
      subtitle: "AI-Powered Smart Farmer Assistance Platform",
      tagline: "Knowledge | Guidance | Prosperity",
      alert: "System structure initialized successfully. Ready to build features!",
      features: "Core Differentiators",
    },
    mr: {
      title: "कृषि Mitra",
      subtitle: "कृत्रिम बुद्धिमत्ता आधारित स्मार्ट शेतकरी सहाय्यक प्लॅटफॉर्म",
      tagline: "ज्ञान | मार्गदर्शन | समृद्धी",
      alert: "सिस्टम रचना यशस्वीरित्या सुरू झाली. वैशिष्ट्ये तयार करण्यासाठी सज्ज!",
      features: "मुख्य वैशिष्ट्ये",
    },
    hi: {
      title: "कृषि Mitra",
      subtitle: "एआई-संचालित स्मार्ट किसान सहायता मंच",
      tagline: "ज्ञान | मार्गदर्शन | समृद्धी",
      alert: "सिस्टम संरचना सफलतापूर्वक प्रारंभ की गई। सुविधाएँ बनाने के लिए तैयार!",
      features: "मुख्य विशेषताएं",
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8FAF5' }}>
      {/* Header */}
      <header className="shadow-md text-white" style={{ backgroundColor: '#2E7D32' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl border-2 border-white" style={{ backgroundColor: '#66BB6A' }}>
              कM
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">{t.title}</h1>
              <p className="text-xs text-green-100">{t.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLang('en')} 
              className={`px-3 py-1 rounded text-sm transition-all ${lang === 'en' ? 'bg-yellow-500 font-bold text-gray-900 shadow' : 'bg-green-700 hover:bg-green-600'}`}
              style={lang === 'en' ? { backgroundColor: '#F9A825' } : {}}
            >
              English
            </button>
            <button 
              onClick={() => setLang('mr')} 
              className={`px-3 py-1 rounded text-sm transition-all ${lang === 'mr' ? 'bg-yellow-500 font-bold text-gray-900 shadow' : 'bg-green-700 hover:bg-green-600'}`}
              style={lang === 'mr' ? { backgroundColor: '#F9A825' } : {}}
            >
              मराठी
            </button>
            <button 
              onClick={() => setLang('hi')} 
              className={`px-3 py-1 rounded text-sm transition-all ${lang === 'hi' ? 'bg-yellow-500 font-bold text-gray-900 shadow' : 'bg-green-700 hover:bg-green-600'}`}
              style={lang === 'hi' ? { backgroundColor: '#F9A825' } : {}}
            >
              हिंदी
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-green-100 mb-8 transition-transform hover:scale-[1.01]">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-green-800 bg-green-100 mb-4">
            v0.1.0 Ready
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: '#263238' }}>
            {t.subtitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            An advanced platform combining soil chemistry analysis, geolocalized real-time weather forecasts, historical rotation trends, and commodity pricing indices to guide small and mediumholder farmers toward optimized harvests.
          </p>

          <div className="p-4 rounded-lg flex items-center gap-3 border border-green-200" style={{ backgroundColor: '#F8FAF5' }}>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#66BB6A' }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: '#2E7D32' }}></span>
            </span>
            <span className="text-sm font-medium" style={{ color: '#2E7D32' }}>
              {t.alert}
            </span>
          </div>
        </div>

        {/* Feature Grid */}
        <h3 className="text-xl font-bold mb-4" style={{ color: '#263238' }}>{t.features}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: '#2E7D32' }}>
              🌱
            </div>
            <h4 className="text-lg font-bold mb-2">Scientific Decision Engine</h4>
            <p className="text-sm text-gray-600">
              Integrates NPK values, water table data, local soil maps, and seasonal weather variables to produce targeted recommendations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: '#2E7D32' }}>
              📊
            </div>
            <h4 className="text-lg font-bold mb-2">What-If Decision Simulator</h4>
            <p className="text-sm text-gray-600">
              Allows dynamic updates to water levels, rain patterns, and market prices so farmers can preview profits and risk factors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: '#2E7D32' }}>
              🗣️
            </div>
            <h4 className="text-lg font-bold mb-2">Local Accessibility First</h4>
            <p className="text-sm text-gray-600">
              Multilingual interface supporting Marathi and Hindi voice-based operations to reduce technical and literacy barriers.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-6 border-t border-gray-800 text-center text-sm">
        <p>&copy; 2026 कृषि Mitra. Design System verified under strict color standards.</p>
      </footer>
    </div>
  );
}

export default App;
