import AnimatedBackground from "./interface/animated/AnimatedBackground";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import PageLayout from "./PageLayout";
import ScrollTopButton from "./interface/ScrollTopButton";
import Clients from "./Clients";

const Portfolio = () => {
  return (
    <PageLayout>
      <div className="particles-wrapper">
        <AnimatedBackground />
      </div>
      <Home />
      <Skills />
      <Experience />
      <Clients />
      <Projects />
      <Contact />
      <ScrollTopButton />
    </PageLayout>
  );
};

export default Portfolio;
