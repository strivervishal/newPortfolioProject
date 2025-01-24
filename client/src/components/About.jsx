import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#dadada] flex flex-col">
      {/* Navbar */}
      <nav className="bg-black py-6 shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-white text-2xl font-bold">
            Vishal Pandey Portfolio
          </div>
          <div className="space-x-6 text-white">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/experience" className="hover:text-gray-300">
              Experience
            </Link>
            <Link to="/skills" className="hover:text-gray-300">
              Skills
            </Link>
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 bg-gray-300 mt-32 mb-14">
        <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg p-20 shadow-lg max-w-5xl w-11/12 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-10">ABOUT ME</h1>
          <p className="text-white text-xl mb-10 text-center">
            Hello! I'm <span className="font-semibold">Vishal Pandey</span>, a
            passionate and dedicated full-stack web developer with a strong
            background in front-end and back-end technologies. I thrive on
            challenges, continuously learning and improving to create functional
            and user-friendly applications. When I'm not coding, you can find me
            exploring new technologies, attending meetups, or working on
            personal projects.
          </p>
          <p className="text-white text-xl text-center mb-10">
            I'm currently seeking opportunities where I can apply my skills and
            contribute to building impactful digital solutions.
          </p>

          {/* Image Section */}
          <div className="mt-10">
            <img
              src="https://media.istockphoto.com/id/177383755/photo/indian-businessman.webp?s=2048x2048&w=is&k=20&c=dh6YSpPP9ZRpOjmmGrsNugYj2mpXj4KcuDLYG6sGgPU="
              alt="Vishal Pandey"
              className="rounded-full w-60 h-60 shadow-md border-4 border-white"
            />
          </div>

          {/* Button */}
          <div className="mt-10">
            <Link
              to="/contactUs"
              className="bg-white text-blue-600 font-medium px-10 py-4 rounded-full shadow hover:bg-blue-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-lg font-medium">
          &copy; 2025 Vishal Pandey. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
