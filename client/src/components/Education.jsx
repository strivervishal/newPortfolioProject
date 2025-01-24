import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "High School",
      institute: "D.R.C.R.S.V",
      date: "June 10, 2018 - April 25, 2018",
      description:
        "I completed my high school at D.R.C Rashtriya Sainik Vidyalaya, securing 87% marks. During this time, I was a disciplined and regular student.",
      logo: "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png",
    },
    {
      title: "Intermediate",
      institute: "GSAS Academy",
      date: "June 15, 2018 - April 28, 2020",
      description:
        "I completed my Intermediate studies at GSAS Academy Harraiya Basti with 78% marks. I was consistent in academics as a regular student.",
      logo: "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png",
    },
    {
      title: "B.Tech",
      institute: "AIMT Greater Noida",
      date: "October 26, 2021 - June 10, 2025",
      description:
        "I am currently pursuing a Bachelor of Technology (B.Tech) degree specializing in Frontend Development. I excel in creating user-friendly and visually appealing web interfaces. I am proficient in HTML, CSS, and JavaScript, and I have a strong passion for staying updated on the latest web development trends. I aspire to contribute innovative solutions to digital projects.",
      logo: "https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png",
    },
  ];

  return (
    <section id="education" className="py-12 bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#2857a4] flex items-center justify-center mb-12">
        <FaGraduationCap className="mr-3" />
        Education
      </h1>

      {/* Timeline Container */}
      <div className="relative w-3/4 mx-auto">
        {/* Timeline Divider */}
        <div className="absolute left-1/2 transform -translate-x-1/2 border-r-2 border-dashed border-[#2857a4] h-full"></div>

        {/* Timeline Content */}
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`relative flex items-start mb-14 ${
              index % 2 === 0
                ? "text-left justify-start"
                : "text-left justify-end"
            }`}
          >
            {/* Timeline Marker */}
            <div className="absolute -top-2 w-6 h-6 bg-[#2857a4] rounded-full left-1/2 transform -translate-x-1/2"></div>

            {/* Timeline Entry */}
            <div
              className={`${
                index % 2 === 0 ? "w-1/2 pl-16 pr-8" : "w-1/2 pr-16 pl-8"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={edu.logo}
                  alt={`${edu.title} Logo`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#2857a4]">
                    {edu.title}
                  </h3>
                  <h4 className="text-lg text-orange-600">{edu.institute}</h4>
                </div>
              </div>
              <h5 className="text-sm text-gray-500 mb-2">{edu.date}</h5>
              <p className="text-base text-gray-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
