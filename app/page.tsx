
import Navbar from "@/components/layout/Navbar";

import HeroScroll from "@/components/animations/HeroScroll";
import NarrativeReveal from "@/components/animations/NarrativeReveal";
import HeroIntro from "@/components/hero/HeroIntro";
import ContactSection from "@/components/contact/ContactSection";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import ExperienceJourney from "@/components/experience/ExperienceJourney";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="inicio"
        className="relative overflow-x-clip"
      >
        {/* FONDOS DECORATIVOS DEL HERO */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

        <div className="pointer-events-none absolute left-0 top-80 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

        {/* HERO + TRANSICIÓN NARRATIVA + CARRUSEL */}
        <HeroScroll
          content={<HeroIntro />}
          scene={<NarrativeReveal />}
        />

        {/* PROYECTOS SELECCIONADOS */}
        <ProjectsShowcase />

        {/* EXPERIENCIA Y FORMACIÓN */}
        <ExperienceJourney />

        {/* CONTACTO */}
        <ContactSection />
      </main>
    </>
  );
}
