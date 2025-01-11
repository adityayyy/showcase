'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    fullname: '',
    contactNumber: '',
    businessType: '',
    businessAddress: '',
    businessName: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // If the field is contactNumber, allow only numeric input
    if (id === 'contactNumber' && !/^\d*$/.test(value)) {
      return; // Prevent non-numeric characters
    }

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the contact number is exactly 10 digits
    if (formData.contactNumber.length !== 10) {
      alert('Contact number must be exactly 10 digits.');
      return;
    }

    const templateParams = {
      fullname: formData.fullname,
      contactNumber: formData.contactNumber,
      businessType: formData.businessType,
      businessAddress: formData.businessAddress,
      businessName: formData.businessName,
    };

    try {
      const response = await emailjs.send(
        'service_d1tzgxe', // Replace with your EmailJS Service ID
        'template_wq9sl2m', // Replace with your EmailJS Template ID
        templateParams, // Sending the templateParams that match the placeholders in the template
        'x7386ajUHPg8_m23o' // Replace with your EmailJS User ID
      );

      console.log('Success:', response.status, response.text);
      alert('Your enquiry has been submitted!');

      // Clear the form data after submission
      setFormData({
        fullname: '',
        contactNumber: '',
        businessType: '',
        businessName: '',
        businessAddress: '',
      });
    } catch (error) {
      console.error('Error Details:', error);
      alert('There was an error sending your enquiry. Please try again.');
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="flex min-h-screen items-center justify-center px-4 relative">
    
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mb-4">
          <img
            src="images/enquiry.png" // Replace with your logo path
            alt="Logo"
            className="w-64 sm:w-80 md:w-96 lg:w-64 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-5 h-auto" // Adjust margin for different screen sizes
          />
        </div>

  
        <div className="bg-pink-100 w-full max-w-sm rounded-lg shadow-lg p-6 mt-16"> {/* Light pink background */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Enquiry</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.fullname}
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
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                Business Type
              </label>
              <select
                id="businessType"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="">Select Business Type</option>
                <option value="School & College">School & College</option>
                <option value="Computer Coaching">Computer Coaching</option>
                <option value="Hotel & Restaurant">Hotel & Restaurant</option>
                <option value="Cloth Shop">Cloth Shop</option>
                <option value="Doctors & Hospital">Doctors & Hospital</option>
                <option value="Computer Shop">Computer Shop</option>
                <option value="Mobile Shop">Mobile Shop</option>
                <option value="Tour & Travel">Tour & Travel</option>
                <option value="Automobile Shop">Automobile Shop</option>
                <option value="Bank & Finance">Bank & Finance</option>
                <option value="Health & Fitness">Health & Fitness</option>
                <option value="Beauty Parlour">Beauty Parlour</option>
                <option value="Industries">Industries</option>
                <option value="Builder & Contractor">Builder & Contractor</option>
                <option value="Agriculture Shop">Agriculture Shop</option>
                <option value="Online Services">Online Services</option>
                <option value="Marriage Hall">Marriage Hall</option>
                <option value="Gift & Greetings">Gift & Greetings</option>
                <option value="Home Decor Shop">Home Decor Shop</option>
                <option value="House for Rent">House for Rent</option>
              </select>
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                placeholder="Enter your business name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">
                Business Address
              </label>
              <input
                type="text"
                id="businessAddress"
                placeholder="Enter your business address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.businessAddress}
                onChange={handleChange}
                required
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
