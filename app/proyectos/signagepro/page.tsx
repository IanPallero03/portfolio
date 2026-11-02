import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyMotion from "@/components/case-study/CaseStudyMotion";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "SignagePro | Caso de estudio — Ian Pallero",
  description:
    "Caso de estudio de SignagePro: cinco meses de colaboración en un SaaS. Mi trabajo en arquitectura de componentes, identidad visual, dashboard, optimización responsive y colaboración mediante GitHub y Pull Requests.",
};

const contributions = [
  {
    id: "01",
    eyebrow: "ARQUITECTURA FRONT-END",
    title: "Una base de componentes para crecer.",
    description:
      "Me encargué de gran parte de la componentización inicial del Front-End: estructuré las bases, organicé interfaces en componentes reutilizables y trabajé para que el código fuera más claro y mantenible. Fue uno de mis aportes principales al proyecto.",
    detail: "Organización · Reutilización · Mantenibilidad",
  },
  {
    id: "02",
    eyebrow: "SISTEMA VISUAL",
    title: "Una identidad reconocible.",
    description:
      "Estuve a cargo de la elección del nombre SignagePro, la paleta de colores y el diseño del logo. Busqué que estas decisiones construyeran una identidad coherente y sirvieran como referencia para la interfaz del producto.",
    detail: "Naming · Logotipo · Paleta de color",
  },
  {
    id: "03",
    eyebrow: "PRODUCTO / DASHBOARD",
    title: "Coherencia en toda la interfaz.",
    description:
      "En la etapa final de pulido revisé y mejoré los componentes del Front-End y su diseño general. Trabajé sobre pantallas del dashboard para refinar su presentación, navegación y consistencia visual, además de aportar ajustes funcionales orientados al uso cotidiano.",
    detail: "Dashboard · Navegación · Consistencia visual",
  },
  {
    id: "04",
    eyebrow: "LANDING / EXPERIENCIA MÓVIL",
    title: "Del desktop al celular.",
    description:
      "Trabajé sobre una landing que ya existía para mejorar su adaptación responsive, ajustar animaciones y resolver problemas de rendimiento. El objetivo fue conseguir una experiencia más fluida y usable en distintos dispositivos.",
    detail: "Responsive · GSAP · Optimización",
  },
];

const workflow = [
  {
    number: "01",
    title: "Construir las bases",
    description:
      "Organización inicial de la interfaz y desarrollo de componentes reutilizables para el trabajo compartido.",
  },
  {
    number: "02",
    title: "Desarrollar y mejorar",
    description:
      "Iteraciones sobre la landing, el dashboard y la experiencia de navegación a medida que evolucionaba el producto.",
  },
  {
    number: "03",
    title: "Unificar y pulir",
    description:
      "Revisión transversal de componentes, ajustes visuales y optimización de la experiencia Front-End.",
  },
];

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Modules",
  "GSAP", "Git", "GitHub", "Docker", "GitHub Actions",
];

const eyebrow = "font-mono text-[10px] font-semibold uppercase tracking-[.22em] sm:text-xs";
const sectionTitle = "font-heading text-[clamp(2.55rem,5.4vw,5.4rem)] font-bold leading-[1.03] tracking-[-.072em]";

