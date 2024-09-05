import React from 'react';
import { getFromLocalStorage } from '../utils/localStorageUtils';

function PatientDashboard() {
  const patients = getFromLocalStorage('patients', []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Patient Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {patients.map(patient => (
          <div key={patient.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;
