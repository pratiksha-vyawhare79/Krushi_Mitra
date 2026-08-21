import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  FiFileText, FiTrendingUp, FiCamera, FiBarChart2, FiSun, 
  FiAlertTriangle, FiClipboard, FiHome, FiCalendar, FiPlusCircle,
  FiMoreHorizontal, FiDollarSign
} from 'react-icons/fi';
import { GiSprout, GiSeedling, GiLeaf, GiWaterDrop, GiVirus } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Top Banner & Weather Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Banner */}
        <div className="lg:col-span-2 rounded-3xl relative overflow-hidden bg-[#F1F6EC] flex flex-col sm:flex-row justify-between min-h-[220px] shadow-sm border border-green-200/40">
          <div className="p-8 flex-1 flex flex-col justify-between z-10">
            <div>
              <h2 className="text-3xl font-extrabold text-[#263238] leading-tight mb-2 flex items-center gap-2">
                Namaskar, किसान मित्र! <span className="animate-bounce">👋</span>
              </h2>
              <p className="text-sm text-gray-600 font-medium mb-6">
                Let's make your farming smarter today.
              </p>
            </div>
            
            {/* Metadata Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#E4ECE0] px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                📍 Pune, Maharashtra
              </span>
              <span className="bg-[#E4ECE0] px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                🚜 My Farms: 2
              </span>
              <span className="bg-[#E4ECE0] px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                📐 Total Area: 5.2 Acres
              </span>
            </div>
          </div>

          {/* Farmer photo overlay on the right */}
          <div className="w-full sm:w-[45%] h-48 sm:h-auto relative overflow-hidden">
            <img 
              src="/images/farmer.png" 
              alt="Farmer looking at phone" 
              className="w-full h-full object-cover object-top"
            />
            {/* Fade effect between left card content and photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1F6EC] via-[#F1F6EC]/30 to-transparent pointer-events-none hidden sm:block"></div>
          </div>
        </div>

        {/* Floating Weather Card */}
        <div className="bg-[#2E7D32] rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 rounded-full bg-[#66BB6A]/20 blur-xl"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-green-100 font-semibold tracking-wider uppercase mb-1">Today's Weather</p>
              <h3 className="text-4xl font-black">27°C</h3>
              <p className="text-sm font-medium text-green-50">Partly Cloudy</p>
            </div>
            <span className="text-4xl filter drop-shadow-sm">⛅</span>
          </div>

          {/* Weather details */}
          <div className="grid grid-cols-3 gap-3 border-t border-green-600/60 pt-4 mt-2">
            <div className="text-center">
              <span className="text-xs text-green-200 block mb-1">💧 Humidity</span>
              <span className="font-bold text-sm">65%</span>
            </div>
            <div className="text-center">
              <span className="text-xs text-green-200 block mb-1">🌧️ Rainfall</span>
              <span className="font-bold text-sm">0 mm</span>
            </div>
            <div className="text-center">
              <span className="text-xs text-green-200 block mb-1">💨 Wind</span>
              <span className="font-bold text-sm">12 km/h</span>
            </div>
          </div>

          <button className="w-full text-center text-xs font-bold text-green-100 hover:text-white mt-4 flex items-center justify-center gap-1">
            View 5 Day Forecast ➔
          </button>
        </div>
      </div>

      {/* Quick Access Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[
          { label: "Scan Soil Report", desc: "Get soil analysis", icon: <FiFileText className="w-6 h-6 text-green-700" />, color: "bg-[#EBF7EE] text-green-800 border-green-200/50 hover:bg-[#deeed2]" },
          { label: "Crop Recommendation", desc: "Find best crops", icon: <GiSeedling className="w-6 h-6 text-emerald-700" />, color: "bg-[#EBF7EE] text-emerald-800 border-emerald-200/50 hover:bg-[#deeed2]" },
          { label: "Market Prices", desc: "Check mandi rates", icon: <FiDollarSign className="w-6 h-6 text-amber-700" />, color: "bg-[#FEF5E7] text-amber-800 border-amber-200/50 hover:bg-[#fdf0d5]" },
          { label: "Crop Health Scan", desc: "Detect diseases", icon: <FiCamera className="w-6 h-6 text-blue-700" />, color: "bg-[#EBF5FB] text-blue-800 border-blue-200/50 hover:bg-[#d6eaf8]" },
          { label: "What If Simulator", desc: "Compare scenarios", icon: <FiBarChart2 className="w-6 h-6 text-purple-700" />, color: "bg-[#F5EEF8] text-purple-800 border-purple-200/50 hover:bg-[#ebdef0]" }
        ].map((act, i) => (
          <div 
            key={i} 
            className={`p-4 rounded-2xl border text-center cursor-pointer transition-all hover:scale-[1.03] hover:shadow-sm ${act.color} flex flex-col items-center justify-center`}
          >
            <div className="p-3 bg-white rounded-full shadow-sm mb-3">
              {act.icon}
            </div>
            <h4 className="text-xs font-bold mb-0.5">{act.label}</h4>
            <p className="text-[10px] opacity-75">{act.desc}</p>
          </div>
        ))}
      </div>

      {/* Middle Grid: Crop, Seeds & Market */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Crop Recommendation */}
        <Card title="Top Crop Recommendation" action="View All Recommendations ➔" icon={<GiLeaf className="text-green-700" />}>
          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
            <img 
              src="/images/crops/soybean.png" 
              alt="Soybean pods" 
              className="w-20 h-20 rounded-xl object-cover shadow-sm border border-green-200"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-[#263238] text-lg">Soybean</h4>
                <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Best Match
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-extrabold text-[#2E7D32]">92%</span>
                <span className="text-xs text-gray-500">Suitability Score</span>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-xs font-semibold text-gray-700">
            <li className="flex items-center gap-2 text-green-800">
              <span className="text-green-600">✔</span> Suitable for your soil
            </li>
            <li className="flex items-center gap-2 text-green-800">
              <span className="text-green-600">✔</span> Good in current weather
            </li>
            <li className="flex items-center gap-2 text-green-800">
              <span className="text-green-600">✔</span> High market demand
            </li>
          </ul>
        </Card>

        {/* Recommended Seeds */}
        <Card title="Recommended Seeds" action="View All" icon={<GiSeedling className="text-[#F9A825]" />}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img 
                src="/images/seeds/soybean_seeds.png" 
                alt="Soybean seeds" 
                className="w-16 h-16 rounded-xl object-cover border border-yellow-200 shadow-sm"
              />
              <div className="flex-1 text-xs">
                <h4 className="font-bold text-gray-900 text-sm">JS 335 (Soybean)</h4>
                <p className="text-gray-500 mt-1">Duration: 105-110 days</p>
                <p className="text-gray-500">Yield: 15-18 Quintal/acre</p>
                <p className="text-gray-500">Water Need: Medium</p>
              </div>
            </div>
            <Button variant="outline" className="w-full text-xs py-1.5">
              Details
            </Button>
            {/* Carousel dots mockup */}
            <div className="flex justify-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
            </div>
          </div>
        </Card>

        {/* Mandi Prices */}
        <Card title="Today's Market Prices" action="View All" icon={<FiDollarSign className="text-green-700" />}>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <div>
                <h4 className="font-extrabold text-gray-900">Soybean</h4>
                <p className="text-gray-400 text-[10px]">📍 Pune Mandi</p>
              </div>
              <span className="text-green-600 font-bold text-xs">+2.35% vs yesterday</span>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
              <div>
                <span className="text-[10px] text-gray-400 block">Min Price</span>
                <span className="font-bold text-xs text-gray-800">₹ 4,850</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Max Price</span>
                <span className="font-bold text-xs text-gray-800">₹ 5,600</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Modal Price</span>
                <span className="font-bold text-xs text-green-700">₹ 5,350</span>
              </div>
            </div>

            {/* Sparkline chart placeholder */}
            <div className="h-6 flex items-end gap-1 px-2 pt-2 justify-center">
              <span className="w-full h-1/2 bg-green-200 rounded-sm"></span>
              <span className="w-full h-2/3 bg-green-200 rounded-sm"></span>
              <span className="w-full h-1/3 bg-green-200 rounded-sm"></span>
              <span className="w-full h-3/4 bg-green-300 rounded-sm"></span>
              <span className="w-full h-5/6 bg-green-500 rounded-sm"></span>
            </div>

            <p className="text-[9px] text-center text-gray-400">Last Updated: Today, 08:30 AM</p>
          </div>
        </Card>
      </div>

      {/* Bottom Grid: Risks & Calendar Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Risk Summary */}
        <Card title="Risk Summary" action="View Details" icon={<FiAlertTriangle className="text-amber-600" />}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
              <span className="text-2xl text-red-600"><GiWaterDrop /></span>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Water Risk</h4>
                <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">High</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <span className="text-2xl text-orange-600"><GiVirus /></span>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Disease Risk</h4>
                <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">Medium</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-2xl border border-green-100">
              <span className="text-2xl text-green-600"><FiSun /></span>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Weather Risk</h4>
                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Low</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <span className="text-2xl text-amber-600"><FiDollarSign /></span>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Market Risk</h4>
                <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">Medium</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Today's Farm Tasks */}
        <Card title="Today's Farm Tasks" action="View Calendar" icon={<FiClipboard className="text-[#2E7D32]" />}>
          <ul className="space-y-3">
            {[
              { task: "Check soil moisture", when: "Today", checked: true },
              { task: "Spray for leaf miner", when: "Tomorrow", checked: false },
              { task: "Apply fertilizer", when: "In 3 days", checked: false }
            ].map((task, idx) => (
              <li 
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs"
              >
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    checked={task.checked} 
                    readOnly
                    className="w-4 h-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300 rounded"
                  />
                  <span className={`font-semibold ${task.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {task.task}
                  </span>
                </div>
                <span className={`font-bold ${task.checked ? 'text-gray-400' : 'text-[#2E7D32]'}`}>
                  {task.when}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Floating Bottom Navigation Bar (Mobile styling mockup) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full shadow-2xl border border-gray-100 flex items-center gap-8 md:hidden z-50">
        <button className="flex flex-col items-center text-[#2E7D32] gap-0.5">
          <span className="text-lg"><FiHome /></span>
          <span className="text-[9px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#2E7D32] gap-0.5">
          <span className="text-lg"><GiSprout /></span>
          <span className="text-[9px] font-semibold">My Farm</span>
        </button>
        <div className="w-12 h-12 rounded-full bg-[#2E7D32] text-white flex items-center justify-center -translate-y-4 shadow-lg border-4 border-white select-none">
          <FiPlusCircle className="w-6 h-6" />
        </div>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#2E7D32] gap-0.5">
          <span className="text-lg"><FiCalendar /></span>
          <span className="text-[9px] font-semibold">Calendar</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#2E7D32] gap-0.5">
          <span className="text-lg"><FiMoreHorizontal /></span>
          <span className="text-[9px] font-semibold">More</span>
        </button>
      </div>
    </div>
  );
}
