

import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Generar versión estática para GitHub Pages
  output: "export",

  // Imágenes compatibles con exportación estática
  images: {
    unoptimized: true,
  },

  // Ruta del repositorio en GitHub Pages
  basePath: isProduction ? "/portfolio" : "",

  // Rutas compatibles con hosting estático
  trailingSlash: true,

  // Ocultar indicador flotante de Next.js
  devIndicators: false,

  // Configuración de Turbopack
  turbopack: {
    // Utilizar la carpeta portfolio-2.0 como raíz
    root: __dirname,

    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
