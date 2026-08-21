import React, { useState } from 'react';
import FarmList from '../components/farm/FarmList';
import FarmDetails from '../components/farm/FarmDetails';
import AddFarm from '../components/farm/AddFarm';

const INITIAL_FARMS = [
  { id: 1, name: "Shivaji Maharaj Farm", area: 2.5, waterSource: "Borewell", soilType: "Black Clay", location: "Pune, Maharashtra", lat: "18.5204", lng: "73.8567" },
  { id: 2, name: "Panchavati Orchard", area: 2.7, waterSource: "Canal", soilType: "Red loam", location: "Baramati, Maharashtra", lat: "18.1560", lng: "74.5768" }
];

export default function MyFarm() {
  const [farms, setFarms] = useState(INITIAL_FARMS);
  const [activeFarmId, setActiveFarmId] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const selectedFarm = farms.find(f => f.id === activeFarmId);

  const handleAddFarm = (newFarm) => {
    setFarms([...farms, newFarm]);
    setActiveFarmId(newFarm.id);
    setIsAdding(false);
  };

  const handleDeleteFarm = (id) => {
    const updated = farms.filter(f => f.id !== id);
    setFarms(updated);
    if (updated.length > 0) {
      setActiveFarmId(updated[0].id);
    } else {
      setActiveFarmId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* List Column */}
      <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <FarmList 
          farms={farms} 
          activeFarmId={activeFarmId} 
          onSelectFarm={(id) => {
            setActiveFarmId(id);
            setIsAdding(false);
          }}
          onAddClick={() => setIsAdding(true)}
        />
      </div>

      {/* Details/Add Form Column */}
      <div className="lg:col-span-2">
        {isAdding ? (
          <AddFarm 
            onSave={handleAddFarm} 
            onCancel={() => setIsAdding(false)} 
          />
        ) : (
          <FarmDetails 
            farm={selectedFarm} 
            onDelete={handleDeleteFarm}
          />
        )}
      </div>
    </div>
  );
}
