export const patientQuickStats = [
  {
    label: "Upcoming appointments",
    value: 2,
    description: "Next consultation in 3 days",
  },
  {
    label: "Active prescriptions",
    value: 1,
    description: "Medication refill due soon",
  },
  {
    label: "Doctors available",
    value: 10,
    description: "Across family medicine and specialists",
  },
];

export const doctorsDirectory = [
  {
    id: 1,
    name: "Dr. Amelia Cruz",
    specialization: "Family Medicine",
    availability: "Available today, 2:00 PM - 6:00 PM",
  },
  {
    id: 2,
    name: "Dr. Miguel Santos",
    specialization: "Cardiology",
    availability: "Next slot tomorrow, 9:30 AM",
  },
  {
    id: 3,
    name: "Dr. Liza Mendoza",
    specialization: "Pediatrics",
    availability: "Available Wednesday, 10:00 AM",
  },
  {
    id: 4,
    name: "Dr. Noah Reyes",
    specialization: "Dermatology",
    availability: "Virtual consults this Friday",
  },
];

export const patientAppointments = [
  {
    id: 101,
    status: "Upcoming",
    date: "October 12, 2025",
    time: "3:30 PM",
    doctor: "Dr. Amelia Cruz",
  },
  {
    id: 102,
    status: "Completed",
    date: "September 28, 2025",
    time: "11:00 AM",
    doctor: "Dr. Miguel Santos",
  },
];

export const patientPrescriptions = [
  {
    id: "RX-53241",
    doctor: "Dr. Miguel Santos",
    medicine: "Atorvastatin",
    dosage: "10mg once daily",
    instructions: "Take in the evening after meals",
  },
  {
    id: "RX-87422",
    doctor: "Dr. Liza Mendoza",
    medicine: "Cetirizine",
    dosage: "5mg as needed",
    instructions: "Take at night if symptoms persist",
  },
];
