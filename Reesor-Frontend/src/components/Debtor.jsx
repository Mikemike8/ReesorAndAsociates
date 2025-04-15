
import React, { useState } from 'react';  // Import useState hook

import { Link } from 'react-router-dom'; // Import the Link component


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

    fetch("http://localhost:5000/submit-form", {
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


  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="min-h-screen bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Debt Recovery Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
        

        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-4">
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
        <h3 className="text-lg font-semibold text-red-800 mb-4">What Happens Next:</h3>
        <ol className="space-y-4 text-sm text-red-700">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">
              1
            </span>
            Submission review within 24 business hours
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">
              2
            </span>
            Case evaluation by our legal team
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">
              3
            </span>
            Recovery process initiation with your approval
          </li>
        </ol>
      </div>

      <button
        type="submit"
        className="w-full bg-red-700 text-white py-4 px-6 rounded-lg hover:bg-red-800 transition-colors font-semibold text-lg"
      >
        Initiate Recovery Process
      </button>
    </form>













          
        
        </div>
      </div>
    </div>

        {/* Broker Alerts Subscription Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-red-700 mb-2">
              Receive Weekly Broker Alerts via Email
            </h2>
            <p className="text-gray-600">
              Stay updated on nonpaying brokers and high-risk companies
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company name
              </label>
              <input
                type="text"
                placeholder="Enter a company name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="text-center text-sm text-gray-500 mb-4">
              <p>Free Service • Unsubscribe anytime</p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-red-800 transition-colors font-medium"
            >
              Submit
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p className="font-medium mb-2">What you'll receive:</p>
            <ul className="space-y-1">
              <li>• Weekly reports on nonpaying brokers</li>
              <li>• Double brokering activity alerts</li>
              <li>• High-risk company warnings</li>
            </ul>
          </div>
        </div>

        {/* Transportation Alert Banner */}
        <div className="bg-red-700 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">TRANSPORTATION ALERT</h3>
          <p className="text-lg  text-white  mb-4">Find Out Who's Not Paying</p>
          {/* Wrap the button with Link for navigation */}
<Link to="/topdebtor">
  <button className="bg-white text-red-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
    View Top Debtors →
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Debtor;