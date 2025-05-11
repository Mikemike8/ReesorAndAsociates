import React, { useState, useEffect } from 'react';
import { ShieldCheck, UserCheck, MessageSquare, CheckCircle ,AlertCircle} from "lucide-react"
import Modal from './Modal';
import MoneyPile from '../assets/legalgirl.avif'
import  Eagle from '../assets/moneypile.jpg'

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-20">
<section
  className="relative text-center h-[75vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{ backgroundImage: `url(${MoneyPile})` }}
>


  {/* Content on top */}
  <div className="relative z-20 px-4 max-w-4xl mx-auto">
    <h1 className="text-[48px] md:text-[64px] mb-6 font-oswald text-white tracking-wide leading-tight">
      Know Who Owes You Most
    </h1>
    <p className="text-lg md:text-xl font-bold text-white">
      Our Top Debtors list highlights companies with the most unpaid accounts—giving you the insights you need to protect your business. Stay ahead. Stay informed. Make smarter credit decisions.
    </p>
  </div>
</section>

        <Modal/> 
        <section className="relative z-10 py-8 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4 text-center bg-gray-100">
    <h2 className="text-6xl font-bold text-gray-800 mb-4 font-oswald">Legal Insights & Updates</h2>
    <p className="text-gray-600 font-bold text-lg leading-relaxed">
      Our team of skilled attorneys and legal professionals is dedicated to providing you with top-tier legal support.
    </p>
  </div>
</section>


        <div className="relative">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-center bg-cover"
    style={{
      backgroundImage: `url(${Eagle})`,
      opacity: 0.15,
      zIndex: 0
    }}
  ></div>

  {/* Foreground Content */}
  <div className="relative z-10  py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* Chart Section */}
        <div className="p-8 rounded-xl shadow-xl w-full lg:w-2/3 border border-gray-200 bg-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 w-6 h-6" />
              <h1 className="text-2xl font-oswald text-gray-800">Top Debtors</h1>
            </div>
            <p className="text-gray-500 text-sm">Updated Weekly</p>
          </div>

          {/* Display Error or Table */}
          {error ? (
            <p className="text-center bg-red-600 text-white py-2 rounded">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm">
                    <th className="px-6 py-3 border-b font-semibold">Rank</th>
                    <th className="px-6 py-3 border-b font-semibold">First Name</th>
                    <th className="px-6 py-3 border-b font-semibold">Last Name</th>
                    <th className="px-6 py-3 border-b font-semibold">Amount Owed</th>
                  </tr>
                </thead>
                <tbody>
                  {debtorData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.Rank || 'N/A'}</td>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.FirstName || 'N/A'}</td>
                      <td className="px-6 py-3 border-b text-sm text-gray-800">{item.LastName || 'N/A'}</td>
                      <td className={`px-6 py-3 border-b text-sm font-medium ${
                        item.AmountOwed > 10000 ? 'text-red-600' :
                        item.AmountOwed > 5000 ? 'text-yellow-600' : 'text-gray-800'
                      }`}>
                        {item.AmountOwed !== undefined ? `$${item.AmountOwed.toLocaleString(undefined, {minimumFractionDigits: 2})}` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Explanation Panel */}
        <div className="w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-oswald text-gray-800 mb-4">What You're Seeing</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            This chart shows a ranked list of individuals with outstanding debts. The <span className="font-medium text-red-600">higher the amount</span>, the more critical the debt.
            <br /><br />
            Debtors are sorted by how much they owe. You can use this list to quickly identify high-risk cases or those who require urgent follow-up.
            <br /><br />
            <span className="font-medium text-yellow-600"> Names </span> indicates people who owe  <span className="font-medium text-red-600">money</span> who are a high risk to conduct business with.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>


   
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-6xl font-bold  font-oswald mb-4">Our legal services.</h2>
    <p className="text-gray-600 font-bold text-lg">
      Trusted legal guidance backed by a track record of results.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="border border-gray-300 bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
      <ShieldCheck className="text-blue-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Expertise You Can Trust</h3>
        <p className="text-gray-600">
          Our seasoned attorneys bring years of experience across multiple legal areas to provide reliable, results-driven solutions.
        </p>
      </div>
    </div>

    <div className="border border-gray-300 bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
      <UserCheck className="text-green-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Personalized Service</h3>
        <p className="text-gray-600">
          Every case is unique—our team tailors strategies to meet your needs, ensuring dedicated and individualized support.
        </p>
      </div>
    </div>

    <div className="border border-gray-300 bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
      <MessageSquare className="text-purple-600 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Clear Communication</h3>
        <p className="text-gray-600">
          We keep you informed with transparent updates at every stage, so you always know where your case stands.
        </p>
      </div>
    </div>

    <div className="border border-gray-300 bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm">
      <CheckCircle className="text-yellow-500 w-8 h-8 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Proven Track Record</h3>
        <p className="text-gray-600">
          With a history of successful settlements and court victories, we fight for outcomes that exceed your expectations.
        </p>
      </div>
    </div>
  </div>
</section>

    
  </div>
  
  
  );
};
