import React, { useState, useEffect } from 'react';
import Modal from './Modal';

export const TopDebtor = () => {
  // State to hold debtor data and error state
  const [debtorData, setDebtorData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch debtor data when the component mounts
  useEffect(() => {
    const fetchData = () => {
      fetch('https://reesorandasociatestestserver.onrender.com/api/debtors')  // Your API endpoint for debtor data
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();  // Parse the response as JSON
        })
        .then((data) => {
          data.sort((a, b) => a.Rank - b.Rank);  // Sort data by Rank
          setDebtorData(data);  // Set debtor data in the state
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Error fetching data from the backend. Please try again later.');
        });
    };

    fetchData(); // Call fetchData after defining it
  }, []);  // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10">
      <section className="text-center py-16">
  <h1 className="text-[70px] font-oswald  mb-6 text-[#003366] tracking-wide">
    Know Who Owes You Most
  </h1>
  <p className="text-lg font-raleway text-gray-600 max-w-2xl mx-auto">
    Our Top Debtors list highlights companies with the most unpaid accounts—giving you the insights you need to protect your business. Stay ahead. Stay informed. Make smarter credit decisions.
  </p>
</section>
        <Modal/>  
    <div className="bg-white p-6 rounded-lg mt-20 shadow-lg w-full max-w-4xl"> {/* Changed mt-30 to mt-20 */}
      {/* Title */}
      <h1 className="text-2xl font-oswald text-center text-gray-800 mb-6">Top Debtors</h1>
  
      {/* Display Error or Data Table */}
      {error ? (
        <p className="text-center bg-black   text-white ">{error}</p>
      ) : (
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Rank</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">First Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Last Name</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-700 border-b">Amount Owed</th>
            </tr>
          </thead>
          <tbody>
            {debtorData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-3 text-sm text-gray-800 border-b">{item.Rank || 'N/A'}</td>
                <td className="px-6 py-3 text-sm text-gray-800 border-b">{item.FirstName || 'N/A'}</td>
                <td className="px-6 py-3 text-sm text-gray-800 border-b">{item.LastName || 'N/A'}</td>
                <td className="px-6 py-3 text-sm text-gray-800 border-b">
                  {item.AmountOwed !== undefined ? `$${item.AmountOwed.toFixed(2)}` : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
  
  );
};
