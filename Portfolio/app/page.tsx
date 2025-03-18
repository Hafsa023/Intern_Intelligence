
import Hero from "./components/hero";
import Contact from "./components/contact";
import About from "./components/about";
import Services from "./components/services";
import ProjectsPage from "./components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsPage />
      <Services />
      <Contact />
    </div>
  );
}



