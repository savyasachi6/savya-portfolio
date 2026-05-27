import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Navbar />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
