import {
    Gavel,
    Landmark,
    ShieldCheck,
    FolderSearch, // ← Add this!
    Link2,
    AlertTriangle,
    Target
  } from 'lucide-react';
  
  
import jjtrucj from '../assets/sebastian-pichler-bAQH53VquTc-unsplash.jpg'; 
import girl from '../assets/man-7450033_1280.jpg'; 

import React from "react";

export const Law = () => {


    const points = [
        {
          icon: <Landmark className="w-6 h-6 text-blue-600" />,
          title: "Jurisdiction Expertise",
          description: "Navigate complex jurisdictional challenges across state and federal courts."
        },
        {
          icon: <Gavel className="w-6 h-6 text-blue-600" />,
          title: "Legal Precedent Mastery",
          description: "Deep understanding of circuit-specific legal precedents determining liability."
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
          title: "Close Legal Loopholes",
          description: "Identify and close legal loopholes brokers exploit."
        },
        {
          icon: <FolderSearch className="w-6 h-6 text-blue-600" />,
          title: "Fraud & Offset Cases",
          description: "Handle cases involving unlawful offsets, double brokering, and broker fraud."
        },
        {
          icon: <Link2 className="w-6 h-6 text-blue-600" />,
          title: "End-to-End Recovery",
          description: "Go beyond demand filing — pursue full chain of liability for recovery."
        },
        {
          icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
          title: "Trusted When It Matters",
          description: "Trusted when brokers disappear, claims are ignored, or legal complexity deters others."
        },
        {
          icon: <Target className="w-6 h-6 text-blue-600" />,
          title: "Precision Enforcement",
          description: "Industry expertise combined with legal precision to enforce claims effectively."
        },
      ];
  return (
 <div className="bg-gray-50 text-white pt-[110px] font-sans">
  <section className="bg-gray-50 px-4">
    <div className="max-w-6xl mx-auto pb-12 flex flex-col lg:flex-row items-start gap-10">
      
      {/* Left Content */}
      <div className="w-full lg:w-6/12">
        <h1 className="text-slate-800 text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[72px] font-oswald leading-tight mb-6">
          We Understand the Industry <br />— and the Law
        </h1>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
          With decades of hands-on experience, we’ve built a practice around understanding not just the law — but how it’s applied in real-world freight disputes. Our expertise includes case law, federal transportation statutes, and how various circuit courts interpret liability between brokers, shippers, consignees, and carriers.
        </p>
      </div>

      {/* Right Image with Overlay */}
      <div
        className="relative w-full lg:w-5/12 aspect-[4/3] bg-center bg-cover rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${jjtrucj})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center p-4">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Need Legal Help With Freight Recovery?</h3>
            <p className="mb-4 text-base md:text-lg">We’re not just attorneys — we’re industry experts.</p>
            <button className="bg-yellow-400 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>



<section className="text-center py-2 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="!text-[40px] font-oswald text-slate-800 mb-8">Our Legacy in Numbers</h2>
    <p className="text-lg text-gray-700 mb-12">
      We’re proud of the milestones we’ve achieved over the years,<br /> showcasing our commitment to excellence in every case we handle.
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      <div className="text-center">
        <div className="text-6xl font-bold text-blue-600 mb-2">10,000+</div>
        <div className="text-lg text-gray-600">Successful cases</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-bold text-blue-600 mb-2">25+</div>
        <div className="text-lg text-gray-600">Years of experience</div>
      </div>
      <div className="text-center">
        <div className="text-6xl font-bold text-blue-600 mb-2">5,000+</div>
        <div className="text-lg text-gray-600">Satisfied clients</div>
      </div>
    </div>
  </div>
</section>








            




      <section className="bg-gray-200 mt-[10px]  py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-oswald text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div className="bg-gray-50 pt-8 text-gray-900 font-sans">
    <h2 className="text-6xl  mx-auto font-oswald text-center mb-12 text-gray-800">MEET THE CEO</h2>
  {/* Article Body */}
  <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-8">
  {/* Left Side: Image */}
  <div className="w-full md:w-1/2">
    <img
      src={girl}
      alt="Magazine cover image"
      className="w-full h-full object-cover border border-gray-900 rounded-xl max-h-[425px] md:max-h-[420px]"
    />
  </div>

  {/* Right Side: Text */}
  <div className="w-full md:w-1/2 text-xl flex flex-col justify-between">
    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif tracking-wide text-justify">
      JT Reesor founded Baxter Bailey & Associates, the first and largest transportation-specific collection agency in the U.S. He revolutionized freight charge recovery, going beyond brokers to pursue shippers, consignees, and even the broker’s customers. Under his leadership, the company handled thousands of placements per year for motor carriers nationwide. However, the high client volume led to operational strain — slower responses, stagnant recovery rates, and diminished service. Learning from this, JT made a strategic shift: Fewer clients and stronger relationships. More time per case for better outcomes. A leaner, smarter, more effective model. Eventually, he sold Baxter Bailey to build a new venture focused on high-quality service and better recovery results.
    </p>
  </div>
</section>

</div>

    </div>
  );
};
