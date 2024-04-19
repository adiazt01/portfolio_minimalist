import { AgoraWeb, ShortBuddy, UniversityWeb } from "../assets/projects";

export const PROJECTS = [
  {
    id: 1,
    name: "ShortBuddy",
    description:
      "Plataforma que permite acortar enlaces,basado en un Design System y con funcionalidades de autenticacion y almacenamiento de enlaces.",
    url: "https://short-url-app-kappa.vercel.app/",
    github: "https://github.com/adiazt01/short_url_app",
    techStack: ["Next.js", "TailwindCSS", "PostgreSQL, Vercel"],
    page: {
      title: "ShortBuddy",
      description:
        "Aplicacion web que permite el acortamiento de enlaces de manera sencilla, rapida y eficaz, basado en un Design System basandose principalmente en la escalabilidad y mantenibilidad del proyecto, ademas de contar con funcionalidades de autenticacion y almacenamiento de enlaces.",
      img: ShortBuddy,
      url: "https://short-url-app-kappa.vercel.app/",
      github: "https://github.com/adiazt01/short_url_app",
      techStack: ["Next.js", "TailwindCSS", "PostgreSQL", "Vercel"],
    },
  },
  {
    id: 2,
    name: "AgoraWeb",
    description:
      "Landing page para un empresa de desarrollo de software, con un diseño minimalista y funcionalidades de contacto, multipagina y responsive.",
    url: "https://adiazt01.github.io/argo-webpage/",
    github: "https://github.com/adiazt01/argo-webpage",
    techStack: ["React", "HTML/CSS", "JavaScript", "TailwindCSS", "EmailJS"],
    page: {
      title: "AgoraWeb",
      description:
        "Landing page para un empresa de desarrollo de software que consistio como prueba tecnica, con un diseño minimalista y funcionalidades de contacto, multipagina y responsive. Internamente se implemento un CI/CD con GitHub Actions y GitHub Pages, ademas de un sistema de envio de correos electronicos con EmailJS.",
      img: AgoraWeb,
      url: "https://adiazt01.github.io/argo-webpage/",
      github: "https://github.com/adiazt01/short_url_app",
      techStack: ["React", "HTML/CSS", "JavaScript", "TailwindCSS", "EmailJS"],
    },
  },
  {
    id: 3,
    name: "UniversityWeb",
    description:
      "Landing page para una universidad ficticia, con un diseño minimalista basado en figma, contando con responsive design y funcionalidades de contacto.",
    url: "https://adiazt01.github.io/university_land/",
    github: "https://github.com/adiazt01/university_land",
    techStack: ["HTML/CSS", "JavaScript", "Boostrap"],
    page: {
      title: "UniversityWeb",
      description:
        "Landing page para una universidad ficticia, con un diseño minimalista basado en figma, contando con responsive design y funcionalidades de contacto.",
      img: UniversityWeb,
      url: "https://adiazt01.github.io/university_land/",
      github: "https://github.com/adiazt01/university_land",
      techStack: ["HTML/CSS", "JavaScript", "Boostrap"],
    },
  },
];
