import React from 'react';
import { useFormik } from 'formik';

const StaffForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      role: '',
    },
    onSubmit: (values) => {
      let staff = JSON.parse(localStorage.getItem('staff')) || [];
      staff.push(values);
      localStorage.setItem('staff', JSON.stringify(staff));
      alert('Staff registered successfully!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4">
      <label className="block">Name</label>
      <input
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      
      <label className="block mt-4">Role</label>
      <input
        name="role"
        onChange={formik.handleChange}
        value={formik.values.role}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default StaffForm;
