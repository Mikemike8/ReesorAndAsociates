
import React, { useState, useEffect } from 'react';
import RessorLogo from '../assets/Reesorlog.png'; 



export const Footer = () => {

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


  return (
    <div>
        
<div className="overflow-hidden flex flex-row h-8 bg-white text-black border-y border-black/20">
  <div className="whitespace-nowrap font-sans inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
  <div className="whitespace-nowrap font-sans inline-block animate-marquee text-lg sm:text-2xl md:text-xl font-bold leading-tight tracking-tight">
    Find out who owes you money &nbsp;&nbsp;&nbsp; Sign up for broker alerts &nbsp;&nbsp;&nbsp; Place debtors now &nbsp;&nbsp;&nbsp;
  </div>
</div>


         <footer className="bg-[#003366] text-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
            <div>
              <h3 className="text-xl  font-raleway mb-4">Reesor & Associates</h3>
              <p className="text-sm text-gray-300   font-raleway leading-relaxed">
                Trusted in collections and recovery. We’re here to help businesses get paid faster and smoother.
              </p>
            </div>
        
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 108 8 8.01 8.01 0 00-8-8zm1 9H9V6h2z" />
                </svg>
                <h4 className="font-raleway text-xl  ">Opening Hours</h4>
              </div>
              <dl className="text-sm space-y-1  font-ralewaytext-gray-300">
                <div className="flex  font-raleway justify-between">
                  <dt>Mon–Thu</dt><dd>9:00AM – 5:00PM</dd>
                </div> 
                <div className="flex   font-raleway justify-between">
                  <dt>Friday</dt><dd>9:00AM – 4:00PM</dd>
                </div>
                <div className="flex justify-between font-raleway  text-red-400">
                  <dt>Weekend</dt><dd>Closed</dd>
                </div>
              </dl>
            </div>
        
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C5.6 0 2 3.6 2 8c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 113-3 3 3 0 01-3 3z" />
                </svg>
                <h4 className=" font-raleway  text-xl  ">Location</h4>
              </div>
              <a
                  href="https://g.co/kgs/Kte1A14"
                 className=''
                  
                >
              <p className="text-sm  hover:underline text-gray-300 leading-relaxed mb-2  font-raleway ">
                5689 Goodman Road<br />Olive Branch, MS 38654
              </p>
              </a>
              <a href="mailto:info@mysite.com" className="block text-sm text-red-400 hover:underline  font-raleway">info@mysite.com</a>
              <a href="tel:555-555-1212" className="block text-sm text-red-400 hover:underline mt-1 font-raleway">555-555-1212</a>
            </div>
        
            <div> 
              <h4 className="text-xl  mb-4 font-raleway "> Recieve Broker Alerts</h4>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-red-400 mb-2 font-raleway ">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-red-200 rounded-lg  font-raleway text-gray-900"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-400 mb-2  font-raleway ">Work Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 border font-raleway  border-red-200 rounded-lg text-gray-900"
                    placeholder="contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="w-full  font-raleway  text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                  Subscribe Now
                </button>
                {status && <p className="text-sm text-gray-200 mt-2">{status}</p>}
              </form>
            </div>
        
            <div className="flex flex-col text-center items-center lg:items-start">
              <h4 className="font-raleway text-xl   mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-xl text-gray-300 mb-6">
                <a href="#" className="hover:text-red-400"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-red-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-red-400"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-red-400"><i className="fab fa-youtube"></i></a>
                <a href="#" className="hover:text-red-400"><i className="fab fa-tiktok"></i></a>
              </div>
              <img
                src={RessorLogo}
                alt="Reesor & Associates Logo"
                className="w-40 sm:w-48 m-auto md:w-52 lg:w-60 object-contain"
              />
            </div>
        
           
        
          </div>
        
          <div className="mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-400">
            © 2025 Reesor & Associates. All rights reserved.
          </div>
        </footer>
        
        

    </div>

  );
};