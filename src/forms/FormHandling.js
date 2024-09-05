import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormHandling = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      appointmentDate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      appointmentDate: Yup.date().required('Appointment date is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label className="block text-gray-700">Appointment Date</label>
        <input
          type="date"
          name="appointmentDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.appointmentDate}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {formik.touched.appointmentDate && formik.errors.appointmentDate ? (
          <div className="text-red-500 text-sm">{formik.errors.appointmentDate}</div>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormHandling;
