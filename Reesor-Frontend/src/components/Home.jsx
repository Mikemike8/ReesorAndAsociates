import React, { useState, useEffect } from 'react';
import Morgan from '../assets/Morgan.mp4'; 
import Truck2  from '../assets/Truck2.jpg';
import Doubles from '../assets/Doubles.png';
import Freight from '../assets/Freight.png';
import RessorLogo from '../assets/Reesorlog.png'; // Ensure your image path is correct

import Chart from '../assets/Chart.png';
import Modal from './Modal';

const services = [
  {
    title: 'General Freight Collections',
    desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
    more: 'Our collections team specializes in recovering payments swiftly while maintaining your professional reputation.'
  },
  {
    title: 'Vicarious Liability',
    desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
    more: 'Understanding the legal implications of carrier liability can save thousands. We’re here to help.'
  },
  {
    title: 'Illegal Offset against Freight Charges',
    desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
    more: 'Offsets can be challenged when unsupported. Our team provides documentation and legal backup.'
  }
];




export const Home = () => {

    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [status, setStatus] = useState('');
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setStatus('Submitting...');
      try {
        const response = await fetch('http://localhost:5010/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Email: email, Company: company })
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


    const [openIndex, setOpenIndex] = useState(null);

    const toggleReadMore = (i) => {
      setOpenIndex(openIndex === i ? null : i);
    };


  return (
    <div>
  <Modal/>  
  <div className="bg-white  pt-[80px]   h-auto">
     {/* Hero Section */}
        <section className="relative h-[75vh] pt-[80px]  bg-cover bg-center" style={{ backgroundImage: `url(${Truck2 })` }}>
          
        </section>
       
</div>


<div className="w-full  text-center h-12 flex items-center justify-center" style={{
  backgroundImage: 'linear-gradient(181deg, rgba(50, 50, 50, 1) -1.7%, rgba(30, 30, 30, 1) 85.6%)'
}}>
  <h2 className="font-oswald text-white sm:text-[18px]   md:text-[18px]  lg:text-[18px]   text-[10px]">
  WE ARE  EXPERTS IN TRANSPORTATION DEBT RECOVERY. 
  </h2>
</div>


<section className="relative bg-gray-50 w-full px-4 py-12">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
    {/* Left Column - Text */}
    <div className="flex-1">
      <h2 className="text-3xl font-oswald text-gray-800 mb-8">Areas of Expertise</h2>
      <div className="space-y-8">
        {services.map((item, i) => (
          <div key={i} className="pb-8 border-b border-gray-200">
            <h3 className="text-xl font-oswald text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.desc}</p>

            {openIndex === i && (
              <p className="text-gray-600 mb-2">{item.more}</p>
            )}

            <button
              onClick={() => toggleReadMore(i)}
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              {openIndex === i ? 'Read Less' : 'Read More'}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Stat Box */}
    <div className="w-full lg:w-[400px] flex-shrink-0">
      <div className="flex flex-col border-4 border-gray-400 bg-gray-100 justify-between text-center px-8 py-10 h-[500px] rounded-lg w-full">
        {/* Top Section */}
        <div className="space-y-4">
          <h1 className="text-[#616161] text-[1.5rem]">FROM 2022–2025</h1>
          <div className="text-[#616161] font-bold text-[2rem] leading-snug">
            DOUBLE BROKERING
            <br />
            FRAUD & BROKER CLOSURES
          </div>
          <div className="text-[#616161] text-[1.1rem]">RESULTED IN AN ESTIMATED</div>
        </div>

        {/* Middle Highlight */}
        <div className="text-[#d32f2f] font-bold text-[3rem]">$7.5 BILLION</div>

        {/* Bottom Section */}
        <div className="text-[#616161] font-bold text-[2rem] leading-snug space-y-1">
          <p>IN UNPAID FREIGHT</p>
          <p>CHARGES</p>
        </div>
      </div>
    </div>
  </div>
</section>



<hr class="border-t-1 border-gray-200 " />
  









<div className="flex flex-col lg:flex-row w-full px-4 py-12 space-y-8 lg:space-y-0 lg:space-x-8">

  {/* Left Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-start">
    <img 
      className="w-full lg:w-[90%] h-auto rounded-lg object-cover" 
      src="https://static.wixstatic.com/media/6bf8bb_d61cccea43b647bb9b2fabd59663a588~mv2.jpg/v1/fill/w_567,h_549,fp_0.50_0.50,q_80,enc_avif,quality_auto/14-Misconceptions_edited.jpg" 
      alt="Description of the image" 
    />
  </div>

  {/* Right Column - Text Content */}
  <div className="w-full lg:w-6/12 flex flex-col justify-center space-y-6 text-gray-800 font-sans">

    <div className="text-center">
      <h2 className="text-[30px] font-normal text-gray-700 px-4 leading-snug max-w-5xl mx-auto">
        “You shouldn't have to work twice for your money.
        <br className="hidden md:block" />
        You did your job — let us do ours.”
      </h2>
    </div>

    <p className="text-[16px] font-display leading-relaxed">
  At <span className="font-semibold text-[#000000]">Reesor & Associates</span>, we understand the challenges motor carriers face every day. We can’t raise freight rates or lower fuel costs — but we <span className="font-semibold text-gray-900">can help you recover the money you're owed</span>. If a broker or shipper hasn’t paid what they promised, or if you’ve been hit with unfair chargebacks or illegal offsets — <span className="text-gray-900 font-semibold">we’ll fight to get those dollars back where they belong</span> — with you.
</p>

<p className="text-[16px] font-display leading-relaxed mt-6">
  <span className="font-semibold text-gray-900 italic">You did the work. You deserve to be paid.</span> Let us help you protect your business — and your bottom line.
</p>

    <div className="pt-6 border-t border-gray-300 mt-6">
      <p className="text-xl font-semibold mb-4">Also Check Out:</p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li><a href="#" className="text-black-600 hover:underline">Top 25 Debtors</a></li>
        <li><a href="#" className="text-black-600 hover:underline">Weekly Debtor List</a></li>
        <li><a href="#" className="text-black-600 hover:underline">Place Account</a></li>
        <li><a href="#" className="text-black-600 hover:underline">Industry Links</a></li>
      </ul>
    </div>
  </div>
</div>


<div className="relative w-full text-center mt-10 b-6 ">
  

  <div className="w-full   text-center h-12 flex items-center justify-center"  style={{
  backgroundImage: 'linear-gradient(181deg, rgba(50, 50, 50, 1) -1.7%, rgba(30, 30, 30, 1) 85.6%)'
}}>
  <h2 className=" font-oswald text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">  Combined Losses from Broker Closures & Double Brokering (2022–2025)
  </h2>
</div>

 </div>


<section className="flex  flex-col md:flex-row items-center justify-between px-6  bg-gray-50">
      {/* Left Side - Text Info */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
      
        <table className="w-full text-left text-sm text-gray-700 rounded shadow-lg  h-[300px] mb-4 mt-10  border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300">Year</th>
              <th className="px-4 py-2 border-b border-gray-300">Estimated Losses</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">2022</td>
              <td className="px-4 py-2">$700 million – $1 billion</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">2023</td>
              <td className="px-4 py-2">$1.7 billion – $2.1 billion</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">2024</td>
              <td className="px-4 py-2">$2 billion – $2.5 billion</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">2025</td>
              <td className="px-4 py-2">$2.5 billion+</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-50 font-medium">
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">Total (2022–2025):</td>
              <td className="px-4 py-2">$7.1 billion – $8.3 billion</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Right Side - Image Placeholder */}
      <div className="md:w-1/2 w-full h-[300px] mb-4 mt-10  flex justify-center">
        <img
          src={Chart}
          alt="Chart showing losses from 2022–2025"
          className="w-full max-w-md rounded shadow-lg"
        />
      </div>




     
    </section>


    
                 






    <div>
    </div>
   




   
    </div>
  );
};
{/* <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
<img
  className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px]"
  src={RessorLogo}
  alt="Reesor & Associates Logo"
/>

</div> */}
