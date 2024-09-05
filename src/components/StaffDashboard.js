import React, { useState, useEffect } from 'react';

const StaffDashboard = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staff')) || [];
    setStaff(storedStaff);
  }, []);

  const handleDelete = (index) => {
    let staff = JSON.parse(localStorage.getItem('staff')) || [];
    staff.splice(index, 1);
    localStorage.setItem('staff', JSON.stringify(staff));
    setStaff(staff); // Update the state after deletion
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Staff Dashboard</h1>
      {staff.length > 0 ? (
        staff.map((staffMember, index) => (
          <div key={index} className="border p-2 mb-2 rounded shadow">
            <p>Name: {staffMember.name}</p>
            <p>Role: {staffMember.role}</p>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))
      ) : (
        <p>No staff registered yet.</p>
      )}
    </div>
  );
};

export default StaffDashboard;
