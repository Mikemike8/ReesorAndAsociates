import React, { useEffect, useState } from "react";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleOk = () => {
    localStorage.setItem('hasSignedUp', 'true');
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="relative bg-gray-200 rounded-xl shadow-xl p-6 md:p-8 max-w-lg w-full border border-red-100">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-oswald text-black mb-2">
            Receive Weekly Broker Alerts
          </h2>
          <p className="text-gray-600 font-oswald">
            Stay updated on nonpaying brokers, double brokering activity, and high-risk companies.
          </p>
        </div>
        <div className="flex justify-center">
  <ul className="text-sm text-gray-800 mb-6 space-y-3 text-left">
    <li className="flex items-start">
      <span className="mr-2 text-gray-800  text-2xl"> &#8259;</span>
      <span className=" text-gray-800 font-oswald text-2xl ">Weekly reports on nonpaying brokers</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-gray-800 text-2xl"> &#8259;</span>
      <span className="  text-gray-800 font-oswald text-2xl ">Double brokering activity alerts</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-gray-800  text-2xl"> &#8259;</span>
      <span className="  text-2xl font-oswald  text-gray-800  ">High-risk company warnings</span>
    </li>
  </ul>
</div>



        <div className="text-center">
          <button
            onClick={handleOk}
            className="bg-black text-white py-2 px-6  hover:bg-[#1a1a1a] transition-colors font-oswald"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
