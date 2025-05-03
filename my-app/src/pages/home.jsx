import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-tr from-[#E3F2FD] to-[#FFDEE9] flex flex-col justify-center items-center text-center px-4"
    >
      {/* Avatar or Logo (optional) */}
      <img
        src="/your-profile.jpg" // replace with your image path
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white object-cover"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2">
        Hi, I'm <span className="text-blue-600">Your Name</span>
      </h1>

      {/* Title */}
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Frontend Developer | JavaScript Enthusiast | UI/UX Designer
      </h2>

      {/* Description */}
      <p className="text-md md:text-lg max-w-xl text-gray-700 mb-6">
        I build clean and interactive user interfaces using React, Tailwind CSS, and modern web technologies.
      </p>

      {/* Call-to-Action */}
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300"
      >
        View My Work
      </a>

      {/* Social Links (optional) */}
      <div className="flex space-x-6 mt-8 text-gray-600">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-2xl hover:text-black transition"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-2xl hover:text-blue-800 transition"></i>
        </a>
        <a href="mailto:you@example.com">
          <i className="fas fa-envelope text-2xl hover:text-red-600 transition"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
