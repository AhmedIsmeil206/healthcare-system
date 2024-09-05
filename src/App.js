import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PatientForm from './forms/PatientForm';
import StaffForm from './forms/StaffForm';
import AppointmentForm from './forms/AppointmentForm';
import PatientDashboard from './components/PatientDashboard';
import StaffDashboard from './components/StaffDashboard';
import AppointmentDashboard from './components/AppointmentDashboard';

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Dashboard</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/patients" className="text-white hover:text-gray-200 transition">Patients</Link>
            </li>
            <li>
              <Link to="/staff" className="text-white hover:text-gray-200 transition">Staff</Link>
            </li>
            <li>
              <Link to="/appointments" className="text-white hover:text-gray-200 transition">Appointments</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Forms Displayed in Parallel */}
      <div className="container mx-auto p-4">
        <h1 className="text-lg font-bold mb-4 text-center">Register New Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Patient Form */}
          <div className="bg-white p-6 shadow-lg rounded-md flex flex-col items-center">
            <h2 className="font-bold mb-2">Register Patient</h2>
            <div className="w-full">
              <PatientForm />
            </div>
          </div>

          {/* Staff Form */}
          <div className="bg-white p-6 shadow-lg rounded-md flex flex-col items-center">
            <h2 className="font-bold mb-2">Register Staff</h2>
            <div className="w-full">
              <StaffForm />
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white p-6 shadow-lg rounded-md flex flex-col items-center">
            <h2 className="font-bold mb-2">Register Appointment</h2>
            <div className="w-full">
              <AppointmentForm />
            </div>
          </div>
        </div>

        {/* Dashboard Section Centered Below Forms */}
        <div className="mt-10">
          <Routes>
            <Route path="/patients" element={<PatientDashboard />} />
            <Route path="/staff" element={<StaffDashboard />} />
            <Route path="/appointments" element={<AppointmentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
