import Link from "next/link";
import React from "react";
import { RiFileDownloadFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-blue-900 z-50 sticky top-0 shadow-lg">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <VscAccount className="text-2xl" />
            <span className="ml-3 text-2xl font-extrabold">HAFSA</span>
          </div>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {["Home", "About", "Projects","Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="mr-5 hover:text-gray-200 transition-all duration-300 relative group"
              >
                <span className="text-lg hover:text-xl hover:font-bold transition-all duration-300">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Download CV Button */}
          <a
            href="https://hackathon-milestone-1oiv.vercel.app
"
            className="inline-flex items-center bg-white text-purple-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0 font-semibold transition-all duration-300"
          >
              View Resume
            <RiFileDownloadFill className="text-lg ml-2" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;