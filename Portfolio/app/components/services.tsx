import React from "react";
import { FaCode, FaPaintBrush, FaServer, FaTools, FaDatabase, FaCloud } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      name: "Frontend Development",
      description:
        "I build responsive, high-performance websites using modern technologies like React, Next.js, Tailwind CSS, HTML, and CSS.",
      icon: <FaCode className="w-8 h-8" />,
    },
    {
      name: "Backend Development",
      description:
        "I develop robust and scalable backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL.",
      icon: <FaServer className="w-8 h-8" />,
    },
    {
      name: "UI/UX Design",
      description:
        "I design intuitive and visually appealing user interfaces using tools like Figma and Tailwind CSS to enhance user experience.",
      icon: <FaPaintBrush className="w-8 h-8" />,
    },
    {
      name: "Full-Stack Development",
      description:
        "I offer end-to-end development services, combining frontend and backend technologies to deliver complete web applications.",
      icon: <FaTools className="w-8 h-8" />,
    },
    {
      name: "HTML/CSS Projects",
      description:
        "I create clean, responsive, and modern websites using HTML and CSS, ensuring cross-browser compatibility and accessibility.",
      icon: <FaDatabase className="w-8 h-8" />,
    },
    {
      name: "API Handling & Integration",
      description:
        "I design, develop, and integrate RESTful APIs and GraphQL endpoints for seamless communication between frontend and backend systems.",
      icon: <FaCloud className="w-8 h-8" />,
    },
  ];

  return (
    <div id="services" className="bg-gradient-to-br from-blue-950 to-sky-700 py-24">
      <section className="text-gray-800 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
           
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-black">
              My Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black font mt-4">
              Leveraging my expertise in frontend, backend, full-stack development, and API handling, I provide tailored solutions to bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
                <div className="flex rounded-lg h-full bg-slate-500 p-8 flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-600">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-zinc-700 text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {service.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-white">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center text-black font-semibold hover:text-blue-950 transition-colors duration-300"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;