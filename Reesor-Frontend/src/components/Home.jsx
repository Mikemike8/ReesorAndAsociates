import React from 'react';
import Morgan from '../assets/Morgan.mp4'; 
import Truck2  from '../assets/Truck2.jpg';
import Doubles from '../assets/Doubles.png';
import Freight from '../assets/Freight.png';
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

<div className="w-full border-2 border-black bg-black text-center h-8 flex items-center justify-center">
  <h2 className=" font-sans  text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">EXPERTS IN TRANSPORTATION DEBT RECOVERY.</h2>
</div>







{/* Parent Container - Flex Layout for Two Columns */}
<div className="flex flex-col lg:flex-row w-full px-4 py-12 space-y-8 lg:space-y-0 lg:space-x-8">

  {/* Left Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-start">
    <img 
      className="w-full lg:w-[90%] h-auto rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.8)] object-cover" 
      src="https://static.wixstatic.com/media/6bf8bb_d61cccea43b647bb9b2fabd59663a588~mv2.jpg/v1/fill/w_567,h_549,fp_0.50_0.50,q_80,enc_avif,quality_auto/14-Misconceptions_edited.jpg" 
      alt="Description of the image" 
    />
  </div>

  {/* Right Column - Text Content */}
  <div className="w-full lg:w-6/12 px-4 flex flex-col justify-start space-y-6">
    <p className="text-3xl lg:text-4xl font-semibold mb-4">
      We Can’t Control Freight Rates or Fuel Prices | But We Can Help You Get Paid
    </p>

    <p className="text-lg lg:text-xl leading-relaxed mb-4">
      At Reesor & Associates, we understand the challenges motor carriers face every day. We can’t raise freight rates or lower fuel costs—but we can help you recover the money you're owed.
    </p>

    <p className="text-lg lg:text-xl leading-relaxed mb-4">
      If a broker or shipper hasn't paid what they promised, or if you've been hit with unfair chargebacks or illegal offsets, we’ll fight to get those dollars back where they belong—with you.
    </p>

    <p className="text-lg lg:text-xl leading-relaxed mb-4">
      You did the work. You deserve to be paid.
    </p>

    <p className="text-lg lg:text-xl leading-relaxed mb-4">
      Let us help you protect your business and your bottom line.
    </p>

    <div>
      <p className="text-xl font-semibold mb-4">Also Check Out</p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Top 25 Debtors</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Weekly Debtor List</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Place Account</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">Industry Links</a></li>
      </ul>
    </div>
  </div>




  

</div>

<div className="overflow-hidden flex flex-row h-8 bg-white text-black border-y border-black/20">
  <div className="whitespace-nowrap inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
  <div className="whitespace-nowrap inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
</div>




    <div>
    </div>

    {/* Footer Section */}
<footer className="bg-[#111111] text-white py-8">
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
