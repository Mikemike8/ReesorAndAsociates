
import React, { useState } from 'react';  // Import useState hook

import { Link } from 'react-router-dom'; // Import the Link component
import Modal from './Modal';

import LegalGirl from '../assets/legalgirl.avif'


const Debtor = () => {


 const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    debtorInfo: '',
    additionalDetails: '',
    documentUrl: '', // To store the uploaded document URL
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    // Upload the file to Cloudinary
    const cloudName = 'dpttzjwpr'; // Replace with your Cloudinary cloud name
    const uploadPreset = 'PDFDATA'; // Replace with your unsigned upload preset

    const formDataToUpload = new FormData();
    formDataToUpload.append('file', selectedFile);
    formDataToUpload.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formDataToUpload,
      });

      const data = await response.json();

      if (data.secure_url) {
        // Update the formData with the uploaded document URL
        setFormData((prevData) => ({
          ...prevData,
          documentUrl: data.secure_url,
        }));

        // Proceed with form submission to MongoDB
        await fetch('https://reesorandasociatestestserver.onrender.com/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        setStatus('Form submitted successfully!');
        setFormData({
          fullName: '',
          companyName: '',
          phoneNumber: '',
          emailAddress: '',
          debtorInfo: '',
          additionalDetails: '',
          documentUrl: '',
        });
      } else {
        alert('Failed to upload the document.');
      }
    } catch (error) {
      console.error('Error uploading the document:', error);
      alert('An error occurred while uploading the document.');
    }
  };







  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"  >
      <div className="max-w-6xl mx-auto space-y-12" >
        
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
      <section className="text-center p-0 m-0  bg-gray-100">
  <h1 className="text-[60px] font-oswald mb-6 text-slate-800
 tracking-wide">
    Submit a Debtor
  </h1>
  <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
    Help us keep the industry informed. Use the form below to report companies or individuals who owe you money. 
    Your contribution strengthens the network and promotes accountability across the board.
  </p>
</section>
        
        {/* Debt Recovery Form Section */}
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[1500px] ">

        <h1 className="text-5xl font-oswald text-[#222222]   mb-6 border-b-2 border-[#222222]  pb-4">
            Freight Claim Recovery Submission
          </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="text">
            Company Name*
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address*
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
      </div>

      {/* Debtor Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Debtor Information*
        </label>
        <input
          type="text"
          name="debtorInfo"
          value={formData.debtorInfo}
          onChange={handleChange}
          placeholder="Who owes you money? (Company/Legal Name)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      {/* Document Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Documentation*
        </label>
        <div className="mt-1">
          <input
            type="file"
            name="documentFile"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
          <p className="text-xs mt-1 text-gray-600">
            Required: Bill of Lading, Rate Confirmation, Invoice (PDF/JPEG/PNG)
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          rows="4"
          name="additionalDetails"
          value={formData.additionalDetails}
          onChange={handleChange}
          placeholder="Include any special instructions or relevant information"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      {/* Process Timeline */}
      <div className="bg-red-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-[#222222]  mb-4">What Happens Next:</h3>
        <ol className="space-y-4 text-sm text-black">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#222222]  text-white rounded-full flex items-center justify-center mr-3">
              1
            </span>
            Submission review within 24 business hours
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#222222] text-white rounded-full flex items-center justify-center mr-3">
              2
            </span>
            Case evaluation by our legal team
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#222222] text-white rounded-full flex items-center justify-center mr-3">
              3
            </span>
            Recovery process initiation with your approval
          </li>
        </ol>
      </div>

    <button
  type="submit"
  className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-lg shadow-lg hover:from-[#333333] hover:to-[#666666] hover:text-gray-300 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
>
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
  Initiate Recovery Process
</button>

    </form>


  <Modal/>




          
        
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Debtor;