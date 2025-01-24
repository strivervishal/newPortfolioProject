import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGooglePlus,
  FaFacebook,
} from "react-icons/fa";

const ContactUs = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      text: "UP, India",
    },
    {
      icon: <FaPhone />,
      text: "9554095614",
    },
    {
      icon: <FaEnvelope />,
      text: "vp564141@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaGooglePlus />, link: "https://plus.google.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "new-portfolio-project-ub94.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-wrap gap-10 p-6">
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            <FaEnvelope className="inline-block mr-2" /> Contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-bold">Get In Touch</h3>
          <p className="text-sm">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div>
            <h4 className="text-lg font-semibold">My Address</h4>
            <ul className="space-y-4">
              {contactDetails.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 text-2xl">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
