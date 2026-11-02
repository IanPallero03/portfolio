
"use client";

import { useEffect, useRef, useState } from "react";
import "./InfiniteMarquee.css";

const technologies = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "TAILWIND CSS",
  "GIT",
  "GITHUB",
  "GSAP",
];

export default function InfiniteMarquee() {
  const marqueeRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = marqueeRef.current;

    if (!element) return;

    // El carrusel solo se anima cuando está visible.
    // No necesitamos GSAP ni eventos de scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={marqueeRef}
      aria-label="Tecnologías que utilizo"
      className={`marquee-section ${
        isVisible ? "marquee-visible" : ""
      }`}
    >
      <div className="marquee-background" />

      <div className="marquee-row">
        <div className="marquee-track">
          {/* DOS COPIAS PARA EL LOOP CONTINUO */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-group"
              aria-hidden={copy === 1}
            >
              {technologies.map((technology, index) => (
                <div
                  key={`${copy}-${technology}`}
                  className="marquee-item"
                >
                  <span
                    className={`marquee-word ${
                      index % 2 === 0
                        ? ""
                        : "marquee-outline"
                    }`}
                  >
                    {technology}
                  </span>

                  <span
                    className="marquee-symbol"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
