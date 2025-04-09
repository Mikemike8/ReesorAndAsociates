import React from 'react';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom'; // Import the Link component



const About = () => {
  return (
      <> <div className="bg-gray-50  shadow-lg py-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12">
      
      {/* Left Column - Contact Info & Form */}
      <div className="w-full lg:w-1/2 space-y-10">
        {/* Contact Information Card */}
        <div className="bg-gray-50 p-8 rounded-lg  border border-gray-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Reesor & Associates</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Opening Hours</h4>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <span className="inline-block w-24">Mon-Thu:</span> 9:00AM - 5:00PM
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-24">Fri:</span> 9:00AM - 4:00PM
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-24">Sat-Sun:</span> Closed
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Location</h4>
              <p className="text-gray-600">5689 Goodman RD, Olive Branch, MS 38654</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Contact</h4>
              <ul className="text-gray-600 space-y-1">
                <li>
                  Email: <a href="mailto:info@mysite.com" className="text-blue-600 hover:text-blue-800">info@mysite.com</a>
                </li>
                <li>
                  Phone: <a href="tel:555-555-1212" className="text-blue-600 hover:text-blue-800">555-555-1212</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Follow Us</h4>
              <div className="flex space-x-4 text-gray-500">
                <a href="#" className="hover:text-blue-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  <span className="sr-only">TikTok</span>
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
    {/* Contact Form Card - Red Version */}
<div className="bg-red-50  p-8 rounded-lg shadow-sm border border-gray-100">
  <h3 className="text-2xl  text-red-800 font-bold text-gray-800 mb-6">Contact Us</h3>
  
  <form className="space-y-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-red-800 mb-1">First Name</label>
        <input 
          type="text" 
          id="first-name" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" 
          placeholder="First name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-red-800 mb-1">Last Name</label>
        <input 
          type="text" 
          id="last-name" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" 
          placeholder="Last name"
          required
        />
      </div>
    </div>
    
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-red-800 mb-1">Email</label>
      <input 
        type="email" 
        id="email" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" 
        placeholder="your.email@example.com"
        required
      />
    </div>
    
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-red-800 mb-1">Phone</label>
      <input 
        type="tel" 
        id="phone" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" 
        placeholder="(123) 456-7890"
        required
      />
    </div>
    
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-red-800  mb-1">Message</label>
      <textarea 
        id="message" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" 
        placeholder="Your message"
        rows="4"
        required
      ></textarea>
    </div>
    
    <div>
      <button 
        type="submit" 
        className="w-full bg-red-700 text-white py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition-colors"
      >
        Submit
      </button>
    </div>
  </form>
</div>

      </div>
      
      {/* Right Column - About Us Content */}
      <div className="w-full lg:w-1/2 space-y-8">
    {/* Email Subscription Card - Red Version */}
<div className="bg-red-50 p-6 rounded-lg border border-red-100">
  <h4 className="font-semibold text-red-800 mb-2 text-sm">RECEIVE WEEKLY BROKER ALERTS VIA EMAIL</h4>
  <p className="text-red-700 mb-4 text-sm">Stay updated on nonpaying brokers, double brokering activity, and high-risk companies—delivered straight to your inbox. Sign up now to protect your business.</p>
  
  <form className="space-y-3">
    <div>
      <label className="block text-xs font-medium text-red-800 mb-1">Company Name</label>
      <input 
        type="text" 
        className="w-full px-3 py-2 border border-red-200 rounded text-sm focus:ring-red-500 focus:border-red-500" 
        placeholder="Your company name"
      />
    </div>
    <div>
      <label className="block text-xs font-medium text-red-800 mb-1">Email</label>
      <input 
        type="email" 
        className="w-full px-3 py-2 border border-red-200 rounded text-sm focus:ring-red-500 focus:border-red-500" 
        placeholder="your.email@example.com"
      />
    </div>
    <button 
      type="submit" 
      className="w-full bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm transition-colors"
    >
      Subscribe
    </button>
  </form>
</div>

 <div className="bg-red-700 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">TRANSPORTATION ALERT</h3>
          <p className="text-lg  text-white  mb-4">Find Out Who's Not Paying</p>
          {/* Wrap the button with Link for navigation */}
<Link to="/topdebtor">
  <button className="bg-white text-red-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
    View Top Debtors →
  </button>
</Link>
        </div>


      </div>
      
    </div>
  </div>
</div>
    
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