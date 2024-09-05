import React, { useState, useEffect } from 'react';

const AppointmentForm = () => {
  const [patients, setPatients] = useState([]);
  const [staff, setStaff] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    patientId: '',
    staffId: '',
    date: '',
    time: ''
  });

  // Load patients and staff from localStorage when the component mounts
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const savedStaff = JSON.parse(localStorage.getItem('staff')) || [];
    setPatients(savedPatients);
    setStaff(savedStaff);
  }, []);

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    localStorage.setItem('appointments', JSON.stringify([...savedAppointments, appointmentData]));
    alert('Appointment registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Select Patient</label>
        <select
          name="patientId"
          value={appointmentData.patientId}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select Patient --</option>
          {patients.map((patient, index) => (
            <option key={index} value={patient.id}>
              {patient.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="staffId" className="block text-sm font-medium text-gray-700">Select Staff</label>
        <select
          name="staffId"
          value={appointmentData.staffId}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select Staff --</option>
          {staff.map((staffMember, index) => (
            <option key={index} value={staffMember.id}>
              {staffMember.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          name="time"
          value={appointmentData.time}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Register Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
