import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background ">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
