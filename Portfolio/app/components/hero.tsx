"use client"
import React from "react";
import Image from "next/image";
import Pfp from "@/app/assets/pfp.webp";
import Bg from "@/app/assets/bg.jpeg";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-blue-950 to-sky-500 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={Bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20" // Adjust opacity for better readability
        />
      </div>

      <div className="container mx-auto flex px-5 py-24 flex-col items-center justify-center relative z-10">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 transform transition-all duration-500 hover:scale-105">
          <div className="relative w-[25rem] h-[25rem] rounded-full overflow-hidden border-4 border-black shadow-2xl hover:border-purple-200 transition-all duration-500">
            <Image
              className="object-cover object-center"
              alt="hero"
              src={Pfp}
              fill
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web developer..", "UI/UX Designer..!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-8 leading-relaxed text-white text-lg">
            I am a passionate full-stack developer with expertise in modern web
            technologies. Let's build something amazing together!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gradient-to-r from-teal-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;