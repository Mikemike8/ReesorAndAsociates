import React from 'react';
import Morgan from '../assets/Morgan.mp4'; 
import Truck2  from '../assets/Truck2.jpg';
import Doubles from '../assets/Doubles.png';
import Freight from '../assets/Freight.png';
import Chart from '../assets/Chart.png';
export const Home = () => {


  return (
    <div>

<div className="bg-white h-auto">
  <section className="relative">
    {/* Image Background */}
    <img
      src={Truck2}  // Replace with your actual image source
      alt="Truck Background"
      className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[100vh]" // Responsive height based on screen size
    />
  </section>
</div>

<div className="w-full bg-custom-blue  text-center h-8 flex items-center justify-center">
  <h2 className=" font-sans  text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">EXPERTS IN TRANSPORTATION DEBT RECOVERY.</h2>
</div>


<section className="container mx-auto flex flex-col md:flex-row items-start w-full px-4 py-12 relative">
  {/* Left Column - Text */}
  <div className="md:w-[70%] pr-0 md:pr-12 z-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Areas of Expertise</h2>

    <div className="space-y-8">
      {[
        {
          title: 'General Freight Collections',
          desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
        },
        {
          title: 'Vicarious Liability',
          desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
        },
        {
          title: 'Illegal Offset against Freight Charges',
          desc: 'We pursue unpaid freight charges from brokers, freight forwarders, shippers, and consignees...',
        },
      ].map((item, i) => (
        <div key={i} className="pb-8 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.desc}</p>
          <a href="#" className="text-blue-600 hover:underline inline-flex items-center pl-1">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
{/* Right Column - Image */}
<div className="hidden md:block md:w-[30%] mt-12 md:mt-0">
  <div className="w-full max-w-[380px] ml-4 md:ml-4 lg:ml-4 xl:ml-6">
    <img
      src={Truck2}
      alt="Expertise Visual"
      className="h-[623px] w-full object-cover rounded-lg"
    />
  </div>
</div>


</section>










<div className="relative w-full text-center mb-16 pb-6"> {/* Added pb-6 for spacing inside container */}
  <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-gray-700 px-4 leading-snug max-w-5xl mx-auto mb-4">
    “You shouldn't have to work twice for your money.
    <br className="hidden md:block" />
    You did your job — let us do ours.”
  </h2>

  {/* Fade effect at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
</div>




<div className="flex flex-col lg:flex-row w-full px-4 py-12 space-y-8 lg:space-y-0 lg:space-x-8">

  {/* Left Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-start">
    <img 
      className="w-full lg:w-[90%] h-auto rounded-lg  object-cover" 
      src="https://static.wixstatic.com/media/6bf8bb_d61cccea43b647bb9b2fabd59663a588~mv2.jpg/v1/fill/w_567,h_549,fp_0.50_0.50,q_80,enc_avif,quality_auto/14-Misconceptions_edited.jpg" 
      alt="Description of the image" 
    />
  </div>
{/* Right Column - Text Content */}
<div className="w-full lg:w-6/12 px-4 flex flex-col justify-start space-y-6 text-gray-800 font-sans">

  <p className="text-xl lg:text-2xl font-medium leading-relaxed">
    At <span className="font-semibold text-custom-blue">Reesor & Associates</span>, we understand the challenges motor carriers face every day.
  </p>

  <p className="text-lg lg:text-xl leading-relaxed">
    We can’t raise freight rates or lower fuel costs — but we <span className="font-semibold text-gray-900">can help you recover the money you're owed</span>.
  </p>

  <p className="text-lg lg:text-xl leading-relaxed">
    If a broker or shipper hasn’t paid what they promised, or if you’ve been hit with unfair chargebacks or illegal offsets — <span className="text-gray-900 font-semibold">we’ll fight to get those dollars back where they belong</span> — with you.
  </p>

  <p className="text-xl lg:text-2xl font-semibold text-gray-900 italic">
    You did the work. You deserve to be paid.
  </p>

  <p className="text-lg lg:text-xl leading-relaxed">
    Let us help you protect your business — and your bottom line.
  </p>

  <div className="pt-6 border-t border-gray-300 mt-6">
    <p className="text-xl font-semibold mb-4">Also Check Out:</p>
    <ul className="list-disc pl-6 space-y-2 text-lg">
      <li>
        <a href="#" className="text-blue-600 hover:underline">Top 25 Debtors</a>
      </li>
      <li>
        <a href="#" className="text-blue-600 hover:underline">Weekly Debtor List</a>
      </li>
      <li>
        <a href="#" className="text-blue-600 hover:underline">Place Account</a>
      </li>
      <li>
        <a href="#" className="text-blue-600 hover:underline">Industry Links</a>
      </li>
    </ul>
  </div>
</div>





  

</div>

<div className="relative w-full text-center mt-10 mb-12 pb-6">
  <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-700 px-4 leading-tight font-normal">
    Combined Losses from Broker Closures & Double Brokering (2022–2025)
  </h2>

  {/* Fade effect at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
</div>


<section className="flex flex-col md:flex-row items-center justify-between px-6  bg-white">
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




<div className="overflow-hidden flex flex-row h-8 bg-white text-black border-y border-black/20">
  <div className="whitespace-nowrap font-sans inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
  <div className="whitespace-nowrap font-sans inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
</div>




    <div>
    </div>

    {/* Footer Section */}
<footer className="bg-custom-blue text-white py-8">
  <div className="container mx-auto px-4 text-white flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">

    {/* Left Section - Company Info */}
    <div className="w-full lg:w-4/12 text-center text-white lg:text-left">
      <p className="text-3xl font-semibold mb-4">Reesor & Associates</p>
      <p className="text-lg mb-4">
        Your trusted partner in protecting your freight and ensuring payment.
      </p>
      <p className="text-sm">&copy; 2025 Reesor & Associates. All Rights Reserved.</p>
    </div>

    {/* Middle Section - Quick Links */}
    <div className="w-full lg:w-4/12 text-center">
      <p className="text-xl font-semibold mb-4">Quick Links</p>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="#" className="hover:text-yellow-400">Services</a></li>
        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>

    {/* Right Section - Social Media */}
    <div className="w-full lg:w-4/12 text-center lg:text-right">
      <p className="text-xl font-semibold mb-4">Follow Us</p>
      <div className="flex justify-center lg:justify-end space-x-6">
        <a href="#" className="text-2xl hover:text-yellow-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-2xl hover:text-yellow-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-2xl hover:text-yellow-400">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-2xl hover:text-yellow-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>

  </div>
</footer>


   
    </div>
  );
};
