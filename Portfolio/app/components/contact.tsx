import React from "react";
import { AiFillEye } from "react-icons/ai";
import { HiUserRemove } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-br from-blue-950 to-sky-500 py-24">
      <section className="text-gray-800 body-font relative">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map and Address Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238.950792916944!2d67.06411529017358!3d24.88176084466013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec1ef53e5c7%3A0x14849036f9416ef6!2sBahadurabad%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732467477354!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-slate-400 relative flex flex-wrap py-6 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">ABC area, Karachi.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed hover:text-blue-600 transition-colors duration-300">
                  abc@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03-XXX-XXXX</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-zinc-400 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Contact
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="inline-flex text-white bg-gradient-to-r from-teal-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;