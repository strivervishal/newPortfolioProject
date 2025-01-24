import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Vishal Pandey Portfolio</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Bar */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-8 text-lg md:static absolute top-16 left-0 w-full md:w-auto bg-purple-600 md:bg-transparent p-6 md:p-0`}
        >
          <Link to="/" className="block md:inline hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="block md:inline hover:text-gray-300">
            About
          </Link>
          <Link to="/skills" className="block md:inline hover:text-gray-300">
            Skills
          </Link>
          <Link to="/education" className="block md:inline hover:text-gray-300">
            Education
          </Link>
          <Link
            to="/experience"
            className="block md:inline hover:text-gray-300"
          >
            Experience
          </Link>
          <Link to="/projects" className="block md:inline hover:text-gray-300">
            Projects
          </Link>
          <Link to="/contactUs" className="block md:inline hover:text-gray-300">
            Contact Us
          </Link>
        </nav>

        {/* Resume Button */}
        <button className="hidden md:block bg-white text-purple-500 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Resume
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-16">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hello <span className="animate-wave">👋</span>
            <br />
            I&apos;m Vishal Pandey
            <br />
            <span className="text-orange-300">Fullstack Developer</span>
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <a
              href="https://github.com/strivervishal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/vishal-pandey-997955233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/vishalpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="mt-8 md:mt-0">
          <img
            src="https://media-hosting.imagekit.io//e3235c37796c4f5c/imagedeveloper.png?Expires=1832139433&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y0jejnaQFERc8zmkQF033Ku~EZLI7D~Ymgfpb47-LEohbCqdVHoCbF8~HOMFDVLE2jNxxcklQYGOELzCLkNIoXgFDmjVWtmLSQDua6Cd8nmv-oOrSV~uk~yMzgepAkTmjJFs~0HZELQIo16TDt1VGZ9EVMsb1zIR1O2gv8DNayTs4FrT3wnDwf8Q--HppC4SYiV3rGOYLmF2yeVOUNRXIxi43qN98IbfvEsCyz~qOvhZpojgSN4v7DRJ8jpiGIKC2rR~HN6sXZWRU4beLOj7VAPPxnsly-ZskzJrNad4JgMM9lcKaar8VUX5sjut1CdPwYNLW0E10MtDlegTHX1J4A__"
            alt="Illustration of a developer"
            className="w-[33rem] h-[60vh]"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
