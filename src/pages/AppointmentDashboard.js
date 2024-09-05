import React from 'react';
import { getFromLocalStorage } from '../utils/localStorageUtils';

function AppointmentDashboard() {
  const appointments = getFromLocalStorage('appointments', []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Appointment Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {appointments.map(appointment => (
          <div key={appointment.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Appointment #{appointment.id}</h2>
            <p>Patient: {appointment.patientName}</p>
            <p>Staff: {appointment.staffName}</p>
            <p>Date: {appointment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentDashboard;
