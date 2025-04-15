import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon 
} from '@heroicons/react/24/outline'; // Heroicons v2
import { PhoneIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom'; // Import the Link component

const About = () => {
  

  // Form submission handler for company and email data
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // stop page reload
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
  return (
      <> <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reesor & Associates</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ClockIcon className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                  </div>
                  <dl className="grid grid-cols-3 gap-2 text-gray-600">
                    <dt className="font-medium">Mon-Thu</dt>
                    <dd className="col-span-2">9:00AM - 5:00PM</dd>
                    <dt className="font-medium">Friday</dt>
                    <dd className="col-span-2">9:00AM - 4:00PM</dd>
                    <dt className="font-medium">Weekend</dt>
                    <dd className="col-span-2 text-red-600">Closed</dd>
                  </dl>
                </div>
    
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPinIcon className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-gray-800">Location</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="block">5689 Goodman Road</span>
                    <span className="block">Olive Branch, MS 38654</span>
                  </p>
                </div>
    
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <EnvelopeIcon className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-gray-800">Contact</h4>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <a href="mailto:info@mysite.com" className="hover:text-red-700 transition-colors">
                        info@mysite.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:555-555-1212" className="hover:text-red-700 transition-colors">
                        555-555-1212
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'linkedin', 'youtube', 'tiktok'].map((platform) => (
                      <a key={platform} href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                        <span className="sr-only">{platform}</span>
                        <i className={`fab fa-${platform} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">//</span> Contact Us
              </h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows="4"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
    
          {/* Right Column */}
          <div className="space-y-8">
            {/* Subscription Card */}
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-red-700 text-lg">
                  Weekly Broker Alerts
                  <span className="block text-sm font-normal text-red-600 mt-1">
                    Non-paying brokers & high-risk companies
                  </span>
                </h4>
              </div>
              {/* Company/Email Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-red-700 mb-2">Company Name</label>
          <input
            type="text"
            className="w-full px-4 py-2.5 border border-red-200 rounded-lg"
            placeholder="Your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-red-700 mb-2">Work Email</label>
          <input
            type="email"
            className="w-full px-4 py-2.5 border border-red-200 rounded-lg"
            placeholder="contact@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg">
          Subscribe Now
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>






    
            {/* Transportation Alert */}
            <div className="bg-red-600 h-100 text-white p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-3">
                Transportation Alert
                <span className="block text-sm font-normal mt-2 opacity-90">
                  Find Out Who's Not Paying
                </span>
              </h3>
              <Link 
                to="/topdebtor"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium mt-4 focus:outline-none focus:ring-2 focus:ring-white"
              >
                View Top Debtors →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* SVG Icons */}
    <svg className="hidden">
      <symbol id="clock-icon" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </symbol>
      <symbol id="map-pin-icon" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </symbol>
      <symbol id="envelope-icon" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </symbol>
    </svg>
    
    </>
  );
};

export { About }; // Named export







    
    {/*
    //   {
//     name: "John Doe",
//     title: "CEO",
//     skills: "Leadership, Business Strategy, Team Management",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with real people images
//     description:
//       "John is the visionary leader driving our company towards innovation and success.",
//   },
//   {
//     name: "Jane Smith",
//     title: "Creative Director",
//     skills: "Design, UX/UI, Creative Direction",
//     imageUrl:
//       "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA=", // Replace with real people images
//     description:
//       "Jane is responsible for transforming ideas into beautiful designs and seamless user experiences.",
//   },
//   {
//     name: "Robert Brown",
//     title: "Operations Manager",
//     skills: "Project Management, Operations, Process Optimization",
//     imageUrl:
//       "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with real people images
//     description:
//       "Robert ensures that our projects run smoothly, managing resources and optimizing processes.",
//   },
// ];
    
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">
            Meet Our Team
          </h2>

         
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group h-80 w-80 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    <img
                      className="object-cover cursor-pointer object-center h-full w-full rounded-xl"
                      src={member.imageUrl}
                      alt={member.name}
                    />
                    <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl text-white font-semibold">
                      {member.name}
                    </p>
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center space-y-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {member.name}
                      </h3>
                      <p className="text-lg font-light text-white mb-4">
                        <strong>{member.title}</strong>
                      </p>
                      <p className="text-md font-light text-gray-400 mb-4">
                        <strong>Skills:</strong> {member.skills}
                      </p>
                      <p className="text-lg text-pretty text-center mb-4">
                        {member.description}
                      </p>
                      <br />
                      <a href="tel:555-555-5555" className="inline-flex">
                        <button className="my-2 bg-black hover:bg-yellow-700 text-white font-light py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Call</span>
                          <PhoneIcon className="h-6 w-6 ml-2" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> */}