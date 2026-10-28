
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Generar una versión estática para GitHub Pages
  output: "export",

  // Necesario para exportar imágenes sin optimización del servidor
  images: {
    unoptimized: true,
  },

  // Ruta del repositorio en GitHub Pages
  basePath: isProduction ? "/portfolio-2.0" : "",

  // Mantener las rutas compatibles con hosting estático
  trailingSlash: true,

  // Configuración de Turbopack
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
