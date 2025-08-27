import { Briefcase, Code, GitBranch, Github, HeartHandshake, Linkedin, Mail, MapPin, Search, Twitter, Users, Zap } from "lucide-react";

export const personalData = {
  name: "Alex Doe",
  title: "I build secure and scalable platforms for fintech and logistics.",
  summary: "As a seasoned backend developer with over a decade of experience, I specialize in creating robust, high-performance systems that drive business growth. My expertise lies in architecting secure, scalable solutions for the demanding fintech and logistics sectors, ensuring reliability and efficiency from the ground up.",
  profilePicture: "https://picsum.photos/200/200",
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
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Architecture & Auditing",
    description: "In-depth analysis of your existing systems to identify bottlenecks, security vulnerabilities, and scalability issues. I provide a comprehensive report and a strategic roadmap for improvement.",
    features: ["System architecture review", "Security vulnerability assessment", "Performance bottleneck analysis", "Scalability planning"],
    icon: Search,
  },
  {
    title: "Backend Development",
    description: "End-to-end backend development, from database design to API implementation. I build secure, efficient, and scalable systems tailored to your specific business needs using modern technologies.",
    features: ["Custom API development (REST/GraphQL)", "Database design and optimization", "Microservices architecture", "Third-party service integration"],
    icon: Code,
  },
  {
    title: "Technical UX & Performance",
    description: "Optimizing the technical aspects of user experience, focusing on speed, reliability, and seamless interactions. I ensure your platform is not just functional but also fast and enjoyable to use.",
    features: ["Core Web Vitals optimization", "API response time reduction", "Database query optimization", "Infrastructure fine-tuning"],
    icon: Zap,
  },
  {
    title: "Maintenance & SLAs",
    description: "Ongoing support and maintenance to ensure your systems run smoothly and securely. I offer Service Level Agreements (SLAs) for guaranteed response times and proactive monitoring.",
    features: ["24/7 system monitoring", "Regular security patching", "Performance tuning", "Dedicated support channel"],
    icon: HeartHandshake,
  },
];

export const caseStudies = [
  {
    title: "Fintech Payment Gateway Overhaul",
    client: "PayCore Inc.",
    problem: "PayCore's legacy payment gateway was struggling with high latency (avg. 2s/transaction) and frequent downtime during peak hours, leading to a 15% transaction failure rate and significant revenue loss.",
    process: "Led the re-architecture from a monolithic PHP backend to a microservices-based system using Go and gRPC. Implemented a distributed database strategy with CockroachDB for resilience and horizontal scaling. Introduced a message queue (Kafka) to decouple services and handle transaction processing asynchronously.",
    result: "Reduced average transaction latency by 90% (to ~200ms), eliminated downtime during peaks, and cut the transaction failure rate to less than 0.1%. The new architecture supports 10x the previous transaction volume.",
    role: "Lead Backend Architect",
    stack: ["Go", "gRPC", "Kafka", "CockroachDB", "Kubernetes", "Prometheus"],
    image: "https://picsum.photos/600/400",
    imageHint: "abstract tech",
    link: "#",
  },
  {
    title: "Real-time Logistics Tracking Platform",
    client: "ShipSwift Logistics",
    problem: "ShipSwift needed a system to provide real-time tracking for over 50,000 daily shipments. Their existing batch-processing system had a data lag of up to 15 minutes, causing customer dissatisfaction.",
    process: "Designed and built a new event-driven platform using Elixir and Phoenix LiveView for real-time updates. Utilized WebSockets for efficient client-server communication. Integrated with multiple third-party GPS and IoT data providers, normalizing data streams into a unified format.",
    result: "Achieved sub-second tracking data latency. The platform now handles over 1 million tracking updates per hour and has improved customer satisfaction scores by 40%. Operational costs were reduced by 25% due to more efficient routing.",
    role: "Senior Backend Engineer",
    stack: ["Elixir", "Phoenix LiveView", "PostgreSQL", "RabbitMQ", "Docker"],
    image: "https://picsum.photos/600/401",
    imageHint: "logistics map",
    link: "#",
  },
];

export const experience = [
  {
    role: "Lead Backend Architect",
    company: "PayCore Inc.",
    period: "2020 - Present",
    description: "Spearheaded the complete overhaul of the payment processing platform, leading to a 10x increase in transaction capacity and a 90% reduction in latency. Mentored a team of 8 backend engineers.",
    icon: Briefcase,
  },
  {
    role: "Senior Backend Engineer",
    company: "ShipSwift Logistics",
    period: "2017 - 2020",
    description: "Developed the core real-time tracking system, improving data latency from 15 minutes to under a second. Optimized database queries, reducing server load by 60%.",
    icon: Briefcase,
  },
  {
    role: "Software Engineer",
    company: "Innovate Solutions",
    period: "2014 - 2017",
    description: "Contributed to various client projects, primarily focusing on building RESTful APIs and integrating third-party services for early-stage startups.",
    icon: Briefcase,
  },
];

export const testimonials = [
  {
    quote: "Alex is a world-class engineer. His ability to dissect complex problems and deliver elegant, scalable solutions is unparalleled. He transformed our entire infrastructure, and the results speak for themselves.",
    name: "Jane Smith",
    title: "CTO, PayCore Inc.",
    image: "https://picsum.photos/100/100",
    imageHint: "professional woman",
  },
  {
    quote: "Working with Alex was a game-changer. He not only delivered a rock-solid technical solution but also provided invaluable strategic insights that helped shape our product roadmap. A true professional.",
    name: "John Davis",
    title: "Head of Product, ShipSwift Logistics",
    image: "https://picsum.photos/100/101",
    imageHint: "professional man",
  },
  {
    quote: "I've rarely seen a developer with such a deep understanding of both the technical and business aspects of a project. Alex's contributions were critical to our success.",
    name: "Emily White",
    title: "CEO, Innovate Solutions",
    image: "https://picsum.photos/100/102",
    imageHint: "professional ceo",
  },
];

export const aboutMe = {
  description: "I'm a pragmatic engineer driven by a passion for solving complex puzzles. My approach is rooted in a deep understanding of computer science fundamentals, combined with a decade of hands-on experience in the fast-paced worlds of fintech and logistics. I believe in building not just for today's needs, but for tomorrow's scale. Outside of coding, I'm an avid hiker and a voracious reader of sci-fi.",
  skills: [
    { name: "Go", icon: GitBranch },
    { name: "Elixir", icon: GitBranch },
    { name: "PostgreSQL", icon: GitBranch },
    { name: "Kubernetes", icon: GitBranch },
    { name: "System Design", icon: Users },
    { name: "Cloud Architecture (GCP/AWS)", icon: Zap },
  ],
  location: "San Francisco, CA (PST)",
  icon: MapPin,
};

export const contactInfo = {
  title: "Let's build something great together.",
  description: "Have a project in mind, or just want to chat about technology? I'm always open to connecting with like-minded people. Fill out the form, and I'll get back to you within 24 hours.",
  email: "hello@alexdoe.com",
  icon: Mail,
};
