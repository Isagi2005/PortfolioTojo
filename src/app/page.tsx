import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Projects } from "@/sections/projects";
import { Expeditions } from "@/sections/expeditions";
import { Experience } from "@/sections/experience";
import { Gallery } from "@/sections/gallery";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Expeditions />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
