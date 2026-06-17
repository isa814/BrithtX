import {
  AppWindow,
  Boxes,
  Brush,
  ChartNoAxesCombined,
  Code2,
  Hexagon,
  type LucideIcon,
} from "lucide-react";

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  timeline: string;
  priceLabel: string;
  requestType: string;
  featured?: boolean;
};

export type PortfolioSubcategory = {
  id: string;
  title: string;
  description: string;
  projects: PortfolioProject[];
};

export type PortfolioCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  subcategories: PortfolioSubcategory[];
};

export type PortfolioItem = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project: PortfolioProject;
};

export type ShowcaseCategory =
  | "Logo Design"
  | "Flyer Design"
  | "Social Media Design"
  | "Brand Identity"
  | "Portfolio Websites"
  | "Business Websites"
  | "Shopify Stores"
  | "Wix Websites"
  | "SaaS Websites";

export type ShowcaseWork = {
  id: string;
  title: string;
  discipline: "Graphic Design" | "Website Design";
  category: ShowcaseCategory;
  tools: string[];
  image: string;
};

const images = {
  design:
    "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  brand:
    "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  flyerOne:
    "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1500",
  flyerTwo:
    "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1500",
  flyerThree:
    "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1500",
  social:
    "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  website:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  ecommerce:
    "https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  app:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  dashboard:
    "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  templates:
    "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  marketing:
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  automation:
    "https://images.pexels.com/photos/7567559/pexels-photo-7567559.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  web3:
    "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
  crypto:
    "https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
};

