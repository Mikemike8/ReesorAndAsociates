
import React, { useState } from 'react';  // Import useState hook

import { Link } from 'react-router-dom'; // Import the Link component
import Modal from './Modal';


const Debtor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    debtorInfo: "",
    additionalDetails: "",
    documentFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documentFile: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("companyName", formData.companyName);
    formPayload.append("phoneNumber", formData.phoneNumber);
    formPayload.append("emailAddress", formData.emailAddress);
    formPayload.append("debtorInfo", formData.debtorInfo);
    formPayload.append("additionalDetails", formData.additionalDetails);
    if (formData.documentFile) {
      formPayload.append("documentFile", formData.documentFile);
    }

    fetch("https://reesorandasociatesuploadpdf.onrender.com/submit-form", {
      method: "POST",
      body: formPayload,
    })
      .then((response) => response.json().then(data => {
        if (response.ok) {
          alert("Upload Successful ✅");
          window.location.reload(); // Refresh the page
        } else {
          alert("Failed to upload: " + data.message);
        }
      }))
      .catch((error) => {
        alert("Error submitting form: " + error.message);
        console.error("Error submitting form:", error);
      });
  };






  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus('Submitting...'); // Display submission status
  
    try {
      const response = await fetch('https://reesorandasociatestestserver.onrender.com/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: email, Company: company }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setStatus(data.message);
        setEmail('');
        setCompany('');
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setStatus('❌ Failed to connect to server');
    }
  };










  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center py-16 bg-gray-100">
  <h1 className="text-[60px] font-bold mb-6 text-[#003366] tracking-wide">
    Submit a Debtor
  </h1>
  <p className="text-lg font-raleway text-gray-600 max-w-2xl mx-auto">
    Help us keep the industry informed. Use the form below to report companies or individuals who owe you money. 
    Your contribution strengthens the network and promotes accountability across the board.
  </p>
</section>
        
        {/* Debt Recovery Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
        

        <h1 className="text-3xl font-bold text-bg-custom-blue  mb-6 border-b-2 border-custom-blue  pb-4">
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
        <h3 className="text-lg font-semibold text-custom-blue  mb-4">What Happens Next:</h3>
        <ol className="space-y-4 text-sm text-black">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-custom-blue  text-white rounded-full flex items-center justify-center mr-3">
              1
            </span>
            Submission review within 24 business hours
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-custom-blue  text-white rounded-full flex items-center justify-center mr-3">
              2
            </span>
            Case evaluation by our legal team
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-custom-blue  text-white rounded-full flex items-center justify-center mr-3">
              3
            </span>
            Recovery process initiation with your approval
          </li>
        </ol>
      </div>

      <button
        type="submit"
        className="w-full bg-custom-blue  text-white py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors font-semibold text-lg"
      >
        Initiate Recovery Process
      </button>
    </form>


  <Modal/>




          
        
        </div>
      </div>
    </div>

        {/* Transportation Alert Banner */}
        <div className="bg-custom-blue  text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">TRANSPORTATION ALERT</h3>
          <p className="text-lg  text-white  mb-4">Find Out Who's Not Paying</p>
          {/* Wrap the button with Link for navigation */}
<Link to="/topdebtor">
  <button className="  bg-custom-blue   px-6 py-2 rounded-lg hover:bg-blue-900 ion-colors font-medium">
    View Top Debtors →
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Debtor;