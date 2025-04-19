import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RessorLogo from '../assets/Reesorlog.png'; 
import Modal from './Modal';


const About = () => {


  return (
    <>
      <div className=" py-16 md:py-24">
      <div className="w-full ">

          <section className="text-center py-16 ">
            <h1 className="text-[70px] font-bold mb-6  font-normal    text-[#003366] tracking-wide">
              Get Results. Contact Us Today:
            </h1>
            <p className="text-lg font-raleway text-gray-600 max-w-2xl mx-auto">
              We’d love to hear from you. Whether you’re looking to recover unpaid invoices, have questions about our collection process, or just want to discuss industry challenges—we’re here to help.
            </p>
          </section>

          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 py-16 px-6">
            <div className="space-y-6  font-normal p-10 bg-[#003366]">
              <h2 className="text-4xl text-white font-raleway mb-4">Contact Us</h2>
              <form
              action="https://api.web3forms.com/submit"
               method="POST"
                className="space-y-6"
              >
              <input type="hidden" name="access_key" value="12b61994-d093-414d-abec-e331862b8bec"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white   mb-2">First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message*</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <input type="hidden" name="_next" value="https://reesorandasociates.onrender.com/about" />
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-4 px-6 rounded-lg hover:bg-red-600 transition-colors font-raleway text-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6 bg-[#f8f8f8] p-10 text-gray-700 text-sm">
              <div>
                <h3 className="text-3xl font-raleway mb-2 text-[#003366]">General Inquiries</h3>
                <p className='font-raleway'>Have a question… or just want to say hello? Get in touch:</p>
                <p className="font-raleway hover:text-[#003366]">800.710.3975</p>
              </div>
              
              <div>
                <h3 className="text-3xl font-raleway mb-2 text-[#003366]"> Transportation Alert</h3>
                <p>Find Out Who's Not Paying</p>
                <Link
              to="/topdebtor"
              className="inline-block mt-2  font-raleway text-[#003366] underline"
            >
              Top Debtors →
            </Link>
              </div>
              <div>
                <h3 className="text-3xl font-raleway  mb-2 text-[#003366]"> Broker Alerts</h3>
                <p>Stay updated with the latest broker alerts and financial insights.</p>
                <a href="#" className="inline-block mt-2 text-[#003366] underline">Sign Up Here →</a>
              </div>

              <div>
             
            
                <h3 className="text-3xl font-raleway mb-2 text-[#003366]">Our Location</h3>
                <p className='font-raleway '>5689 Goodman Road<br />  Olive Branch, MS 38654</p>
                <a
                  href="https://g.co/kgs/Kte1A14"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-[#003366] underline"
                >
                  Get Directions →
                </a>
              </div>
            

            </div>
            
          </section>

          <div className="relative w-full py-4">
  {/* Horizontal line */}
  <div className="absolute top-1/2 left-0 right-0 bg-gray-400 h-0.5"></div>

  {/* Logo in the middle */}
  <div className="relative flex justify-center items-center w-full">
    <div className="absolute top-1/2 transform -translate-y-1/2 bg-custom-blue p-3 rounded-full shadow-lg">
      <img src={RessorLogo} alt="Logo" className="w-12 h-12 object-contain"/>
    </div>
  </div>
</div>

          <Modal/>

  
    
        </div>
      </div>

    </>
  );
};

export { About };





    
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