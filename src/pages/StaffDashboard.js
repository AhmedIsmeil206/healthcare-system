import React from 'react';
import { getFromLocalStorage } from '../utils/localStorageUtils';

function StaffDashboard() {
  const staff = getFromLocalStorage('staff', []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Staff Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {staff.map(member => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p>Specialty: {member.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffDashboard;
