import { useState } from 'react';

const usePatientState = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [staff, setStaff] = useState([]);

  const addPatient = (patient) => setPatients([...patients, patient]);
  const scheduleAppointment = (appointment) => setAppointments([...appointments, appointment]);
  const addStaff = (staffMember) => setStaff([...staff, staffMember]);

  return {
    patients,
    appointments,
    staff,
    addPatient,
    scheduleAppointment,
    addStaff,
  };
};

export default usePatientState;
