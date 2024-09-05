import React, { useState, useEffect } from 'react';

const AppointmentDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (index) => {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    setAppointments(appointments); // Update the state after deletion
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Appointment Dashboard</h1>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index} className="border p-2 mb-2 rounded shadow">
            <p>Patient: {appointment.patient}</p>
            <p>Staff: {appointment.staff}</p>
            <p>Date: {appointment.date}</p>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))
      ) : (
        <p>No appointments registered yet.</p>
      )}
    </div>
  );
};

export default AppointmentDashboard;
