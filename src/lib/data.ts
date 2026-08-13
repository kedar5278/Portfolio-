export const personalInfo = {
  name: "Kedar Thakar",
  title: "Web Developer & Digital Marketer",
  subtitle: "Building Digital Experiences & Driving Brand Growth",
  email: "kedarthakar5278@gmail.com",
  phone: "+91 9662955278",
  location: "Jamnagar, Gujarat, India",
  dob: "22 May 2002",
  tagline: "Hardworking. Self-Motivated. Results-Driven.",
  about: `I'm a Computer Engineering student at Government Polytechnic Jamnagar with a passion for web development and digital marketing. I build modern, responsive websites using React, Next.js, and Tailwind CSS while also managing marketing strategy for Airavat Security Service. I love turning ideas into functional, beautiful digital products.`,
  aboutExtended: `From building tourism platforms and corporate websites to managing end-to-end marketing campaigns — I sit at the intersection of technology and creativity. Currently pursuing my Diploma in Computer Engineering while working on real-world projects that combine my development skills with marketing expertise. I believe in learning by building, and every project teaches me something new.`,
  resumeUrl: "#",
};

export const socialLinks = {
  email: "mailto:kedarthakar5278@gmail.com",
  phone: "tel:+919662955278",
  linkedin: "https://linkedin.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
};

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Languages / Programming
  { name: "HTML5", level: 95, category: "Languages", icon: "html5" },
  { name: "CSS3", level: 92, category: "Languages", icon: "css3" },
  { name: "JavaScript", level: 88, category: "Languages", icon: "javascript" },
  { name: "TypeScript", level: 80, category: "Languages", icon: "typescript" },
  { name: "Python", level: 82, category: "Languages", icon: "python" },
  // Frameworks & Libraries
  { name: "React JS", level: 87, category: "Frameworks", icon: "react" },
  { name: "Next.js", level: 85, category: "Frameworks", icon: "nextjs" },
  { name: "Tailwind CSS", level: 90, category: "Frameworks", icon: "tailwindcss" },
  { name: "Node.js", level: 75, category: "Frameworks", icon: "nodejs" },
  // Tools & Platforms
  { name: "Git & GitHub", level: 85, category: "Tools", icon: "git" },
  { name: "VS Code", level: 92, category: "Tools", icon: "vscode" },
  { name: "Figma", level: 78, category: "Tools", icon: "figma" },
  { name: "Vercel", level: 82, category: "Tools", icon: "vercel" },
  { name: "npm / yarn", level: 84, category: "Tools", icon: "npm" },
];

export const experiences = [
  {
    id: 1,
    role: "Marketing Manager & Web Developer",
    company: "Airavat Security Service",
    companyUrl: "https://www.airavatsecurity.in",
    location: "Jamnagar, Gujarat",
    period: "2024 — Present",
    description: "Managing marketing operations and building digital solutions for a Gujarat-wide security provider founded by ex-servicemen of the Indian Army. Combining development skills with marketing strategy.",
    achievements: [
      "Managed and contributed to the official website — airavatsecurity.in",
      "Developed and executed marketing strategies across Gujarat's 33 districts",
      "Built the brand's digital identity from scratch with modern web presence",
      "Created campaigns for 50+ corporate clients including Emerald Club, Topland, Yash Group",
      "Drove lead generation across institutional and corporate security segments",
      "Orchestrated event marketing for security expos and corporate presentations",
    ],
    tags: ["Next.js", "Digital Marketing", "Brand Strategy", "Web Development", "Lead Gen"],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    companyUrl: "#",
    location: "Jamnagar, Gujarat",
    period: "2023 — Present",
    description: "Building web projects and learning modern frameworks while pursuing Diploma in Computer Engineering. Developed multiple live projects including a travel booking platform.",
    achievements: [
      "Built TourSpot — a full-featured travel booking platform with Next.js",
      "Developed responsive, modern UIs with React, Tailwind CSS, and TypeScript",
      "Deployed projects on Vercel with production-grade performance",
      "Continuously learning new technologies and frameworks",
    ],
    tags: ["React JS", "Next.js", "TypeScript", "Tailwind CSS", "Python"],
  },
];

export const education = [
  {
    degree: "Diploma — Computer Engineering",
    institution: "Government Polytechnic, Jamnagar",
    type: "Full-Time | Currently Pursuing",
    period: "2023 — 2026",
    highlights: ["Programming Fundamentals", "Data Structures & Algorithms", "Web Development", "Database Management", "Computer Networks"],
    icon: "code",
  },
];

export interface Project {
  id: number;
  title: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TourSpot",
    url: "https://tourspot.vercel.app/",
    description: "Explore India with curated travel packages — a full-stack travel booking platform featuring destination browsing, package search, service booking, user reviews, and booking history.",
    category: "Web App",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    featured: true,
  },
  {
    id: 2,
    title: "Airavat Security Service",
    url: "https://www.airavatsecurity.in",
    description: "Professional website for Gujarat's premier security solutions provider founded by ex-Indian Army personnel. Features service listings, client portfolio, and corporate branding across 33 districts.",
    category: "Corporate",
    tags: ["Next.js", "Web Design", "Brand Identity", "Marketing"],
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    url: "#",
    description: "This very portfolio — a modern, animated developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Featuring particle effects, glassmorphism, and smooth scroll animations.",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
];

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Clients Managed", value: 50, suffix: "+" },
  { label: "Districts Covered", value: 33, suffix: "" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
