import { Briefcase, Code, GitBranch, Github, Linkedin, Mail, MapPin, Twitter, Users, Zap, Award, Target, TrendingUp } from "lucide-react";

export const personalData = {
  name: "Alex Doe",
  title: "Desarrollador Backend.",
  summary: "Como un experimentado desarrollador backend con más de una década de experiencia, me especializo en crear sistemas robustos y de alto rendimiento que impulsan el crecimiento empresarial. Mi experiencia radica en la arquitectura de soluciones seguras y escalables para los exigentes sectores de fintech y logística, garantizando la fiabilidad y eficiencia desde cero.",
  profilePicture: "/profile.webp",
  profilePictureHint: "man smiling",
  cvUrl: "/alex-doe-cv.pdf",
  contact: {
    email: "hello@alexdoe.com",
    tel: "+1 123 456 7890",
    social: [
      { name: "GitHub", url: "https://github.com", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin },
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
    title: "Reducción de Latencia del 90%",
    description: "Reduje la latencia de transacciones en un 90% (de 2s a 200ms) para una pasarela de pago, mejorando la experiencia del usuario.",
    icon: Zap,
  },
  {
    title: "Aumento de Capacidad de 10x",
    description: "Lideré la re-arquitectura de un sistema monolítico a microservicios, aumentando la capacidad de procesamiento de transacciones en 10 veces.",
    icon: TrendingUp,
  },
  {
    title: "Tasa de Fallo de Transacción <0.1%",
    description: "Disminuí la tasa de fallo en transacciones de un 15% a menos del 0.1%, aumentando significativamente los ingresos.",
    icon: Target,
  },
  {
    title: "Premio al Innovador del Año",
    description: "Recibí el premio 'Innovador del Año' de PayCore Inc. por mi trabajo en la plataforma de pagos de próxima generación.",
    icon: Award,
  },
];

export const caseStudies = [
  {
    title: "Revisión de Pasarela de Pagos Fintech",
    client: "PayCore Inc.",
    problem: "La pasarela de pago heredada de PayCore tenía problemas con alta latencia (promedio de 2s/transacción) y tiempo de inactividad frecuente durante las horas pico, lo que llevaba a una tasa de fallo de transacción del 15% y una pérdida significativa de ingresos.",
    process: "Lideré la re-arquitectura de un backend monolítico en PHP a un sistema basado en microservicios usando Go y gRPC. Implementé una estrategia de base de datos distribuida con CockroachDB para resiliencia y escalado horizontal. Introduje una cola de mensajes (Kafka) para desacoplar servicios y manejar el procesamiento de transacciones de forma asíncrona.",
    result: "Reducción de la latencia promedio de transacción en un 90% (a ~200ms), eliminación del tiempo de inactividad durante los picos y reducción de la tasa de fallo de transacción a menos del 0.1%. La nueva arquitectura soporta 10 veces el volumen de transacciones anterior.",
    role: "Arquitecto Backend Principal",
    stack: ["Go", "gRPC", "Kafka", "CockroachDB", "Kubernetes", "Prometheus"],
    image: "https://picsum.photos/600/400",
    imageHint: "abstract tech",
    link: "#",
  },
  {
    title: "Plataforma de Seguimiento Logístico en Tiempo Real",
    client: "ShipSwift Logistics",
    problem: "ShipSwift necesitaba un sistema para proporcionar seguimiento en tiempo real para más de 50,000 envíos diarios. Su sistema de procesamiento por lotes existente tenía un retraso de datos de hasta 15 minutos, causando insatisfacción en el cliente.",
    process: "Diseñé y construí una nueva plataforma orientada a eventos usando Elixir y Phoenix LiveView para actualizaciones en tiempo real. Utilicé WebSockets para una comunicación eficiente cliente-servidor. Integré con múltiples proveedores de datos GPS e IoT de terceros, normalizando los flujos de datos en un formato unificado.",
    result: "Se logró una latencia de datos de seguimiento inferior a un segundo. La plataforma ahora maneja más de 1 millón de actualizaciones de seguimiento por hora y ha mejorado los puntajes de satisfacción del cliente en un 40%. Los costos operativos se redujeron en un 25% debido a un enrutamiento más eficiente.",
    role: "Ingeniero Backend Senior",
    stack: ["Elixir", "Phoenix LiveView", "PostgreSQL", "RabbitMQ", "Docker"],
    image: "https://picsum.photos/600/401",
    imageHint: "logistics map",
    link: "#",
  },
];

export const experience = [
  {
    role: "Arquitecto Backend Principal",
    company: "PayCore Inc.",
    period: "2020 - Presente",
    description: "Lideré la revisión completa de la plataforma de procesamiento de pagos, lo que llevó a un aumento de 10x en la capacidad de transacciones y una reducción del 90% en la latencia. Supervisé a un equipo de 8 ingenieros backend.",
    icon: Briefcase,
  },
  {
    role: "Ingeniero Backend Senior",
    company: "ShipSwift Logistics",
    period: "2017 - 2020",
    description: "Desarrollé el sistema central de seguimiento en tiempo real, mejorando la latencia de los datos de 15 minutos a menos de un segundo. Optimicé las consultas de la base de datos, reduciendo la carga del servidor en un 60%.",
    icon: Briefcase,
  },
  {
    role: "Ingeniero de Software",
    company: "Innovate Solutions",
    period: "2014 - 2017",
    description: "Contribuí a varios proyectos de clientes, centrándome principalmente en la creación de API RESTful y la integración de servicios de terceros para startups en etapa inicial.",
    icon: Briefcase,
  },
];

export const testimonials = [
  {
    quote: "Alex es un ingeniero de clase mundial. Su capacidad para analizar problemas complejos y ofrecer soluciones elegantes y escalables es inigualable. Transformó toda nuestra infraestructura, y los resultados hablan por sí mismos.",
    name: "Jane Smith",
    title: "CTO, PayCore Inc.",
    image: "https://picsum.photos/100/100",
    imageHint: "professional woman",
  },
  {
    quote: "Trabajar con Alex fue un cambio de juego. No solo entregó una solución técnica sólida, sino que también proporcionó información estratégica invaluable que ayudó a dar forma a nuestra hoja de ruta del producto. Un verdadero profesional.",
    name: "John Davis",
    title: "Jefe de Producto, ShipSwift Logistics",
    image: "https://picsum.photos/100/101",
    imageHint: "professional man",
  },
  {
    quote: "Rara vez he visto a un desarrollador con un entendimiento tan profundo de los aspectos técnicos y de negocio de un proyecto. Las contribuciones de Alex fueron críticas para nuestro éxito.",
    name: "Emily White",
    title: "CEO, Innovate Solutions",
    image: "https://picsum.photos/100/102",
    imageHint: "professional ceo",
  },
];

export const aboutMe = {
  description: "Soy un ingeniero pragmático impulsado por la pasión de resolver acertijos complejos. Mi enfoque se basa en un profundo conocimiento de los fundamentos de la informática, combinado con una década de experiencia práctica en los vertiginosos mundos de la tecnología financiera y la logística. Creo en construir no solo para las necesidades de hoy, sino para la escala del mañana. Fuera de la codificación, soy un ávido excursionista y un voraz lector de ciencia ficción.",
  skills: [
    { name: "Go", icon: GitBranch },
    { name: "Elixir", icon: GitBranch },
    { name: "PostgreSQL", icon: GitBranch },
    { name: "Kubernetes", icon: GitBranch },
    { name: "Diseño de Sistemas", icon: Users },
    { name: "Arquitectura en la Nube (GCP/AWS)", icon: Zap },
  ],
  location: "San Francisco, CA (PST)",
  icon: MapPin,
};

export const contactInfo = {
  title: "Construyamos algo grandioso juntos.",
  description: "Tienes un proyecto en mente o simplemente quieres charlar sobre tecnología? Siempre estoy abierto a conectar con personas afines. Rellena el formulario y te responderé en 24 horas.",
  email: "hello@alexdoe.com",
  icon: Mail,
};
