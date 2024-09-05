const apiUrl = 'http://localhost:3000';

export const fetchPatients = async () => {
  const response = await fetch(`${apiUrl}/patients`);
  return response.json();
};

export const createAppointment = async (appointment) => {
  const response = await fetch(`${apiUrl}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  });
  return response.json();
};
