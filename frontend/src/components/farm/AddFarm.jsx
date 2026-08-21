import React, { useState } from 'react';
import Button from '../common/Button';

export default function AddFarm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    waterSource: 'Rain-fed',
    soilType: 'Black Clay',
    location: 'Pune, Maharashtra',
    lat: '18.5204',
    lng: '73.8567'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.area) return;
    onSave({
      id: Date.now(),
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-[#263238]">Register New Farm</h3>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-bold text-gray-500 block mb-1">Farm Name</label>
          <input 
            type="text" 
            placeholder="e.g., Mango Orchard Farm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Land Area (Acres)</label>
            <input 
              type="number" 
              step="0.1"
              placeholder="e.g., 2.5"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Water Source</label>
            <select 
              value={formData.waterSource}
              onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
            >
              <option>Rain-fed</option>
              <option>Borewell</option>
              <option>Canal</option>
              <option>Well</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Soil Type</label>
            <select 
              value={formData.soilType}
              onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
            >
              <option>Black Clay</option>
              <option>Sandy</option>
              <option>Red loam</option>
              <option>Alluvial</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Village/Location</label>
            <input 
              type="text" 
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2E7D32]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Latitude</label>
            <input 
              type="text" 
              value={formData.lat}
              onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">Longitude</label>
            <input 
              type="text" 
              value={formData.lng}
              onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-xl text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button variant="ghost" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit">Save Farm</Button>
      </div>
    </form>
  );
}
