// src/Services.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for services A-Z
const servicesData = {
  A: ["Allergy Testing", "Audiology"],
  B: ["Bariatric Surgery", "Behavioral Health"],
  C: ["Cancer Care", "Cardiology"],
  D: ["Dental Care", "Dermatology", "Diabetes", "Digestive Health"],
  E: ["Ear, Nose & Throat (ENT)", "Emergency Medicine"],
  F: ["Family Planning", "Foot Care"],
  G: ["Gastroenterology", "Genetics"],
  H: ["HIV/AIDS Program", "Heart Health"],
  I: ["Infectious Disease", "Internal Medicine"],
  J: ["Joint Replacement", "Juvenile Diabetes"],
  K: ["Kidney Care", "Knee Surgery"],
  L: ["Labor & Delivery", "Lifestyle Management"],
  M: ["Mental Health", "Maternity Care"],
  N: ["Nutrition", "Neurology"],
  O: ["Oncology", "Ophthalmology"],
  P: ["Pediatrics", "Physical Therapy"],
  Q: ["Quit Smoking Programs"],
  R: ["Rehabilitation", "Respiratory Therapy"],
  S: ["Surgery", "Sleep Disorders"],
  T: ["Telemedicine", "Travel Medicine"],
  U: ["Urology", "Urgent Care"],
  V: ["Vaccination", "Vascular Health"],
  W: ["Weight Management", "Women's Health"],
  X: ["X-Ray Services", "Xeroderma Pigmentosum Care"],
  Y: ["Youth Programs", "Yoga Therapy"],
  Z: ["Zoonotic Diseases", "Zinc Deficiency"],
};

// Flatten all services for the "All" option
const allServices = Object.values(servicesData).flat();

const Services = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#F5F5DC] to-[#48CCCC] p-20 text-[#008080]">
      <h1 className="text-3xl font-semibold mt-10">Services</h1>
      <h2 className="text-xl mb-4">Browse all Services</h2>
      <h3 className="mb-4">BROWSE A-Z</h3>
      <div className="flex space-x-4 mb-5">

        <button
          onClick={() => handleLetterClick('')}
          className="text-blue-600 hover:underline"
        >
          ALL
        </button>
        {Object.keys(servicesData).map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="text-blue-600 hover:underline"
          >
            {letter}
          </button>
        ))}

      </div>
      {selectedLetter && (
        <div className="mb-6">
          <h4 className="font-semibold">Services starting with "{selectedLetter}":</h4>
          <ul>
            {servicesData[selectedLetter].map((service, index) => (
              <li key={index} className="my-1">
                <Link to={`/services/${service}`} className="text-[#008080] hover:underline">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {!selectedLetter && (
        <div className="mb-4">
          <h4 className="font-semibold mb-4">All Services:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map((service, index) => (
              <div key={index} className="border p-2 rounded shadow">
                <Link className="text-[#008080] hover:underline">
                  {service}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
