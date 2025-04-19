import React, { useEffect, useState } from "react";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  
  
 

  useEffect(() => {
    const hasSignedUp = localStorage.getItem('hasSignedUp');
    if (!hasSignedUp) {
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

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
        localStorage.setItem('hasSignedUp', 'true'); // Set the flag
        setTimeout(() => closeModal(), 1000); // Optional: auto-close after a short delay
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setStatus('❌ Failed to connect to server');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

   
  if (modalOpen === null) return null;
  if (!modalOpen) return null;
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-lg w-full border border-red-100">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Broker Alerts Subscription Card */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-black mb-2">
            Receive Weekly Broker Alerts via Email
          </h2>
          <p className="text-gray-600">
            Stay updated on nonpaying brokers and high-risk companies
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company name
            </label>
            <input
              type="text"
              placeholder="Enter a company name"
              value={company}
              onChange={handleCompanyChange}
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
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="text-center text-sm text-gray-500 mb-4">
            <p>Free Service • Unsubscribe anytime</p>
          </div>

          <button
            type="submit"
            className="w-full bg-custom-blue text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            Submit
          </button>
        </form>

        {status && <div className="mt-4 text-center text-sm text-gray-700">{status}</div>}

        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="font-medium mb-2">What you'll receive:</p>
          <ul className="space-y-1">
            <li>• Weekly reports on nonpaying brokers</li>
            <li>• Double brokering activity alerts</li>
            <li>• High-risk company warnings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
