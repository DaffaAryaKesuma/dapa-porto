# Role
You are an Expert Senior Web Developer specializing in Next.js (App Router), React, and Tailwind CSS. Your task is to build a modern, high-performance personal portfolio website from scratch.

# Project Context
I need a personal portfolio website to showcase my skills as a Full-Stack Web Developer. The design should have a subtle "Industrial/Automotive" aesthetic to reflect my passion for engineering, problem-solving, and classic 2-stroke Vespa restoration. The website must be highly responsive, blazing fast, and SEO-friendly.

# Tech Stack
- Framework: Next.js (App Router, Server-Side Rendering & Static Generation)
- Styling: Tailwind CSS
- Icons: Lucide React
- Animations: Framer Motion (for micro-interactions and smooth scroll)
- Theme Management: next-themes (for Light/Dark mode)

# Design System & Aesthetic
- **Theme**: Dark mode by default ("Carbon Black" aesthetic).
- **Color Palette (Dark Mode)**:
  - Background: Deep Charcoal/Gunmetal Grey (`#121212` or `zinc-950`).
  - Text: Off-white/Silver (`#E4E4E7`).
  - Accents: Safety Yellow (`#EAB308`) or Vespa Mint Green (`#34D399`) for buttons, hover states, and active links.
- **Typography**: Clean Sans-serif (Inter or Roboto) paired with a Monospace font (Fira Code or JetBrains Mono) for subheadings, tech stacks, or code-like elements.
- **UI Elements**: Boxy, sharp edges, thin grid lines, and subtle glow effects on hover to mimic high-performance dashboard UI.

# Website Structure & Content
Please scaffold a one-page portfolio layout with the following sections:

## 1. Navbar
- Sticky top navigation.
- Links: Home, About, Skills, Projects, Contact.
- Feature: Light/Dark mode toggle switch.

## 2. Hero Section
- **Headline**: "Daffa Arya Kesuma"
- **Sub-headline / Title**: "Full-Stack Web Developer"
- **Tagline**: "Membangun sistem web berkinerja tinggi yang presisi, dari antarmuka pengguna hingga logika backend."
- **Call to Action (CTA)**: Two buttons -> [Lihat Proyek] (Primary) and [Unduh CV] (Secondary/Outline).

## 3. About Me Section
- **Heading**: "Tentang Saya"
- **Content**: Include a short professional summary indicating my background in Informatics. Mention that my detail-oriented approach to software development is heavily inspired by my passion for physical engineering, specifically restoring and maintaining classic 2-stroke Vespa motorcycles and long-distance running.

## 4. Tech Stack (Skills) Section
- Display as a clean grid using icons or styled badges.
- **Frontend**: Vue.js, Next.js, Tailwind CSS.
- **Backend & Database**: Laravel, RESTful API, MySQL, Supabase.
- **Tools**: Git, Postman, Axios.

## 5. Projects Section
- Create a filterable grid (All, Full-Stack, Frontend, Backend).
- **Highlight Project**: "Sistem Informasi Manajemen Layanan Bengkel (KRGarage)"
  - **Tags**: Full-Stack, Laravel, Vue.js, Tailwind.
  - **Description**: A comprehensive end-to-end web application for automotive workshop management. Built with a decoupled architecture (Laravel API + Vue.js SPA).
  - **Key Features**: Multi-role authentication (Customer, Admin, Mechanic, Owner), automated spare parts inventory management, and real-time financial analytics dashboard.
  - **Links**: Add placeholder buttons for [Live Demo] and [GitHub Repository].

## 6. Contact Section
- A clean contact form (Name, Email, Message) - UI only for now.
- Direct links to my GitHub and LinkedIn profiles.
- A minimalist footer.

# Specific Instructions for the AI
1. Initialize the Next.js project structure properly with `layout.tsx` and `page.tsx`.
2. Create reusable components for buttons, project cards, and section containers.
3. Ensure the project is highly modular.
4. Implement micro-interactions using Framer Motion (e.g., fade-in on scroll, slight scale up on project cards on hover).
5. Please provide the code step-by-step, starting with the necessary package installations and Tailwind configurations, followed by the layout and components.