import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Projects = () => {
  const projects = [
    {
      name: "Movie Application",
      description: "Browse and search movies using TMDB API and React.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/movieApplication.git",
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio designed with modern web technologies.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/portfolio.git",
    },
    {
      name: "ObeyAgency Clone",
      description:
        "Responsive Objey Agency clone with animations, smooth transitions, and interactivity.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/obysAgency.git",
    },

    {
      name: "LMS Mangement System",
      description:
        "LMS system built with MERN stack, offering seamless learning management functionality.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/m1m.git",
    },
    {
      name: "YouTube UI Clone",
      description:
        "YouTube UI clone featuring responsive design, interactive elements, and modern styling for an authentic user experience.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/youtube.git",
    },
    {
      name: "Wordpress AstraTheme Clone",
      description:
        "Astra Theme clone built with WordPress, featuring responsive design, customization, and lightweight performance optimization.",
      image:
        "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png",
      github: "https://github.com/strivervishal/astraTheme.git",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2857a4] flex items-center justify-center gap-3">
          <span className="material-icons text-5xl text-[#2857a4]">
            <GoProjectRoadmap />
          </span>
          <h1 className="text-5xl">PROJECTS</h1>
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          A collection of projects showcasing my skills in web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
            {/* Overlay (Shown on hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
              <div className="text-center px-4">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 text-white"
                >
                  <FaGithub className="text-3xl mb-2" />
                  <span className="text-lg font-medium">Show on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
