import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Testimonials/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}
