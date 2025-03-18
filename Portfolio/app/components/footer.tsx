import React from "react";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-700 to-blue-900 shadow-lg">
      <div className="container px-5 py-12 mx-auto">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center text-white">
            <VscAccount className="text-3xl" />
            <span className="ml-3 text-3xl font-extrabold">HAFSA</span>
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Full Stack Developer | Turning ideas into reality.
          </p>
        </div>

        {/* Grid Layout for Links and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/About" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/Services" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link href="/Projects" className="text-gray-300 hover:text-white">
                Projects
              </Link>
              <Link href="/Contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Contact Me</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+923-706-5999-43</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>hafsa08023@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/hafsa-sultan-45a6b6334/"
                aria-label="LinkedIn Profile"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Hafsa023"
                aria-label="GitHub Profile"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Hafsa Sultan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;