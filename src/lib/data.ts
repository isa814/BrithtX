export const siteConfig = {
  name: "Brithton",
  logoText: "BrithtonX",
  title: "Full-Stack Web Developer | SaaS Builder | Web3 & E-Commerce Specialist | Graphic Designer",
  shortTitle: "Full-Stack Developer & Designer",
  tagline: "Building scalable SaaS, modern web platforms & high-converting e-commerce systems",
  bio: "I am a full-stack web developer and graphic designer specializing in building scalable SaaS applications, modern web platforms, and high-converting e-commerce systems. I work with React, Node.js, MongoDB, Shopify, and Wix to create fast, responsive, and production-ready digital products.",
  email: "josephtimileyin001@gmail.com",
  location: "Available Worldwide",
  social: {
    github: "https://github.com/isa814",
    linkedin: "https://linkedin.com/in/joseph-britht%C3%B5n-385383362",
    twitter: "https://x.com/brithton_web",
  },
};

export const aboutData = {
  story:
    "Full-stack developer and graphic designer building scalable SaaS apps, e-commerce stores, and modern web platforms with React, Node.js, MongoDB, Shopify & Wix. I combine clean code with compelling design to create products that convert and explore Web3 to build solutions that are business-focused and monetizable.",
  highlights: [
    { label: "Projects Built", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Tech Stacks", value: "10+" },
    { label: "Expertise Areas", value: "7+" },
  ],
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React (Vite / Next.js)", level: 92 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "UI/UX Design", level: 88 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB / Mongoose", level: 87 },
      { name: "REST API Design", level: 92 },
      { name: "Authentication Systems", level: 85 },
    ],
  },
  {
    category: "Platforms",
    icon: "database",
    skills: [
      { name: "Shopify Development", level: 88 },
      { name: "Wix Development", level: 85 },
      { name: "WordPress", level: 75 },
      { name: "MongoDB Atlas", level: 86 },
    ],
  },
  {
    category: "Tools & Advanced",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Graphic Design", level: 90 },
      { name: "Web3 / Blockchain", level: 72 },
      { name: "SaaS Architecture", level: 85 },
      { name: "Postman / API Testing", level: 88 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "webapp" | "saas" | "ecommerce" | "web3";
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "SaaS Admin Dashboard",
    description:
      "A full-featured admin dashboard for SaaS platforms with analytics, user management, and role-based access control.",
    longDescription:
      "Built a comprehensive admin panel with real-time data visualization, multi-tenant architecture, and secure authentication flows.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    category: "saas",
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Storefront",
    description:
      "High-converting Shopify-based e-commerce store with custom theme, product filtering, and optimized checkout.",
    longDescription:
      "Designed and developed a conversion-focused online store with custom branding, marketing integrations, and inventory management.",
    techStack: ["Shopify", "Liquid", "JavaScript", "CSS", "Figma"],
    category: "ecommerce",
    image:
      "https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: true,
  },
  {
    id: "3",
    title: "Web3 Token Explorer",
    description:
      "Blockchain token explorer with wallet integration, transaction history, and real-time price tracking.",
    longDescription:
      "An experimental Web3 application exploring blockchain data visualization and wallet connectivity.",
    techStack: ["Next.js", "Ethers.js", "Tailwind", "Web3", "API"],
    category: "web3",
    image:
      "https://images.pexels.com/photos/8284721/pexels-photo-8284721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: true,
  },
  {
    id: "4",
    title: "Freelance Marketplace MVP",
    description:
      "A marketplace platform connecting freelancers with clients, featuring profiles, job postings, and messaging.",
    longDescription:
      "Built a full marketplace concept with user authentication, real-time messaging, and payment-ready architecture.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    category: "saas",
    image:
      "https://images.pexels.com/photos/30530407/pexels-photo-30530407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: false,
  },
  {
    id: "5",
    title: "Portfolio & Landing Pages",
    description:
      "Collection of conversion-focused landing pages and portfolio websites with modern UI and smooth animations.",
    longDescription:
      "Designed and built multiple high-quality portfolio and landing page templates with responsive design and SEO optimization.",
    techStack: ["React", "Tailwind", "Framer Motion", "Vite", "Figma"],
    category: "webapp",
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: false,
  },
  {
    id: "6",
    title: "Marketing Automation System",
    description:
      "Web-based marketing and automation tool with campaign management, analytics, and lead capture features.",
    longDescription:
      "Developed a marketing-driven web system integrating automation workflows, email triggers, and conversion tracking.",
    techStack: ["Next.js", "Node.js", "MongoDB", "API", "Tailwind"],
    category: "webapp",
    image:
      "https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/isa814",
    featured: false,
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  imageSource: string;
  tags: string[];
  features: string[];
};

export const servicesData: Service[] = [
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development from MVP to scale — startup-style apps built for growth and monetization.",
    icon: "rocket",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Laptop showing a SaaS analytics dashboard",
    imageSource: "https://unsplash.com/photos/person-using-macbook-pro-744oGeqpxPQ",
    tags: ["MVP", "Dashboard", "Billing"],
    features: [
      "MVP & Prototype Development",
      "Authentication & User Management",
      "Admin Dashboards & Analytics",
      "Subscription & Billing Systems",
    ],
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom online stores and marketplace platforms built on Shopify, Wix, or custom stacks — designed to convert.",
    icon: "shopping-cart",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Laptop displaying an e-commerce storefront",
    imageSource: "https://unsplash.com/photos/a-tablet-and-a-laptop-6Pa7l0unTAY",
    tags: ["Shopify", "Wix", "Checkout"],
    features: [
      "Shopify Custom Stores",
      "Wix Website Development",
      "Product & Inventory Management",
      "Payment & Checkout Integration",
    ],
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Visually compelling branding, UI designs, marketing creatives, and digital assets that boost engagement.",
    icon: "palette",
    image:
      "https://images.unsplash.com/photo-1690733546551-1007bc0a3414?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Brand moodboard with photos, fabric, color samples, and scissors",
    imageSource:
      "https://unsplash.com/photos/a-bunch-of-pictures-and-a-pair-of-scissors-on-a-table-HszbGgaGjOg",
    tags: ["Branding", "UI/UX", "Creatives"],
    features: [
      "Brand Identity Design",
      "UI/UX Design & Prototyping",
      "Marketing Creatives & Banners",
      "Social Media Graphics",
    ],
  },
  {
    title: "Web App Development",
    description:
      "Custom web applications with clean architecture, responsive design, and business-focused functionality.",
    icon: "globe",
    image:
      "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Developer working on a web application in a code editor",
    imageSource: "https://unsplash.com/photos/developer-typing-code-on-a-laptop-screen-xaWYIbNIOdw",
    tags: ["Next.js", "API", "Web3"],
    features: [
      "React / Next.js Applications",
      "Backend API Development",
      "Conversion-Focused Landing Pages",
      "Web3 & Blockchain Integration",
    ],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  type: "work" | "freelance";
};

export const experienceData: Experience[] = [
  {
    title: "Full-Stack Developer & Designer",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    description:
      "Building scalable SaaS applications, e-commerce stores, and modern web platforms for clients worldwide.",
    achievements: [
      "Developed multiple SaaS MVPs with React, Node.js & MongoDB",
      "Built high-converting Shopify & Wix e-commerce stores",
      "Created branding & graphic design assets for startups",
      "Exploring Web3 technologies & blockchain-based systems",
    ],
    type: "freelance",
  },
  {
    title: "Frontend Developer",
    company: "Agency & Contract Work",
    period: "2022 — 2023",
    description:
      "Built responsive web applications and landing pages for agencies and small businesses.",
    achievements: [
      "Delivered 20+ client websites with modern React stack",
      "Implemented conversion-focused UI/UX designs",
      "Integrated payment systems and third-party APIs",
    ],
    type: "work",
  },
  {
    title: "Web Developer & Graphic Designer",
    company: "Self-Taught Journey",
    period: "2021 — 2022",
    description:
      "Started building web projects and mastering graphic design tools while learning full-stack development.",
    achievements: [
      "Mastered React, Node.js, and MongoDB ecosystem",
      "Built portfolio of web apps and design projects",
      "Developed strong graphic design & branding skills",
    ],
    type: "work",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
};

export const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    company: "LaunchPad Co.",
    content:
      "Brithton delivered an exceptional SaaS dashboard that exceeded our expectations. His ability to combine clean code with stunning design made our product launch a success. Highly recommend!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "E-Commerce Owner",
    company: "StyleVault",
    content:
      "Working with Brithton was a game-changer for our online store. He built a beautiful Shopify storefront that increased our conversion rate significantly. A true professional.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "DesignLab Studio",
    content:
      "Brithton has an incredible ability to transform concepts into pixel-perfect designs and functional web applications. His dual skills in development and graphic design are truly impressive.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Okonkwo",
    role: "Product Manager",
    company: "TechBridge",
    content:
      "Brithton's expertise in full-stack development and his business-focused approach set him apart. He built our entire platform with monetization in mind from day one.",
    rating: 5,
    avatar: "DO",
  },
];

export const categoryLabels: Record<string, string> = {
  all: "All Projects",
  webapp: "Web Apps",
  saas: "SaaS",
  ecommerce: "E-Commerce",
  web3: "Web3",
};
