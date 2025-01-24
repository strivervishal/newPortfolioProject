import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    role: "Web Developer Intern (Full Stack Developer)",
    company: "MangoesOrange Pvt Ltd",
    location: "Greater Noida, UP",
    period: "Oct 2024 – Current",
    project: "Mission1Million",
    details: [
      "Designed and developed a robust LMS (Learning Management System) project for efficient learning management, ensuring scalability, user engagement, and seamless cross-platform functionality.",
      "Managed open-source contributions while designing intuitive, responsive UIs and implementing scalable code for both front-end and back-end systems, ensuring efficient backend operations, optimal performance, and robust data integrity.",
      "Leveraged the MERN stack, combining React, Node.js, MongoDB, and Express.js, to architect and deliver high-performance, scalable, and user-centric web applications with seamless functionality.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Numety Technology",
    location: "Remote",
    period: "Jan 2025 – Feb 2025",
    details: [
      "Contributed to developing innovative software solutions and collaborated with the team to implement design features.",
      "Worked on optimizing existing applications to improve performance and user experience.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Experience Section */}
      <section id="experience" className="py-8 px-4 bg-gray-50 shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {exp.role}
              </h3>
              <p className="text-gray-700">
                <span className="font-bold">{exp.company}</span> —{" "}
                {exp.location} ({exp.period})
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section
        id="contact"
        className="py-8 px-4 text-center bg-white shadow-md"
      >
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          I am open to collaborations and exciting projects. Feel free to reach
          out to discuss your ideas or opportunities.
        </p>
        <div className="mt-6">
          <Link
            to="/contactUs"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Vishal Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Experience;
