'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    contactNumber: '',
    requirements: '',
    followUp: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'contactNumber' && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contactNumber.length !== 10) {
      alert('Contact number must be exactly 10 digits.');
      return;
    }

    const templateParams = {
      customerName: formData.customerName,
      address: formData.address,
      contactNumber: formData.contactNumber,
      requirements: formData.requirements,
      followUp: formData.followUp,
    };

    try {
      const response = await emailjs.send(
        'service_d1tzgxe',
        'template_wq9sl2m',
        templateParams,
        'x7386ajUHPg8_m23o'
      );

      console.log('Success:', response.status, response.text);
      alert('Your enquiry has been submitted!');
      setFormData({
        customerName: '',
        address: '',
        contactNumber: '',
        requirements: '',
        followUp: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your enquiry. Please try again.');
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="flex min-h-screen items-center justify-center px-4 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8">
          <img
            src="images/enquiry.png"
            alt="Logo"
            className="w-64 sm:w-80 md:w-96 lg:w-64 h-auto"
          />
        </div>
        <div className="bg-pink-100 w-full max-w-sm rounded-lg shadow-lg p-6 mt-32"> 
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Enquiry</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                placeholder="Enter your contact number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                maxLength={10}
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <select
                id="requirements"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.requirements}
                onChange={handleChange}
                required
              >
                <option value="">Select Requirement</option>
                <option value="Solar PV">Solar PV</option>
                <option value="Heat Pump">Heat Pump</option>
                <option value="Solar Water Heater">Solar Water Heater</option>
                <option value="Pressure Pump">Pressure Pump</option>
              </select>
            </div>

            <div>
              <label htmlFor="followUp" className="block text-sm font-medium text-gray-700">
                Follow Up
              </label>
              <input
                type="text"
                id="followUp"
                placeholder="Enter follow-up details"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.followUp}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="absolute bottom-4 w-full text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
}