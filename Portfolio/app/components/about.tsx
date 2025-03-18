import React from "react";
import Image from "next/image";
import Pfp from "@/app/assets/pfp.webp";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-br from-sky-500 to-blue-950 py-24" // Sky/blue gradient background
    >
      <section className="text-gray-800 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          {/* Text Section with Slide-In Animation */}
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-slide-in-left" // Tailwind animation class
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
              About Me
            </h1>

            <p className="mb-8 leading-relaxed text-black">
              <span className="block font-semibold text-blue-950">
                Matriculation (Completed in 2024)
              </span>
              Completed high school education (Matriculation) with a strong
              foundation in core subjects.

              <span className="block mt-4 font-semibold text-blue-950">
                Intermediate (Current)
              </span>
              Currently pursuing Intermediate in Pre-Medical, focusing on
              subjects like Biology, Chemistry, and Physics to prepare for
              further studies in medicine or related fields.

              <span className="block mt-4 font-semibold text-blue-950">
                Web Development Course (Ongoing)
              </span>
              I am a full-stack web developer with a strong focus on building
              exclusive and responsive websites with expertise in HTML, CSS,
              TypeScript, Tailwind CSS, Next.js, React.js, Node.js, and more.
              Currently enrolled in a Web.3 Metaverse and A.I course under the
              Governor Sindh Initiative.
            </p>

            <div className="flex justify-center">
  <Link href="https://hackathon-milestone-1oiv.vercel.app">
    <button className="inline-flex text-white bg-gradient-to-r from-teal-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
      Resume
    </button>
  </Link>
</div>
          </div>

          {/* Image Section with Slide-In Animation */}
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-slide-in-right" // Tailwind animation class
          >
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <Image
                className="object-cover object-center rounded-lg"
                alt="hero"
                src={Pfp}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