const project = (
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[],
  timeline: string,
  priceLabel: string,
  requestType: string,
  featured = false
): PortfolioProject => ({
  id,
  title,
  description,
  image,
  tags,
  timeline,
  priceLabel,
  requestType,
  featured,
});

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Premium visuals for brands that need to look sharp across socials, launch assets, and sales campaigns.",
    icon: Brush,
    accent: "from-fuchsia-400 to-cyan-300",
    subcategories: [
      {
        id: "logo-design",
        title: "Logo Design",
        description:
          "Sharp logo systems with icon marks, wordmarks, color options, and usage-ready files.",
        projects: [
          project(
            "logo-xnova",
            "Xnova Tech Mark",
            "A neon-ready tech logo concept built around precision, speed, and premium contrast.",
            images.brand,
            ["Logo", "Tech", "Vector"],
            "2-4 days",
            "From $90",
            "Logo design",
            true
          ),
          project(
            "logo-velvet",
            "Velvet Studio Wordmark",
            "A refined wordmark direction for creative businesses that need a luxury digital feel.",
            images.design,
            ["Wordmark", "Luxury", "Brand"],
            "3-5 days",
            "From $120",
            "Premium logo design"
          ),
        ],
      },
      {
        id: "flyer-design",
        title: "Flyer Design",
        description:
          "High-impact digital flyers for launches, events, promos, and social campaigns.",
        projects: [
          project(
            "flyer-neon-launch",
            "Neon Product Launch Flyer",
            "A bold purple-blue launch flyer with premium lighting and a strong conversion CTA.",
            images.flyerOne,
            ["Launch", "Promo", "Neon"],
            "24-48 hours",
            "From $45",
            "Flyer design",
            true
          ),
          project(
            "flyer-night-event",
            "Night Event Flyer",
            "A cinematic event flyer with dark glass panels, glowing typography, and social sizing.",
            images.flyerTwo,
            ["Event", "Poster", "Social"],
            "2-3 days",
            "From $60",
            "Event flyer design"
          ),
          project(
            "flyer-brand-campaign",
            "Brand Campaign Flyer",
            "A clean campaign flyer system made for offers, product drops, and paid ads.",
            images.flyerThree,
            ["Campaign", "Ads", "Brand"],
            "3 days",
            "From $75",
            "Campaign flyer design"
          ),
        ],
      },
      {
        id: "social-media",
        title: "Social Media Design",
        description:
          "Scroll-stopping post systems, ads, banners, story sets, and content templates.",
        projects: [
          project(
            "social-growth",
            "Growth Campaign Pack",
            "A 20-piece campaign kit for product launches and weekly promotions.",
            images.social,
            ["Ads", "Instagram", "Launch"],
            "3-5 days",
            "From $120",
            "Social media creative pack"
          ),
          project(
            "social-founder",
            "Founder Content System",
            "Reusable templates for quotes, proof posts, and offer announcements.",
            images.templates,
            ["Templates", "Creator", "Content"],
            "4 days",
            "From $150",
            "Founder social media system"
          ),
        ],
      },
      {
        id: "brand-identity",
        title: "Brand Identity",
        description:
          "Logos, color systems, typography direction, launch kits, and brand guide assets.",
        projects: [
          project(
            "brand-orbit",
            "Orbit Studio Brand Kit",
            "A futuristic identity system for a creator-first digital studio.",
            images.brand,
            ["Logo", "Brand Guide", "Social Kit"],
            "5-7 days",
            "From $180",
            "Brand identity design"
          ),
          project(
            "brand-neon-commerce",
            "Neon Commerce Identity",
            "High-contrast visual system for a premium online storefront.",
            images.design,
            ["E-commerce", "Packaging", "Launch"],
            "1 week",
            "From $220",
            "Commerce brand identity"
          ),
        ],
      },
    ],
  },
  {
    id: "website-design",
    title: "Website Design",
    description:
      "Conversion-focused websites with polished UI, fast loading, and mobile-first presentation.",
    icon: AppWindow,
    accent: "from-sky-300 to-violet-400",
    subcategories: [
      {
        id: "landing-pages",
        title: "Landing Pages",
        description:
          "Single-page experiences for offers, campaigns, waitlists, and product launches.",
        projects: [
          project(
            "landing-saas",
            "SaaS Waitlist Page",
            "A premium landing page with social proof, feature blocks, and lead capture.",
            images.website,
            ["Next.js", "Framer Motion", "SEO"],
            "4-6 days",
            "From $250",
            "Landing page build",
            true
          ),
          project(
            "landing-agency",
            "Agency Offer Page",
            "Sales page layout built around credibility, urgency, and direct booking.",
            images.design,
            ["Sales Page", "Booking", "Responsive"],
            "5 days",
            "From $280",
            "Agency landing page"
          ),
        ],
      },
      {
        id: "business-sites",
        title: "Business Websites",
        description: "Modern websites for service providers, studios, and digital businesses.",
        projects: [
          project(
            "site-consulting",
            "Consulting Studio Site",
            "A clean business site with services, case studies, testimonials, and contact flow.",
            images.website,
            ["Business", "CMS-ready", "Contact"],
            "1-2 weeks",
            "From $450",
            "Business website"
          ),
          project(
            "site-portfolio",
            "Creator Portfolio",
            "A sleek portfolio system for showcasing offers, projects, and booking links.",
            images.templates,
            ["Portfolio", "Personal Brand", "Mobile"],
            "1 week",
            "From $350",
            "Portfolio website"
          ),
        ],
      },
      {
        id: "ecommerce-websites",
        title: "E-Commerce Websites",
        description: "Product pages, storefronts, checkout-focused layouts, and sales sections.",
        projects: [
          project(
            "commerce-fashion",
            "Fashion Storefront",
            "A premium storefront layout with product storytelling and mobile-first checkout paths.",
            images.ecommerce,
            ["Shopify", "Storefront", "Products"],
            "2 weeks",
            "From $650",
            "E-commerce website"
          ),
          project(
            "commerce-digital-products",
            "Digital Product Store",
            "A compact store for courses, templates, or downloadable digital products.",
            images.website,
            ["Digital", "Checkout", "SEO"],
            "1-2 weeks",
            "From $520",
            "Digital product store"
          ),
        ],
      },
      {
        id: "website-redesign",
        title: "Website Redesign",
        description: "Visual upgrades for outdated sites that need better trust and conversion.",
        projects: [
          project(
            "redesign-startup",
            "Startup Site Redesign",
            "A sharper product site direction with clearer messaging and premium UI blocks.",
            images.design,
            ["Redesign", "Startup", "UX"],
            "1 week",
            "From $390",
            "Website redesign"
          ),
          project(
            "redesign-service-brand",
            "Service Brand Refresh",
            "A polished service website refresh with stronger CTAs and client proof sections.",
            images.website,
            ["Services", "Trust", "Conversion"],
            "1-2 weeks",
            "From $470",
            "Service website refresh"
          ),
        ],
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Full-stack app interfaces for dashboards, portals, MVPs, and tools that clients can actually use.",
    icon: Code2,
    accent: "from-emerald-300 to-cyan-300",
    subcategories: [
      {
        id: "saas-dashboards",
        title: "SaaS Dashboards",
        description: "Analytics, admin views, user management, and subscription-ready UI systems.",
        projects: [
          project(
            "saas-command",
            "Command Center Dashboard",
            "Dark analytics dashboard with KPIs, charts, activity feeds, and admin actions.",
            images.dashboard,
            ["Next.js", "Dashboard", "Postgres"],
            "2-4 weeks",
            "From $900",
            "SaaS dashboard",
            true
          ),
          project(
            "saas-revenue",
            "Revenue Metrics App",
            "A revenue dashboard for subscriptions, active users, churn, and product activity.",
            images.app,
            ["Revenue", "Charts", "SaaS"],
            "3 weeks",
            "From $1,100",
            "Revenue dashboard"
          ),
        ],
      },
      {
        id: "client-portals",
        title: "Client Portals",
        description: "Project status, files, messages, invoices, and request tracking in one portal.",
        projects: [
          project(
            "portal-client",
            "Client Portal MVP",
            "A project portal with status cards, deliverables, quote history, and file links.",
            images.app,
            ["Portal", "Auth UI", "MVP"],
            "3-5 weeks",
            "From $1,200",
            "Client portal MVP"
          ),
          project(
            "portal-agency",
            "Agency Delivery Portal",
            "A workflow portal for agencies handling multiple clients and active jobs.",
            images.dashboard,
            ["Agency", "Workflow", "Clients"],
            "4 weeks",
            "From $1,500",
            "Agency client portal"
          ),
        ],
      },
      {
        id: "admin-panels",
        title: "Admin Panels",
        description: "Internal tools for teams that need a clean operational interface.",
        projects: [
          project(
            "admin-orders",
            "Order Operations Panel",
            "A responsive admin panel for managing orders, clients, status, and reports.",
            images.dashboard,
            ["Admin", "Tables", "Workflow"],
            "2-3 weeks",
            "From $750",
            "Admin panel"
          ),
          project(
            "admin-content",
            "Content Control Hub",
            "Editorial dashboard for publishing, reviewing, and scheduling content.",
            images.app,
            ["CMS", "Teams", "Publishing"],
            "2 weeks",
            "From $650",
            "Content admin system"
          ),
        ],
      },
      {
        id: "mvp-builds",
        title: "MVP Builds",
        description: "Lean product builds for founders who need a usable launch version fast.",
        projects: [
          project(
            "mvp-marketplace",
            "Marketplace MVP",
            "A service marketplace concept with listings, request flow, and admin review.",
            images.app,
            ["MVP", "Marketplace", "Requests"],
            "4-6 weeks",
            "From $1,800",
            "Marketplace MVP"
          ),
          project(
            "mvp-booking",
            "Booking App MVP",
            "A booking app interface with calendar slots, client intake, and status tracking.",
            images.dashboard,
            ["Booking", "Calendar", "Product"],
            "3-5 weeks",
            "From $1,500",
            "Booking app MVP"
          ),
        ],
      },
    ],
  },
  {
    id: "website-templates",
    title: "Website Templates",
    description:
      "Reusable template systems for creators, agencies, stores, and founders who need a fast launch.",
    icon: Boxes,
    accent: "from-amber-300 to-pink-400",
    subcategories: [
      {
        id: "portfolio-templates",
        title: "Portfolio Templates",
        description: "Editable layouts for designers, developers, creators, and consultants.",
        projects: [
          project(
            "template-creator",
            "Creator OS Template",
            "Portfolio, offers, case studies, and booking sections in one clean template.",
            images.templates,
            ["Template", "Portfolio", "Launch"],
            "2-4 days",
            "From $90",
            "Portfolio template",
            true
          ),
          project(
            "template-dev",
            "Developer Showcase Kit",
            "A developer portfolio template with project cards, services, and contact flow.",
            images.website,
            ["Developer", "Next.js", "Responsive"],
            "3 days",
            "From $120",
            "Developer template"
          ),
        ],
      },
      {
        id: "agency-templates",
        title: "Agency Templates",
        description: "Service pages, case study layouts, team sections, and proposal CTAs.",
        projects: [
          project(
            "template-agency-pro",
            "Agency Pro Template",
            "A premium template for agencies with case studies, process, pricing, and booking.",
            images.design,
            ["Agency", "Case Study", "Booking"],
            "3 days",
            "From $160",
            "Agency website template"
          ),
          project(
            "template-studio",
            "Creative Studio Template",
            "A visual-first agency template built for studios, designers, and brand teams.",
            images.templates,
            ["Studio", "Creative", "Services"],
            "3-4 days",
            "From $180",
            "Creative studio template"
          ),
        ],
      },
      {
        id: "startup-templates",
        title: "Startup Templates",
        description: "Fast, polished pages for validating ideas and collecting early demand.",
        projects: [
          project(
            "template-waitlist",
            "Waitlist Launch Kit",
            "A startup waitlist page with benefits, pricing teaser, and email capture.",
            images.marketing,
            ["Startup", "Waitlist", "Conversion"],
            "2 days",
            "From $110",
            "Startup waitlist template"
          ),
          project(
            "template-micro-saas",
            "Micro-SaaS Landing Kit",
            "A compact product page made for solo founders and early validation.",
            images.dashboard,
            ["Micro-SaaS", "Product", "CTA"],
            "3 days",
            "From $140",
            "Micro-SaaS template"
          ),
        ],
      },
      {
        id: "ecommerce-templates",
        title: "E-Commerce Templates",
        description: "Product grids, featured collections, promo banners, and checkout CTAs.",
        projects: [
          project(
            "template-storefront",
            "Storefront Starter Template",
            "A polished storefront template for product-first brands and boutiques.",
            images.ecommerce,
            ["Store", "Products", "Shopify"],
            "3-5 days",
            "From $180",
            "Storefront template"
          ),
          project(
            "template-product-drop",
            "Product Drop Template",
            "A fast-launch product drop layout with urgency sections and mobile-first CTA flow.",
            images.marketing,
            ["Drop", "Promo", "Mobile"],
            "2-3 days",
            "From $130",
            "Product drop template"
          ),
        ],
      },
    ],
  },
  {
    id: "marketing-tools",
    title: "Marketing Tools",
    description:
      "Lead capture, campaign assets, and dashboards that support selling instead of just looking nice.",
    icon: ChartNoAxesCombined,
    accent: "from-lime-300 to-sky-300",
    subcategories: [
      {
        id: "lead-capture",
        title: "Lead Capture",
        description: "Forms, funnels, and mini tools that turn traffic into prospects.",
        projects: [
          project(
            "lead-calculator",
            "ROI Calculator Funnel",
            "Interactive calculator that qualifies leads and sends request details.",
            images.marketing,
            ["Calculator", "Lead Gen", "Form"],
            "1 week",
            "From $380",
            "Lead capture tool",
            true
          ),
          project(
            "lead-quiz",
            "Offer Quiz Funnel",
            "A guided quiz experience that recommends offers and captures client info.",
            images.app,
            ["Quiz", "Funnel", "Automation"],
            "1-2 weeks",
            "From $480",
            "Quiz funnel"
          ),
        ],
      },
      {
        id: "email-funnels",
        title: "Email Funnels",
        description: "Lead magnets, nurture sequences, launch sequences, and opt-in pages.",
        projects: [
          project(
            "email-launch",
            "Launch Email Funnel",
            "A launch funnel structure with opt-in copy, sequence map, and conversion page.",
            images.automation,
            ["Email", "Launch", "Automation"],
            "1-2 weeks",
            "From $420",
            "Email launch funnel"
          ),
          project(
            "email-lead-magnet",
            "Lead Magnet System",
            "A landing page and email flow built around a downloadable lead magnet.",
            images.marketing,
            ["Lead Magnet", "Email", "Opt-in"],
            "1 week",
            "From $360",
            "Lead magnet funnel"
          ),
        ],
      },
      {
        id: "campaign-dashboards",
        title: "Campaign Dashboards",
        description: "Simple dashboards for tracking campaign performance and content activity.",
        projects: [
          project(
            "campaign-pulse",
            "Campaign Pulse Board",
            "A lightweight dashboard for tracking launch metrics, tasks, and channels.",
            images.dashboard,
            ["Analytics", "Campaign", "KPIs"],
            "2 weeks",
            "From $700",
            "Campaign dashboard"
          ),
          project(
            "campaign-content",
            "Content Planner App",
            "A planning interface for content calendars, creative status, and approvals.",
            images.templates,
            ["Planner", "Content", "Teams"],
            "2-3 weeks",
            "From $780",
            "Content planner app"
          ),
        ],
      },
      {
        id: "automation-tools",
        title: "Automation Tools",
        description: "Workflow helpers for intake, routing, follow-ups, and client notifications.",
        projects: [
          project(
            "automation-intake",
            "Smart Intake Router",
            "A smart form flow that routes project requests by budget, category, and urgency.",
            images.automation,
            ["Intake", "Routing", "Workflow"],
            "2 weeks",
            "From $620",
            "Intake automation tool"
          ),
          project(
            "automation-followup",
            "Follow-Up Engine",
            "A lightweight follow-up interface for client requests and quote reminders.",
            images.dashboard,
            ["Follow-up", "CRM", "Automation"],
            "2-3 weeks",
            "From $760",
            "Follow-up automation"
          ),
        ],
      },
    ],
  },
  {
    id: "web3-design",
    title: "Web3 Design",
    description:
      "Blockchain-adjacent product visuals, dashboards, and launch pages with trust-forward UI.",
    icon: Hexagon,
    accent: "from-violet-300 to-cyan-300",
    subcategories: [
      {
        id: "token-pages",
        title: "Token & NFT Pages",
        description: "Landing pages for token launches, NFT drops, and community campaigns.",
        projects: [
          project(
            "web3-token",
            "Token Launch Page",
            "A sharp launch page with token utility, roadmap, community CTA, and FAQs.",
            images.web3,
            ["Token", "Roadmap", "Community"],
            "1 week",
            "From $420",
            "Web3 launch page",
            true
          ),
          project(
            "web3-nft",
            "NFT Drop Experience",
            "A collectible drop page with gallery, mint CTA layout, and lore sections.",
            images.design,
            ["NFT", "Gallery", "Drop"],
            "1-2 weeks",
            "From $520",
            "NFT drop page"
          ),
        ],
      },
      {
        id: "wallet-ui",
        title: "Wallet UI",
        description: "Wallet screens, portfolio cards, transaction views, and Web3 dashboards.",
        projects: [
          project(
            "wallet-lite",
            "Wallet Lite Interface",
            "A clean mobile-first wallet dashboard with balances and transaction states.",
            images.web3,
            ["Wallet", "Mobile UI", "Dashboard"],
            "2 weeks",
            "From $650",
            "Wallet UI design"
          ),
          project(
            "wallet-activity",
            "Wallet Activity View",
            "A transaction-first wallet interface with clear status and risk states.",
            images.crypto,
            ["Wallet", "Transactions", "UX"],
            "2-3 weeks",
            "From $780",
            "Wallet activity UI"
          ),
        ],
      },
      {
        id: "dao-dashboards",
        title: "DAO Dashboards",
        description: "Governance dashboards, proposal cards, treasury summaries, and member views.",
        projects: [
          project(
            "dao-command",
            "DAO Command Panel",
            "A dark governance dashboard with proposals, votes, treasury stats, and activity.",
            images.dashboard,
            ["DAO", "Governance", "Treasury"],
            "3-4 weeks",
            "From $1,200",
            "DAO dashboard"
          ),
          project(
            "dao-member",
            "Member Portal UI",
            "A community member dashboard for proposals, rewards, access, and updates.",
            images.app,
            ["Community", "Portal", "Web3"],
            "3 weeks",
            "From $980",
            "DAO member portal"
          ),
        ],
      },
      {
        id: "crypto-branding",
        title: "Crypto Branding",
        description: "Brand systems, launch visuals, icon sets, and pitch assets for Web3 teams.",
        projects: [
          project(
            "crypto-brand-kit",
            "Crypto Brand Kit",
            "A luminous identity kit with logo, colors, icon direction, and launch visuals.",
            images.brand,
            ["Brand", "Crypto", "Launch"],
            "1-2 weeks",
            "From $360",
            "Crypto brand kit"
          ),
          project(
            "crypto-pitch",
            "Investor Pitch Visuals",
            "A Web3 pitch visual system with diagrams, roadmap, and token utility slides.",
            images.web3,
            ["Pitch", "Deck", "Token"],
            "1 week",
            "From $420",
            "Web3 pitch visuals"
          ),
        ],
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = portfolioCategories.flatMap((category) =>
  category.subcategories.flatMap((subcategory) =>
    subcategory.projects.map((project) => ({
      category,
      subcategory,
      project,
    }))
  )
);

export const budgetFilters = ["All", "Under $150", "$150-$500", "$500+"] as const;

export const dashboardStats = [
  { label: "Categories", value: String(portfolioCategories.length) },
  { label: "Subcategories", value: String(portfolioItems.length ? portfolioCategories.reduce((total, category) => total + category.subcategories.length, 0) : 0) },
  { label: "Projects", value: String(portfolioItems.length) },
];

export const showcaseWorks: ShowcaseWork[] = [
  {
    id: "showcase-logo-xnova",
    title: "Xnova Tech Mark",
    discipline: "Graphic Design",
    category: "Logo Design",
    tools: ["Illustrator", "Photoshop"],
    image: images.brand,
  },
  {
    id: "showcase-flyer-neon",
    title: "Neon Product Launch Flyer",
    discipline: "Graphic Design",
    category: "Flyer Design",
    tools: ["Photoshop", "Canva"],
    image: images.flyerOne,
  },
  {
    id: "showcase-social-growth",
    title: "Growth Campaign Pack",
    discipline: "Graphic Design",
    category: "Social Media Design",
    tools: ["Canva", "Photoshop"],
    image: images.social,
  },
  {
    id: "showcase-brand-orbit",
    title: "Orbit Studio Brand Kit",
    discipline: "Graphic Design",
    category: "Brand Identity",
    tools: ["Illustrator", "Figma"],
    image: images.design,
  },
  {
    id: "showcase-portfolio-creator",
    title: "Creator Portfolio Website",
    discipline: "Website Design",
    category: "Portfolio Websites",
    tools: ["Figma", "Next.js"],
    image: images.templates,
  },
  {
    id: "showcase-business-consulting",
    title: "Consulting Studio Website",
    discipline: "Website Design",
    category: "Business Websites",
    tools: ["Figma", "Next.js"],
    image: images.website,
  },
  {
    id: "showcase-shopify-fashion",
    title: "Fashion Storefront",
    discipline: "Website Design",
    category: "Shopify Stores",
    tools: ["Shopify", "Liquid"],
    image: images.ecommerce,
  },
  {
    id: "showcase-wix-service",
    title: "Service Brand Wix Site",
    discipline: "Website Design",
    category: "Wix Websites",
    tools: ["Wix Studio", "Figma"],
    image: images.marketing,
  },
  {
    id: "showcase-saas-waitlist",
    title: "SaaS Waitlist Page",
    discipline: "Website Design",
    category: "SaaS Websites",
    tools: ["Figma", "Next.js"],
    image: images.dashboard,
  },
];
