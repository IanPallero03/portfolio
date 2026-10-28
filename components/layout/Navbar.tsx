
"use client";

import { useEffect, useState } from "react";


const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/60 bg-white/75 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-heading text-3xl font-bold tracking-tight text-foreground"
        >
          IP<span className="text-primary">.</span>
        </a>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contacto desktop */}
        <a
          href="#contacto"
          className="hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg lg:inline-flex"
        >
          Contacto ↗
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white/80 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-navigation"
        inert={!menuOpen}
        className={`absolute top-20 left-0 w-full overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[500px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-violet-50 hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-full bg-foreground px-6 py-4 text-center font-medium text-white"
          >
            Contactarme ↗
          </a>
        </div>
      </div>
    </header>
  );
}
