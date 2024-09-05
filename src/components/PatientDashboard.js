import React, { useState, useEffect } from 'react';

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const handleDelete = (index) => {
    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(patients));
    setPatients(patients); // Update the state after deletion
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Patient Dashboard</h1>
      {patients.length > 0 ? (
        patients.map((patient, index) => (
          <div key={index} className="border p-2 mb-2 rounded shadow">
            <p>Name: {patient.name}</p>
            <p>Medical History: {patient.medicalHistory}</p>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))
      ) : (
        <p>No patients registered yet.</p>
      )}
    </div>
  );
};

export default PatientDashboard;