export default function SignageProCaseStudy() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F8F9FF] text-[#19152F]">
      <div className="sticky top-0 z-40 border-b border-violet-200/60 bg-[#F8F9FF]/95 backdrop-blur-xl">
        <nav aria-label="Navegación del caso de estudio" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-10">
          <Link href="/#proyectos" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#33285C] transition hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 sm:text-sm">
            <span aria-hidden="true">←</span> Volver al portfolio
          </Link>
          <span className="font-mono text-[9px] uppercase tracking-[.19em] text-violet-600 sm:text-xs">IP / CASE STUDY 001</span>
        </nav>
      </div>

      <CaseStudyMotion>
        {/* 00 / Apertura editorial */}
        <section data-case-section className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 85% 15%,rgba(170,143,255,.22),transparent 49%),radial-gradient(ellipse at 5% 75%,rgba(95,162,255,.13),transparent 49%)" }} />
          <div className="mx-auto max-w-7xl">
            <div data-case-reveal className={`mb-8 flex items-center gap-3 text-violet-600 ${eyebrow}`}>
              <span className="h-2 w-2 shrink-0 rounded-full bg-violet-500" /> EXPERIENCIA DESTACADA <span className="h-px w-8 bg-violet-300 sm:w-12" /> SAAS
            </div>
            <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
              <div>
                <h1 data-case-reveal className="font-heading text-[clamp(3.6rem,10vw,9rem)] font-bold leading-[.88] tracking-[-.09em]">
                  Signage<span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">Pro.</span>
                </h1>
                <p data-case-reveal className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  De construir las bases del Front-End a refinar la experiencia visual de un producto SaaS real.
                </p>
              </div>
              <div data-case-reveal className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-violet-200 bg-white/75 p-5 sm:p-6">
                  <div className="font-heading text-5xl font-bold tracking-tight text-violet-700">05</div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Meses de colaboración</p>
                </div>
                <div className="rounded-2xl border border-violet-200 bg-white/75 p-5 sm:p-6">
                  <div className="font-heading text-4xl font-bold tracking-tight text-violet-700">Front-End</div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Trabajo con otros desarrolladores</p>
                </div>
              </div>
            </div>
            <div data-case-reveal className="mt-14 overflow-hidden rounded-[24px] border border-violet-200/70 bg-gradient-to-br from-[#EAE4FF] via-[#E7EDFF] to-[#D4E8FF] p-2 shadow-[0_30px_100px_rgba(86,64,151,.14)] sm:rounded-[36px] sm:p-5">
              <div className="overflow-hidden rounded-[17px] border border-[#262441]/15 bg-white sm:rounded-[24px]">
                <div className="flex items-center justify-between gap-3 border-b border-[#262441]/10 bg-[#17182D] px-4 py-3 text-white sm:px-6">
                  <span className="font-mono text-[9px] font-semibold tracking-[.15em] sm:text-[10px]">IP / PROJECT VISUALIZER</span>
                  <span className="font-mono text-[9px] tracking-[.12em] text-violet-200">SIGNAGE / 001</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/images/signagepro-cover.png`} alt="Captura real de la landing de SignagePro" fetchPriority="high" className="block aspect-video w-full object-cover object-top" />
              </div>
            </div>
            <div data-case-reveal className="mt-7 flex flex-wrap gap-3">
              <a href="https://signagepro.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#17182D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">Visitar SignagePro ↗</a>
              <a href="https://github.com/saass-Tv/SaaS-Tv-Front" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-violet-300 bg-white px-6 py-3 text-sm font-semibold text-[#33285C] transition hover:border-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">Ver repositorio ↗</a>
            </div>
          </div>
        </section>

        {/* 01 / Contexto */}
        <section data-case-section className="border-y border-violet-100 bg-white px-5 py-20 sm:px-10 sm:py-28" aria-labelledby="context-title">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.68fr_1.32fr] lg:gap-20">
            <div data-case-reveal>
              <p className={`${eyebrow} text-violet-600`}>01 / EL CONTEXTO</p>
              <h2 id="context-title" className={`mt-4 ${sectionTitle}`}>Un producto.<br /><span className="text-violet-600">Muchas interfaces.</span></h2>
            </div>
            <div data-case-reveal className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>SignagePro es una plataforma SaaS para gestionar y distribuir contenido de manera remota en múltiples pantallas. Además de su landing pública, el producto cuenta con interfaces de administración que necesitan funcionar como un conjunto coherente.</p>
              <p>Durante cinco meses participé en su desarrollo junto con otros desarrolladores. Mi trabajo combinó <strong className="font-semibold text-[#251B42]">componentización, identidad visual, mejoras del dashboard y adaptación responsive</strong>, con especial atención a la consistencia de la experiencia Front-End.</p>
              <p>Mi contribución fue evolucionando durante el proyecto: comencé construyendo gran parte de la base de componentes y, en la fase de pulido, trabajé sobre el conjunto de las interfaces para mejorar su diseño y comportamiento.</p>
            </div>
          </div>
        </section>

        {/* 02 / Diferencial: componentización y refinamiento */}
        <section data-case-section className="relative overflow-hidden bg-[#171329] px-5 py-20 text-white sm:px-10 sm:py-28" aria-labelledby="core-title">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 95% 15%,rgba(149,104,242,.16),transparent 47%),radial-gradient(ellipse at 0% 95%,rgba(93,151,255,.11),transparent 48%)" }} />
          <div className="relative mx-auto max-w-7xl">
            <p data-case-reveal className={`${eyebrow} text-violet-300`}>02 / MI PRINCIPAL CONTRIBUCIÓN</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
              <h2 data-case-reveal id="core-title" className={`${sectionTitle} max-w-3xl`}>Primero, construir la base.<br /><span className="bg-gradient-to-r from-violet-300 to-sky-300 bg-clip-text text-transparent">Después, conectar cada detalle.</span></h2>
              <div data-case-reveal className="self-end space-y-5 text-base leading-8 text-white/70">
                <p>Me ocupé de gran parte de la estructura de componentes del Front-End. Trabajar con piezas reutilizables ayudó a organizar las pantallas y mantener un criterio común mientras el producto avanzaba.</p>
                <p>En las últimas etapas retomé esos componentes y revisé el diseño general: ajusté estilos, consistencia visual y detalles de interacción para lograr una interfaz más integrada.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-3 border-t border-white/15 pt-7 sm:grid-cols-3">
              {workflow.map((step) => (
                <div data-case-reveal key={step.number} className="rounded-2xl border border-white/10 bg-white/[.045] p-5 sm:p-6">
                  <p className="font-mono text-xs font-semibold tracking-[.2em] text-violet-300">{step.number} / 03</p>
                  <h3 className="mt-6 font-heading text-xl font-bold tracking-tight sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / Aportes detallados */}
        <section data-case-section className="px-5 py-20 sm:px-10 sm:py-28" aria-labelledby="work-title">
          <div className="mx-auto max-w-7xl">
            <p data-case-reveal className={`${eyebrow} text-violet-600`}>03 / MI TRABAJO EN EL PRODUCTO</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <h2 data-case-reveal id="work-title" className={`${sectionTitle} max-w-3xl`}>De la estructura<br /><span className="text-violet-600">a la experiencia.</span></h2>
              <p data-case-reveal className="max-w-sm leading-7 text-slate-600">Cuatro áreas concretas donde participé en el desarrollo y la evolución de SignagePro.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {contributions.map((item) => (
                <article data-case-reveal key={item.id} className="group flex flex-col rounded-[24px] border border-violet-200/75 bg-white p-6 transition-colors hover:border-violet-400 sm:min-h-[330px] sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold tracking-[.2em] text-violet-500">{item.id} / 04</span>
                    <span aria-hidden="true" className="text-2xl text-violet-400 transition-transform duration-300 group-hover:rotate-45">✳</span>
                  </div>
                  <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-violet-600">{item.eyebrow}</p>
                  <h3 className="mt-3 font-heading text-[clamp(1.65rem,2.5vw,2.5rem)] font-bold leading-[1.06] tracking-[-.055em] text-[#201735]">{item.title}</h3>
                  <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
                  <p className="mt-6 border-t border-violet-100 pt-4 font-mono text-[10px] uppercase tracking-[.1em] text-violet-500 sm:mt-auto">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / Colaboración real en GitHub */}
        <section data-case-section className="border-y border-violet-200/70 bg-white px-5 py-20 sm:px-10 sm:py-28" aria-labelledby="collaboration-title">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.85fr] lg:gap-20">
              <div data-case-reveal>
                <p className={`${eyebrow} text-violet-600`}>04 / TRABAJO COLABORATIVO</p>
                <h2 id="collaboration-title" className={`mt-4 ${sectionTitle}`}>
                  El código también<br />
                  <span className="text-violet-600">se construye en equipo.</span>
                </h2>
              </div>
              <div data-case-reveal className="space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Durante los cinco meses de desarrollo trabajamos de forma colaborativa con Git y GitHub, utilizando ramas y Pull Requests para incorporar cambios al proyecto compartido.
                </p>
                <p>
                  Este flujo nos permitió integrar aportes de distintos desarrolladores, revisar modificaciones y mantener una base de código común mientras evolucionaban las interfaces.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Desarrollo por ramas",
                  description: "Trabajamos sobre cambios separados antes de integrarlos a la rama compartida del proyecto.",
                },
                {
                  number: "02",
                  title: "Pull Requests",
                  description: "Usamos PR para proponer e integrar contribuciones, manteniendo visible el trabajo realizado.",
                },
                {
                  number: "03",
                  title: "Revisión e integración",
                  description: "Coordinamos cambios y revisiones para que los componentes y pantallas evolucionaran de manera coherente.",
                },
              ].map((step) => (
                <article data-case-reveal key={step.number} className="rounded-[24px] border border-violet-200/80 bg-[#F8F9FF] p-6 sm:p-8">
                  <p className="font-mono text-xs font-semibold tracking-[.2em] text-violet-600">{step.number} / 03</p>
                  <h3 className="mt-7 font-heading text-2xl font-bold tracking-[-.045em] text-[#201735]">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
            <div data-case-reveal className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-violet-200 bg-violet-50/70 px-6 py-5">
              <p className="max-w-2xl text-sm leading-7 text-[#33285C]">
                <strong className="font-semibold">Más que compartir un repositorio:</strong> aprendí a desarrollar sobre una misma base de código, comunicar cambios y coordinar mi trabajo con el resto del equipo.
              </p>
              <a href="https://github.com/saass-Tv/SaaS-Tv-Front" target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">
                Explorar repositorio ↗
              </a>
            </div>
          </div>
        </section>

        {/* 05 / Visor */}
        <section data-case-section className="bg-[#141126] px-5 py-20 text-white sm:px-10 sm:py-28" aria-labelledby="demo-title">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-6 lg:grid-cols-2">
              <div data-case-reveal>
                <p className={`${eyebrow} text-violet-300`}>05 / EL PRODUCTO EN ACCIÓN</p>
                <h2 id="demo-title" className={`mt-4 ${sectionTitle}`}>Una mirada<br />al resultado<span className="text-violet-300">.</span></h2>
              </div>
              <p data-case-reveal className="max-w-lg leading-7 text-white/65">Una demostración real del proyecto, desde sus pantallas hasta su experiencia visual. La reproducción queda a tu elección.</p>
            </div>
            <div data-case-reveal className="mt-10 overflow-hidden rounded-[22px] border border-white/15 bg-[#070B18] shadow-[0_25px_85px_rgba(0,0,0,.3)]">
              <video controls preload="none" playsInline poster={`${basePath}/images/signagepro-cover.png`} className="aspect-video w-full bg-[#070B18] object-contain">
                <source src={`${basePath}/video/signagepro.mp4`} type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
            </div>
          </div>
        </section>

        {/* 06 / Herramientas */}
        <section data-case-section className="px-5 py-20 sm:px-10 sm:py-28" aria-labelledby="stack-title">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div data-case-reveal>
              <p className={`${eyebrow} text-violet-600`}>06 / TECNOLOGÍAS Y HERRAMIENTAS</p>
              <h2 id="stack-title" className={`mt-4 ${sectionTitle}`}>La tecnología<br /><span className="text-violet-600">detrás del trabajo.</span></h2>
              <p className="mt-6 max-w-md leading-7 text-slate-600">Herramientas utilizadas durante el desarrollo, la colaboración y el trabajo sobre el Front-End.</p>
            </div>
            <div data-case-reveal className="flex content-start flex-wrap items-start gap-3">
              {technologies.map((tech) => <span key={tech} className="rounded-full border border-violet-200 bg-white px-5 py-3 font-mono text-xs font-medium text-violet-800 sm:text-sm">{tech}</span>)}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <footer data-case-section className="border-t border-violet-200 bg-white px-5 py-16 sm:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-end">
            <div data-case-reveal>
              <p className={`${eyebrow} text-violet-600`}>FIN / CASE STUDY 001</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-.055em] sm:text-4xl">Del equipo al producto. <span className="text-violet-600">Y a lo que sigue.</span></h2>
            </div>
            <Link data-case-reveal href="/#proyectos" className="rounded-full bg-[#17182D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">Volver al portfolio ↗</Link>
          </div>
        </footer>
      </CaseStudyMotion>
    </main>
  );
}
