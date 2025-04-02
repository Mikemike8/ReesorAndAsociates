import React from 'react';

export const About = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* About Section */}
      <div className="bg-gray-700 text-white text-center py-12">
        <h1 className="text-4xl mb-4">About Us Page</h1>
        <p className="text-lg mb-4">Welcome to our About Us page!</p>
        <p className="text-lg">
          We are a team of passionate professionals who strive to make a difference in the world through innovation, creativity, and collaboration. Our goal is to provide solutions that help people and businesses thrive.
        </p>
      </div>

      {/* Mission Section */}
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to create impactful solutions that enhance people's lives and improve businesses. We believe in continuous learning, teamwork, and growth.
        </p>
        <p className="text-lg">
          We are committed to delivering quality and innovative services to our clients while maintaining a sustainable approach to growth.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-gray-200 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p>We are constantly seeking new ways to innovate and improve. Our solutions are cutting-edge and forward-thinking.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p>We value transparency, honesty, and ethical practices in everything we do. Trust is the foundation of our relationships.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
            <p>We believe in the power of collaboration. Working together allows us to achieve greater success and create better outcomes.</p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default About;


