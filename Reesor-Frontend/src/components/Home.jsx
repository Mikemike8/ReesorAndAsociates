import React from 'react';
import Morgan from '../assets/Morgan.mp4'; 

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





      {/* Hero Section with Video */}
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
              <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 border border-white hover:bg-yellow-00 hover:text-black transition-all duration-500 text-xs tracking-[0.2em] fade-in flex items-center justify-center sm:justify-start gap-4" style={{ animationDelay: '1.8s' }}>
                Safeguarding Your Business Against Fraud and Payment Issues in Transportation
                <span className="h-[1px] w-8 bg-current transform transition-transform group-hover:translate-x-2"></span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee text */}
      <div className="overflow-hidden py-4 sm:py-8 bg-white text-black border-y border-black/20">
        <div className="whitespace-nowrap marquee inline-block text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
          Safeguarding  Businesses &nbsp;&nbsp;&nbsp;  Against Fraud &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
