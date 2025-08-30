import { Briefcase, Code, GitBranch, Github, Linkedin, Mail, MapPin, Twitter, Users, Zap, Award, Target, TrendingUp } from "lucide-react";

export const personalData = {
  name: "Héctor Zavala",
  title: "Arquitectura & Optimización",
  summary: "Experto en soluciones escalables y arquitecturas robustas. Me apasiona crear herramientas y procesos que aporten valor y mejoren la experiencia de mis clientes. ¡Construyamos algo grandioso juntos!",
  profilePicture: "/profile.webp",
  profilePictureHint: "man smiling",
  cvUrl: "/jesus-hector-zavala-cv.pdf",
  contact: {
    email: "jhector.zavin@gmail.com",
    tel: "+52 667 525 7721",
    social: [
      { name: "GitHub", url: "https://github.com/DeviantRacoon", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jes%C3%BAs-h%C3%A9ctor-zavala-inzunza-670530259/", icon: Linkedin },
      { name: "Twitter", url: "https://x.com/", icon: Twitter },
    ],
  },
};

export const navigationLinks = [
  { label: "Estudios de Caso", href: "#case-studies" },
  { label: "Logros", href: "#achievements" },
  { label: "Sobre Mí", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const achievements = [
  {
    title: "Optimización de Solicitudes de Crédito",
    description: "Reduje el tiempo de procesamiento de horas a minutos mediante validaciones automáticas y scoring en tiempo real.",
    icon: Zap,
  },
  {
    title: "Arquitectura Escalable con Microservicios",
    description: "Implementé microservicios y WebSockets, mejorando la escalabilidad y eficiencia del sistema en CAPREPA.",
    icon: TrendingUp,
  },
  {
    title: "Automatización de Despliegues y CI/CD",
    description: "Diseñé y optimicé pipelines en GitLab, reduciendo errores en producción y acelerando despliegues.",
    icon: Target,
  },
  {
    title: "Framework Propio en TypeScript",
    description: "Desarrollé 'Techtonic Architecture', un framework backend de alto rendimiento y robustez.",
    icon: Award,
  },
];

export const caseStudies = [
  {
    title: "Techtonic Architecture",
    client: "Framework Interno",
    problem: "Se necesitaba un core de sistema que saliera rápido que tuviera las mejores practicas de desarrollo y arquitectura.",
    process: "Implementé validaciones automáticas, un sistema de scoring crediticio en tiempo real y mejoras en microservicios con WebSockets para respuesta inmediata.",
    result: "Un framework backend en TypeScript llamado 'Techtonic Architecture', que es rápido, robusto y fácil de mantener.",
    role: "Desarrollador de Software",
    stack: ["Node", "TypeScript", "MySQL", "WebSockets", "Redis", "Docker"],
    image: "/case-study/techtonic.webp",
    imageHint: "Backend code on screen",
    link: "https://github.com/DeviantRacoon/techtonics-backend",
  },
  // {
  //   title: "Clinic D",
  //   client: "App web",
  //   problem: "Se necesitaba un diario de seguimiento para un rubro de salud mental donde se pudieran detectar patrones de comportamiento.",
  //   process: "Implementé validaciones automáticas, un sistema de scoring crediticio en tiempo real y mejoras en microservicios con WebSockets para respuesta inmediata.",
  //   result: "Una app que simula ser un diario personal en donde una IA estara analizando sus patrones en base a procesos psicológicos y analizando margenes de parámetros de salud.",
  //   role: "Desarrollador de Software",
  //   stack: ["Next", "TypeScript", "MongoDB", "Ollama", "TailwindCSS", "Docker"],
  //   image: "https://picsum.photos/600/400",
  //   imageHint: "Backend code on screen",
  //   link: "https://github.com/DeviantRacoon/techtonics-backend",
  // },
  {
    title: "Prompt Zaved",
    client: "Firefox Extension",
    problem: "Necesitaba darle el mayor contexto posible de mi proyecto y instrucciones para que me ayudara.",
    process: "Desarrollé una extensión para Firefox que permite enviar el contexto de la página actual a ChatGPT, mejorando la interacción y relevancia de las respuestas.",
    result: "Una extension que permitiera manejar sus contextos de proyecto, mejorando el prompt base con Gemini IA y mejorar la interacción con ChatGPT.",
    role: "Desarrollador de Software",
    stack: ["Preact", "TypeScript", "Bootstrap", "Firebase", "GitLab CI/CD"],
    image: "/case-study/prompt-zaved.webp",
    imageHint: "extension firefox",
    link: "https://github.com/DeviantRacoon/Promt-Zaved",
  },
];

export const experience = [
  {
    role: "Desarrollador Senior",
    company: "VOICES",
    period: "2025 - Presente",
    description: "Lideré un equipo de desarrollo, diseñando la arquitectura y trabajando en optimización de infraestructura, contenedores Docker y microservicios. Capacité al equipo en CI/CD y runners en GitLab para automatizar flujos de trabajo.",
    icon: Briefcase,
  },
  {
    role: "DevOps & Desarrollador",
    company: "MAXIVALE",
    period: "2024 - 2025",
    description: "Apoyo en desarrollo y DevOps, optimización de servidores, gestión de contenedores Docker y microservicios. Capacitación en CI/CD y runners en GitLab para automatizar flujos de trabajo.",
    icon: Briefcase,
  },
  {
    role: "Desarrollador de Software",
    company: "CAPREPA",
    period: "2023 - 2024",
    description: "Implementación de arquitecturas escalables, microservicios y WebSockets. Desarrollo de módulos críticos para flujo de créditos, recuperación de cartera y reportes dinámicos con control de permisos.",
    icon: Briefcase,
  },
];

export const testimonials = [
  {
    name: "Fernando García",
    title: "Director 1",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
    image: "https://picsum.photos/100/100",
    imageHint: "man smiling",
  },
  // {
  //   name: "María Sánchez",
  //   title: "Director 2",
  //   quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
  //   image: "https://picsum.photos/100/101",
  //   imageHint: "man thinking",
  // },
  {
    name: "Juan Pérez",
    title: "Director 3",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
    image: "https://picsum.photos/100/102",
    imageHint: "woman smiling",
  },
];


export const aboutMe = {
  description: "Soy un desarrollador apasionado por crear soluciones eficientes y escalables. Mi experiencia combina backend, DevOps y administración de servidores Linux, junto con una sólida base en arquitectura de software. Busco siempre aplicar principios de diseño limpio y escalabilidad, contribuyendo a la mejora continua de los proyectos en los que participo.",
  skills: [
    { name: "React", icon: GitBranch },
    { name: "TypeScript", icon: GitBranch },
    { name: "Laravel", icon: GitBranch },
    { name: "Docker", icon: GitBranch },
    { name: "Arquitectura de Software", icon: Users },
    { name: "CI/CD (GitLab)", icon: Zap },
  ],
  location: "Culiacán, Sinaloa, MX",
  icon: MapPin,
};

export const contactInfo = {
  title: "Construyamos algo grandioso juntos.",
  description: "¿Tienes un proyecto en mente o quieres hablar sobre tecnología? Estoy abierto a colaborar en soluciones que generen impacto real. Contáctame y responderé en menos de 24 horas.",
  email: "jhector.zavin@gmail.com",
  icon: Mail,
};
