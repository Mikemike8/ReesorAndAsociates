import React from 'react';
import Morgan from '../assets/Morgan.mp4'; 
import Truck2  from '../assets/Truck2.jpg';
import Doubles from '../assets/Doubles.png';
import Freight from '../assets/Freight.png';
export const Home = () => {
  // Array of product data
  const products = [
    {
      title: "Double Brokers",
      description: "Describe the product here. Include important features, pricing, and other relevant info. Consider adding an image or video of the product.",
      link: "#"
    },
    {
      title: "Illegal Offsets",
      description: "Describe the product here. Include important features, pricing, and other relevant info. Consider adding an image or video of the product.",
      link: "#"
    },
    {
      title: "Double Payments",
      description: "Describe the product here. Include important features, pricing, and other relevant info. Consider adding an image or video of the product.",
      link: "#"
    },
    {
      title: "Legal Forwarding",
      description: "Describe the product here. Include important features, pricing, and other relevant info. Consider adding an image or video of the product.",
      link: "#"
    }
  ];

  return (
    <div>
      {/* Product Cards Section */}
     {/* Product Cards Section */}
{/* Product Cards Section */}
<section className="sm:py-5 p-4 bg-gray-200 custom-style sm:custom-style overflow-x-hidden text-black">
  <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 justify-center pt-20 mx-auto">
    {products.map((product, index) => (
      <div key={index} className="w-full p-4 custom-style sm:custom-style bg-gray-200 rounded-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-black">
            {product.title}
          </h2>
        </div>
        <p className="text-black leading-relaxed text-sm sm:text-xs mt-4">
          {product.description}
        </p>
        <button className="group mt-6 w-full sm:w-auto text-sm tracking-[0.2em] hover:text-black transition-colors flex items-center justify-start gap-6">
          <a href={product.link} className="text-black">Read More</a>
          <span className="h-[1px] w-12 bg-current transform transition-transform group-hover:translate-x-4"></span>
        </button>
      </div>
    ))}
  </div>
</section>
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



{/* Section under Hero Image (Script Style - Eye-catching Left Layout) */}
<div className="flex flex-col lg:flex-row w-full py-2 px-4 bg-white relative">

<div className="flex flex-col w-full lg:w-5/12 py-2 px-4 text-black">
  {/* Text Content */}
  <p className="text-3xl text-center lg:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
    <span className="block">DON'T LET</span>
    <span className="block text-red-600">BROKERS</span>
    <span className="block">GET AWAY</span>
    <span className="block">WITH IT!</span>
  </p>

  {/* Button Below Text */}
  <div className="flex justify-center mt-6">
    <button className="flex items-center w-36 space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-300">
      <i className="fas text-white text-[32px]">&#xf1d8;</i>
      <span>Find Out</span>
    </button>
  </div>
</div>


  {/* Absolute Vertical Line */}
  <div className="hidden lg:block absolute w-[1.5px] bg-black h-32 mt-12 left-[calc(35%+10px)]"></div>

  {/* Right Column - Text Content */}
  <div className="flex flex-col w-full lg:w-7/12 px-4 text-black flex justify-center">
    <p className="text-lg lg:text-xl font-semibold mb-4 text-center">
      Collecting Freight Charges: A Growing Challenge for Carriers
    </p>

    <div className="mb-4">
      <p className="text-sm lg:text-base mb-2">
        One of the biggest challenges carriers face today is getting paid for the work they’ve already done.
      </p>
      <p className="text-sm lg:text-base mb-2">
        Double brokering has surged, making it harder to track who actually owes the money.
      </p>
      <p className="text-sm lg:text-base mb-2">
        Brokers are illegally deducting claims and disputes from freight payments, often without proper justification or due process.
      </p>
    </div>

    <div>
      <p className="text-sm lg:text-base mb-2">
        At <strong>Reesor & Associates</strong>, we focus on one thing: getting carriers paid—fully and fairly. If you're dealing with nonpayment, illegal offsets, or a broker that's gone silent, we know exactly how to step in and recover what you’re owed.
      </p>
    </div>
  </div>

</div>


<div className="w-full border-2 border-black bg-gray-200 text-center h-16 flex items-center justify-center">
  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">THE NUMBERS DON'T LIE</h2>
</div>



<div className="relative flex w-full space-x-4">
  {/* Left Column - Content */}
  <div className="w-full lg:w-5/12 px-4 text-black">
    <p className="text-2xl lg:text-3xl font-semibold mb-4">COLLECTING FREIGHT CHARGES</p>
    <p className="text-lg mb-4">
      One of the biggest challenges carriers face today is getting paid for the work they’ve already done.
    </p>
    <p className="text-lg mb-4">
      Double brokering has surged, making it harder to track who actually owes the money.
    </p>
    <p className="text-lg mb-4">
      Brokers are illegally deducting claims and disputes from freight payments, often without proper justification or due process.
    </p>
    <p className="text-lg mb-4">
      At Reesor & Associates, we focus on one thing: getting carriers paid—fully and fairly. If you're dealing with nonpayment, illegal offsets, or a broker that's gone silent, we know exactly how to step in and recover what you’re owed.
    </p>
  </div>

{/* Vertical Line Divider */}
<div className="hidden lg:block absolute w-[2px] bg-black h-full top-0 right-[calc(50%+10px)]"></div>

{/* Right Column - Content */}
<div className="w-full lg:w-6/12 px-4 text-black flex flex-col justify-end sm:relative lg:absolute right-2 "> {/* Adjust width here */}
  {/* Title */}
  <p className="text-2xl lg:text-3xl font-semibold mb-2">Transportation Broker Alert</p>

  {/* Subtitle */}
  <p className="text-lg mt-10">
    <strong>Find Out Who's Not Paying</strong>
  </p>

  {/* Description */}
  <p className="text-lg mt-12 mb-2">
    Our Broker Alert is a weekly report identifying brokers who have failed to pay carriers, have shown a pattern of nonpayment, or are involved in questionable practices such as double brokering or illegal offsets.
  </p>
  
  {/* Button */}
  <button className="w-full mt-8 sm:w-auto px-8 sm:px-12 py-4 border border-black text-black hover:bg-yellow-100 hover:text-black transition-all duration-500 text-xs tracking-[0.2em] flex items-center justify-center sm:justify-start gap-4 mt-2">
    View More
  </button>
</div>

</div>






{/* Chart Section - First Section */}
<div className="flex flex-col lg:flex-row w-full bg-white py-8 space-y-8 lg:space-y-0 lg:space-x-8">

  {/* Left Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-end py-4">
    <img 
      className="w-full lg:w-[95%] xl:w-[80%] h-auto lg:h-[calc(100%-2rem)] object-cover rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.8)]" 
      src={Doubles} 
      alt="Chart" 
    />
  </div>

  {/* Right Column - Text Content */}
  <div className="w-full lg:w-6/12 py-2 px-4 text-black">
    <p className="text-2xl lg:text-3xl font-semibold mb-6">
      Broker Fraud & Closures (2022-2024)
    </p>

    <div className="mb-6">
      <p className="text-lg mb-2">
        Over <strong>5,400 freight brokers</strong> shut down in just two years—
      </p>
      <p className="text-lg mb-2">
        <strong>2,395 closures</strong> in 2023
      </p>
      <p className="text-lg mb-2">
        <strong>3,104 closures</strong> in 2024
      </p>
      <p className="text-lg mb-4">
        The Reopening Loophole: An estimated <strong>70-80%</strong> of brokers who close simply reopen under a new name, avoiding debt and accountability.
      </p>
    </div>

    <div>
      <p className="text-lg mb-4">
        Unpaid Freight (2023): Brokers closed operations in 2023 owing over <strong>$1.7 billion</strong> in unpaid freight charges.
      </p>
    </div>

    <button className="group mt-6 w-full sm:w-auto text-sm tracking-[0.2em] hover:text-black transition-colors flex items-center justify-start gap-6">
      <a href="" className="text-black text-lg hover:text-gray-600">Top Debtors </a>
      <span className="h-[1px] w-12 bg-current transform transition-transform group-hover:translate-x-4"></span>
    </button>
  </div>

</div>

{/* Chart Section - Second Section */}
<div className="flex flex-col lg:flex-row w-full bg-white py-8 px-4 space-y-8 lg:space-y-0 lg:space-x-8">

  {/* Left Column - Text Content */}
  <div className="w-full lg:w-6/12 py-2 px-4 text-black">
    <p className="text-2xl lg:text-3xl font-semibold mb-6">
      Double Brokering: Financial Loss & Industry Impact
    </p>

    <div className="mb-6">
      <p className="text-lg mb-2">
        2021: It cost the industry over <strong>$100 million</strong> annually.
      </p>
      <p className="text-lg mb-2">
        2023: This number surged to between <strong>$500 million and $700 million</strong>.
      </p>
      <p className="text-lg mb-2">
        2024: Losses remained within the range of <strong>$500 million to $700 million</strong>.
      </p>
      <p className="text-lg mb-4">
        For 2025: Given the ongoing rise in fraudulent activities, it is plausible that the financial impact will continue to increase.
      </p>
    </div>

    <div>
      <p className="text-lg mb-4">
        Widespread Impact: In <strong>Q2 2023</strong>, <strong>85%</strong> of freight brokers and carriers reported being affected by double brokering.
      </p>
    </div>
  </div>

  {/* Right Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-start py-4">
    <img 
      className="w-full lg:w-[95%] xl:w-[80%] h-auto lg:h-[calc(100%-2rem)] object-cover rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.8)]" 
      src={Freight} 
      alt="Chart" 
    />
  </div>





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



      <div className="overflow-hidden py-4 sm:py-8 bg-white text-black border-y border-black/20">
        <div className="whitespace-nowrap marquee inline-block text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
          Safeguarding  Businesses &nbsp;&nbsp;&nbsp;  Against Fraud &nbsp;&nbsp;&nbsp;
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
