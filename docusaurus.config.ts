import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Aula de Desarrollo",
  tagline: "Cursos de programación y desarrollo web y multiplataformas",
  favicon: "img/favicon.ico",

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://serra-albarregas.github.io",
  baseUrl: "/cursosdesarrollo/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "serra-albarregas", // Usually your GitHub org/user name.
  projectName: "cursosdesarrollo", // Usually your repo name.

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "marcas",
        path: "docs/lenguajes-de-marcas",
        routeBasePath: "lenguajes-de-marcas",
        sidebarPath: "./sidebars/marcas.ts",
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "programacion",
        path: "docs/programacion-java",
        routeBasePath: "programacion-java",
        sidebarPath: "./sidebars/programacion.ts",
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "servidor",
        path: "docs/desarrollo-servidor",
        routeBasePath: "desarrollo-servidor",
        sidebarPath: "./sidebars/servidor.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Aula de Desarrollo",
      logo: {
        alt: "Aula de Desarrollo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Lenguajes de Marcas",
          to: "/lenguajes-de-marcas/html/introduccion",
          position: "left",
        },
        {
          label: "Programación",
          to: "/programacion-java/ut1-introduccion/elementos-basicos",
          position: "left",
        },
        {
          label: "Servidor",
          to: "/desarrollo-servidor/ut1-arquitectura-web/arquitectura-aplicaciones-web",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Cursos",
          items: [
            {
              label: "Lenguajes de Marcas",
              to: "/lenguajes-de-marcas/html/introduccion",
            },
            {
              label: "Programación",
              to: "/programacion-java/ut1-introduccion/elementos-basicos",
            },
            {
              label: "Desarrollo web en entorno servidor",
              to: "/desarrollo-servidor/ut1-arquitectura-web/arquitectura-aplicaciones-web",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Aula de Desarrollo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
