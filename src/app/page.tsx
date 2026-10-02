import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Frameworks from "@/components/Frameworks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Journey />
        <Hero />
        <Projects />
        <Experience />
        <Frameworks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
