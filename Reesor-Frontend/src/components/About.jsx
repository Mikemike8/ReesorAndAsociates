import React from 'react';
import { PhoneIcon } from '@heroicons/react/20/solid';

const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    skills: "Leadership, Business Strategy, Team Management",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with real people images
    description:
      "John is the visionary leader driving our company towards innovation and success.",
  },
  {
    name: "Jane Smith",
    title: "Creative Director",
    skills: "Design, UX/UI, Creative Direction",
    imageUrl:
      "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA=", // Replace with real people images
    description:
      "Jane is responsible for transforming ideas into beautiful designs and seamless user experiences.",
  },
  {
    name: "Robert Brown",
    title: "Operations Manager",
    skills: "Project Management, Operations, Process Optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with real people images
    description:
      "Robert ensures that our projects run smoothly, managing resources and optimizing processes.",
  },
];

const About = () => {
  return (
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          {/* Company Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">
            Meet Our Team
          </h2>

          {/* Team Members Grid */}
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group h-80 w-80 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face with image */}
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

                  {/* Back face with professional details */}
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
    </section>
  );
};

export { About }; // Named export