import React from 'react';
import Morgan from '../assets/Morgan.mp4'; 
import Truck2  from '../assets/Truck2.jpg';
import Chart from '../assets/Chart.jpg';
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

      <div className="bg-black text-white selection:bg-white selection:text-black">
        <section className=" sectiot min-h-screen relative flex items-center">
          <div className="absolute inset-0">
            <video 
              src={Morgan}
              alt="Luxury Suit" 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted
            />
            <div className="absolute inset-0 image-gradient"></div>
          </div>
          <div className="relative z-10 max-w-[2000px] mx-auto px-4 sm:px-8 pt-32">
            <div className="max-w-4xl">
              <p className="text-sm tracking-[0.3em] mb-8 fade-in" style={{ animationDelay: '0.5s' }}>WELCOME TO RESSOR</p>
              <h1 className="text-[12vw] md:text-[7vw] font-light leading-[0.9] mb-8 fade-in" style={{ animationDelay: '0.8s' }}>
                RESSOR  & <br />  ASSOCIATES
              </h1>
              <div className="h-[1px] w-32 bg-white reveal-line mb-12" style={{ animationDelay: '1.2s' }}></div>
              <p className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl mb-16 fade-in leading-relaxed" style={{ animationDelay: '1.5s' }}>
                Industry Expertise That Works for You
              </p>
              <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 border border-white hover:bg-yellow-100 hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4" style={{ animationDelay: '1.8s' }}>
                Safeguarding Your Business Against Fraud and Payment Issues in Transportation
                <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
              </button>
            </div>
          </div>
        </section>
      </div>
        {/* First Content  */}

    <div className="flex flex-row w-full py-8 pr-1.5 justify-between   items-center bg-gray-100">
  <div className="font-light  mb-14 max-w-xl">
  <h3 className="text-[32px] font-semibold font-light tracking-wide text-black mb-4 p-1">
  DONT LET BROKERS GET AWAY WITH IT CALL US
</h3>
    <p className="text-lg text-gray-600 mb-4">Find Who is Not Paying</p>
    
    <button className="flex items-center space-x-2 px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-300">
    <i  className='fas text-white text-[32px]'>&#xf1d8;</i>
      <span>Find Out</span>
    </button>
    
    <span className="block text-lg text-gray-800 font-medium mt-6">Challenges Facing Motor Carriers</span>
    
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Double Brokering</li>
      <li>Broker Closures</li>
      <li>Illegal Offsets Against Freight Charges</li>
    </ul>
    
    <button className="flex items-center space-x-2 mt-4 px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-300">
    <i  className='fas text-white text-[32px]'>&#xf1d8;</i>
      <span>Learn More</span>
    </button>
  </div>

  <img className="w-7/12 rounded-lg shadow-lg hidden lg:block" src={Truck2} alt="Truck" />
</div>






{/* Chart  */}

<div className="flex flex-col lg:flex-row w-full bg-black">
  {/* Left Column - Text Content */}
  <div className="flex flex-col w-full lg:w-6/12 py-8 px-4 text-white">
    <p className="text-2xl lg:text-3xl font-semibold mb-6">
      The financial impact of double brokering in the transportation industry has been escalating rapidly:
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
      <p className="text-lg">
        Widespread Impact: In <strong>Q2 2023</strong>, <strong>85%</strong> of freight brokers and carriers reported being affected by double brokering.
      </p>
    </div>
    <button className="group mt-6   w-full sm:w-auto text-sm tracking-[0.2em] hover:text-black transition-colors flex items-center justify-start gap-6">
          <a href="" className="text-white text-lg hover:text-yellow-100"> View Charts</a>
          <span className="h-[1px] w-12 bg-current transform  transition-transform group-hover:translate-x-4"></span>
        </button>
  </div>

  {/* Right Column - Image */}
  <div className="w-full lg:w-6/12 flex justify-center lg:justify-end py-8">
    <img className="w-full lg:w-11/12 rounded-lg shadow-lg" src={Chart} alt="Chart" />
    
  </div>

</div>



    
      <div className="overflow-hidden py-4 sm:py-8 bg-white text-black border-y border-black/20">
        <div className="whitespace-nowrap marquee inline-block text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
          Safeguarding  Businesses &nbsp;&nbsp;&nbsp;  Against Fraud &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    <div>
    </div>

   
    </div>
  );
};
