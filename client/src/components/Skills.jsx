import React from "react";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  const skills = [
    { name: "C++", percentage: 80, color: "#2857a4" },
    { name: "HTML", percentage: 90, color: "#93738c" },
    { name: "CSS", percentage: 80, color: "#0b8176" },
    { name: "JavaScript", percentage: 85, color: "#0b8176" },
    { name: "jQuery", percentage: 60, color: "#2857a4" },
    { name: "React.js", percentage: 75, color: "#93738c" },
    { name: "TailwindCSS", percentage: 85, color: "#93738c" },
    { name: "MongoDB", percentage: 80, color: "#0b8176" },
    { name: "Express.js", percentage: 70, color: "#2857a4" },
    { name: "Node.js", percentage: 70, color: "#2857a4" },
  ];

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-md w-[80%]">
        <h2 className="text-center text-7xl uppercase text-[#2857a4] mb-6">
          <div className="flex items-center justify-center space-x-4">
            <GiSkills className="text-[2em]" />
            <span>Skills</span>
          </div>
        </h2>
        {/* Responsive grid for layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <span className="block text-gray-700 mb-2 text-lg font-medium">
                {skill.name}
              </span>
              <div className="w-full h-8 bg-gray-300 rounded-full">
                <div
                  className="h-8 rounded-full"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
