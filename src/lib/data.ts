import { Briefcase, Code, GitBranch, Github, Linkedin, Mail, MapPin, Twitter, Users, Zap, Award, Target, TrendingUp } from "lucide-react";

export const personalData = {
  name: "Jesús Héctor Zavala Inzunza",
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
    title: "Flujo de Solicitudes de Crédito en Tiempo Real",
    client: "CAPREPA",
    problem: "El flujo manual de solicitudes de crédito era lento y propenso a errores, generando demoras de varias horas.",
    process: "Implementé validaciones automáticas, un sistema de scoring crediticio en tiempo real y mejoras en microservicios con WebSockets para respuesta inmediata.",
    result: "Procesamiento reducido a minutos, incremento en precisión de aprobación y mejor experiencia de usuario.",
    role: "Desarrollador de Software",
    stack: ["Laravel", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
    image: "https://picsum.photos/600/400",
    imageHint: "credit approval system",
    link: "#",
  },
  {
    title: "Automatización y CI/CD en GitLab",
    client: "CAPREPA",
    problem: "Los despliegues requerían intervención manual, con riesgo de errores y tiempos de inactividad.",
    process: "Diseñé pipelines en GitLab con stages de testing, build y deploy, aplicando principios de CI/CD y pruebas unitarias automatizadas.",
    result: "Despliegues consistentes, reducción de errores en producción y mejoras en la velocidad de entrega.",
    role: "Desarrollador de Software",
    stack: ["GitLab CI/CD", "Docker", "Debian", "Laravel", "PHPUnit"],
    image: "https://picsum.photos/600/401",
    imageHint: "pipeline automation",
    link: "#",
  },
];

export const experience = [
  {
    role: "Desarrollador Senior",
    company: "VOICES",
    period: "2025 - Presente",
    description: "Apoyo en desarrollo y DevOps, optimización de servidores, gestión de contenedores Docker y microservicios. Capacitación en CI/CD y runners en GitLab para automatizar flujos de trabajo.",
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
    name: "Rodrigo Díaz",
    title: "Co-Fundador, MAXIVALE",
    quote: "Jesús es un desarrollador muy capacitado y apasionado. Entrega soluciones de alta calidad y se preocupa por la escalabilidad y el rendimiento.",
    image: "https://picsum.photos/100/100",
    imageHint: "man smiling",
  },
  {
    name: "Eduardo Hernández",
    title: "Co-Fundador, CAPREPA",
    quote: "Jesús es un excelente desarrollador. Su habilidad para crear soluciones limpias y escalables ha sido fundamental en nuestro crecimiento.",
    image: "https://picsum.photos/100/101",
    imageHint: "man thinking",
  },
  {
    name: "Ana González",
    title: "Gerente de Desarrollo, VOICES",
    quote: "Jesús es un apoyo valioso en el equipo. Su experiencia en DevOps y arquitectura de software nos ha permitido mejorar la calidad y velocidad de nuestros productos.",
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
