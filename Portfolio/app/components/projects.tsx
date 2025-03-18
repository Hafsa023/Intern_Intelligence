import Link from 'next/link';
import Image from 'next/image';
import E from "@/app/assets/e.png";
import Converter from "@/app/assets/images.jpeg";
import Resume from "@/app/assets/twittercard.jpg";
import Mindset from "@/app/assets/images.png";
import Password from "@/app/assets/img.png";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A fully responsive E-commerce website with stripe integration and clerk authentication',
      link: 'https://styles-tride-jspw.vercel.app',
      image: E, 
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A simple edit and shareable resume builder. ',
      link: 'https://hackathon-milestone-c7le.vercel.app',
      image: Resume, 
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A growth Mindset challenge app',
      link: 'https://app-fktgtxhhxptviupjfq2dtn.streamlit.app/',
      image: Mindset, 
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A Unit converter  app',
      link: "https://pythonassignments.streamlit.app/",
      image: Converter 
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'A password strength checker app',
      link: "https://pythonassignments-password-strength.streamlit.app/",
      image: Password 
    },
  ];

  return (
  
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-950 to-sky-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 flex justify-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:transition-all duration-300 transform hover:scale-105">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-600">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-2xl font-bold mt-4 text-white">{project.title}</h3>
                <p className="text-black mt-2">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex text-white bg-gradient-to-r from-teal-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
}