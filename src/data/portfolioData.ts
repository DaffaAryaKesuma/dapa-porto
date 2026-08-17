export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend';
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  image: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'database' | 'tools';
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    iconName: string;
    description: string;
  }[];
}

export const NAV_LINKS = [
  { name: "Home", href: "#home", number: "00" },
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Projects", href: "#projects", number: "03" },
  { name: "Contact", href: "#contact", number: "04" },
];

export const PERSONAL_INFO = {
  name: "Daffa Arya Kesuma",
  role: "Full-Stack Web Developer",
  tagline: "Membangun sistem web berkinerja tinggi, dari antarmuka interaktif hingga arsitektur backend RESTful API yang skalabel.",
  shortBio: "Lulusan Informatika yang berfokus pada perancangan arsitektur web modern. Berpengalaman dalam membangun aplikasi web decoupled dengan Vue.js/Next.js di frontend dan Laravel REST API di backend.",
  email: "dafaaryakesuma20@gmail.com",
  phone: "+62 812-XXXX-XXXX",
  location: "Indonesia",
  cvUrl: "/cv-daffa.pdf",
  github: "https://github.com/DaffaAryaKesuma",
  linkedin: "https://www.linkedin.com/in/daffa-arya-kesuma-95024b426",
  krgarageFrontendRepo: "https://github.com/DaffaAryaKesuma/krgarage-frontend.git",
  krgarageBackendRepo: "https://github.com/DaffaAryaKesuma/krgarage-backend.git",
  aboutMe: [
    "Saya adalah seorang Full-Stack Web Developer dengan latar belakang pendidikan Informatika. Fokus utama saya adalah merancang dan membangun sistem web yang andal, efisien, serta mudah dikembangkan (scalable) sesuai kebutuhan produk.",
    "Spesialisasi saya berada pada arsitektur decoupled (terpisah)—menghubungkan antarmuka pengguna Single Page Application (SPA) yang cepat dan dinamis berbasis Vue.js / React / Next.js dengan backend RESTful API yang aman dan terstruktur berbasis Laravel.",
    "Saya selalu menerapkan prinsip Clean Code, type-safety, optimasi query database, serta integritas data yang ketat dalam setiap siklus pengembangan perangkat lunak, mulai dari tahap perancangan arsitektur hingga deployment.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    skills: [
      {
        name: "Vue.js",
        level: "Advanced",
        iconName: "Code2",
        description: "Single Page Application (SPA), Pinia/Vuex state management, Composition API.",
      },
      {
        name: "Next.js",
        level: "Advanced",
        iconName: "Globe",
        description: "Server-Side Rendering (SSR), App Router, Static Site Generation (SSG).",
      },
      {
        name: "React",
        level: "Advanced",
        iconName: "Layers",
        description: "Component Lifecycle, Custom Hooks, State Architecture.",
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        iconName: "Palette",
        description: "Utility-first modern styling, responsive layouts, theme systems.",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        iconName: "FileCode",
        description: "Type safety, static analysis, interfaces & generic data structures.",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        iconName: "Zap",
        description: "Asynchronous programming, Promises, DOM manipulation, modular JS.",
      },
      {
        name: "HTML5 & CSS3",
        level: "Expert",
        iconName: "Layout",
        description: "Semantic web structure, Flexbox, CSS Grid, accessible UI/UX.",
      },
    ],
  },
  {
    title: "Backend Development",
    categoryKey: "backend",
    skills: [
      {
        name: "Laravel",
        level: "Advanced",
        iconName: "Server",
        description: "RESTful API development, Eloquent ORM, Sanctum auth, Middleware, Queues.",
      },
      {
        name: "PHP",
        level: "Advanced",
        iconName: "Code",
        description: "Object-Oriented Programming (OOP), MVC architectural pattern, PHP 8+ features.",
      },
      {
        name: "RESTful API Design",
        level: "Advanced",
        iconName: "Network",
        description: "Stateless architecture, structured JSON formatting, API versioning, error handling.",
      },
      {
        name: "Node.js",
        level: "Intermediate",
        iconName: "Cpu",
        description: "Express.js microservices, asynchronous I/O, server-side JavaScript.",
      },
    ],
  },
  {
    title: "Database & Storage",
    categoryKey: "database",
    skills: [
      {
        name: "MySQL",
        level: "Advanced",
        iconName: "Database",
        description: "Relational schema design, query indexing, foreign key constraints, ACID transactions.",
      },
      {
        name: "Database Normalization",
        level: "Advanced",
        iconName: "Table",
        description: "3NF database architecture, data integrity, eliminating redundancy.",
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        iconName: "HardDrive",
        description: "Relational data modeling, complex joins, indexing strategies.",
      },
    ],
  },
  {
    title: "Dev Tools & Workflow",
    categoryKey: "tools",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        iconName: "GitBranch",
        description: "Branching strategies, pull requests, version control, collaborative workflows.",
      },
      {
        name: "Postman",
        level: "Advanced",
        iconName: "Send",
        description: "API testing, automated endpoint collections, environment variables, debugging.",
      },
      {
        name: "Axios Interceptors",
        level: "Expert",
        iconName: "ArrowLeftRight",
        description: "Centralized HTTP requests, automatic Bearer Token injection, global error handling.",
      },
      {
        name: "VS Code & Terminal",
        level: "Expert",
        iconName: "Terminal",
        description: "Efficient CLI workflows, linting, debugging, customized developer environment.",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "krgarage-system",
    title: "KRGarage - Decoupled Enterprise Workshop & ERP Management System",
    category: "Full-Stack",
    description:
      "Aplikasi web enterprise berskala penuh dengan arsitektur decoupled untuk otomasi operasional bisnis, antrean servis, manajemen inventori suku cadang, dan analitik pendapatan real-time.",
    longDescription:
      "Sistem otomasi operasional terintegrasi yang menangani pencatatan transaksi servis, antrean teknisi, manajemen inventori suku cadang otomatis, hingga laporan analitik keuangan real-time. Menggunakan arsitektur decoupled (Laravel 11 sebagai RESTful API provider dan Vue.js 3 sebagai client-side interface) untuk performa responsif dan skalabilitas data yang solid.",
    tags: [
      "Laravel 11",
      "Vue.js 3",
      "RESTful API",
      "MySQL",
      "Tailwind CSS",
      "Pinia",
      "Axios Interceptors",
      "Sanctum Auth",
    ],
    features: [
      "Arsitektur Decoupled: Pemisahan total antara Vue.js frontend SPA dan Laravel REST API backend",
      "Token-Based Authentication: Keamanan endpoint via Laravel Sanctum dengan automatic token refresh",
      "Real-time Inventory Sync: Pembaruan stok otomatis dengan trigger transaksi berbasis ACID",
      "Financial Analytics Dashboard: Visualisasi omzet, grafik pendapatan, dan metrik performa",
      "Role-Based Access Control (RBAC): Hak akses terpisah untuk Superadmin, Kasir, dan Manajer",
    ],
    metrics: [
      { label: "ARSITEKTUR", value: "Decoupled SPA + API" },
      { label: "BACKEND API", value: "Laravel 11 (RESTful)" },
      { label: "FRONTEND SPA", value: "Vue.js 3 + Pinia" },
      { label: "AUTENTIKASI", value: "Laravel Sanctum Bearer" },
    ],
    githubFrontendUrl: "https://github.com/DaffaAryaKesuma/krgarage-frontend.git",
    githubBackendUrl: "https://github.com/DaffaAryaKesuma/krgarage-backend.git",
    demoUrl: "https://krgarage-demo.vercel.app",
    image: "/images/projects/krgarage.png",
    featured: true,
  },
  {
    id: "dev-collab-platform",
    title: "DevFlow - Real-time Project & API Collaboration Dashboard",
    category: "Frontend",
    description:
      "Modern project management dashboard with real-time sprint boards, API mock tester, dynamic dark mode, and interactive data visualization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    features: [
      "Interactive Kanban sprint boards with smooth drag-and-drop state",
      "Interactive REST API endpoint tester with live JSON payload highlighter",
      "Comprehensive telemetry charts for project velocity and code metrics",
    ],
    demoUrl: "https://devflow-collab.vercel.app",
    githubUrl: "https://github.com/DaffaAryaKesuma/devflow-platform",
    image: "/images/projects/devflow.png",
    featured: false,
  },
  {
    id: "secure-api-gateway",
    title: "RESTful API Auth & RBAC Microservice Engine",
    category: "Backend",
    description:
      "High-performance backend API service with token-based authorization, rate limiting, automated database migrations, and audit logging.",
    tags: ["Laravel", "PHP 8.2", "MySQL", "Sanctum", "Redis", "Postman"],
    features: [
      "Optimized database schema with indexed queries for sub-15ms response times",
      "Role-based permission middleware (RBAC) protecting critical endpoints",
      "Comprehensive Postman collection with automated regression test suites",
    ],
    demoUrl: "https://api-gateway-demo.example.com",
    githubUrl: "https://github.com/DaffaAryaKesuma/secure-api-engine",
    image: "/images/projects/api-engine.png",
    featured: false,
  },
  {
    id: "saas-analytics-portal",
    title: "CloudPulse - Multi-Tenant SaaS Metrics & Analytics Portal",
    category: "Full-Stack",
    description:
      "Modern analytics platform with real-time telemetry metrics, automated data filtering, and responsive exportable reporting tables.",
    tags: ["Vue.js 3", "Laravel", "Tailwind CSS", "Chart.js", "MySQL"],
    features: [
      "Dynamic filtering engine for large multidimensional dataset analysis",
      "Decoupled state synchronization with Pinia and Axios interceptors",
      "Export reports to PDF & Excel with automated data aggregation",
    ],
    demoUrl: "https://cloudpulse-analytics.example.com",
    githubUrl: "https://github.com/DaffaAryaKesuma/cloudpulse-saas",
    image: "/images/projects/cloudpulse.png",
    featured: false,
  },
];
