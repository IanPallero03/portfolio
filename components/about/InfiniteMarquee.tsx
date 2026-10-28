
"use client";

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
  return (
    <section
      aria-label="Tecnologías que utilizo"
      className="marquee-section"
    >
      <div className="marquee-background" />

      <div className="marquee-row">
        <div className="marquee-track">
          {/* DUPLICAMOS PARA LOGRAR UN LOOP CONTINUO */}
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
