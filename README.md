# 🎓 LearnSphere

LearnSphere is a modern SaaS learning platform that empowers users to interact with AI-powered voice tutors. Built for
scalability, interactivity, and ease of use, LearnSphere leverages the latest web technologies to deliver an immersive
educational experience tailored to your needs.

---

## Deployed URL

This project is deployed on **vercel**.

[LearnSphere](https://learnsphere.jeetdas.site)

---

## 🧠 Tech Stack

**Clerk**
Clerk is a unified platform for authentication, user management, and billing. It offers embeddable UI components,
flexible APIs, and admin dashboards for secure user management. Clerk also simplifies subscription management, allowing
you to define plans, create pricing pages, and control access based on subscription tiers—all in one solution.

**Next.js**
A powerful React framework that enables fast, scalable web applications with features like server-side rendering, static
site generation, and API routes for full-stack development.

**Sentry**
An error tracking and performance monitoring tool that helps developers fix bugs faster by providing real-time alerts,
stack traces, and performance insights.

**shadcn/ui**
A customizable component library built on Radix UI and Tailwind CSS. It provides accessible and modern UI components,
making it easy to design clean, responsive interfaces.

**Supabase**
An open-source backend-as-a-service platform offering real-time APIs, PostgreSQL database, authentication, storage, and
subscriptions—everything you need to build robust and secure apps.

**Tailwind CSS**
A utility-first CSS framework that enables rapid UI development using low-level utility classes directly in the markup.

**TypeScript**
A superset of JavaScript that introduces static typing, better tooling, and enhanced developer experience for
large-scale applications.

**Vapi**
A developer-centric voice AI platform for creating conversational agents with real-time speech-to-text, text-to-speech,
and multilingual voice interactions.

**Zod**
A TypeScript-first schema validation library for defining and validating data structures with ease, ensuring reliability
and type safety.

---

## 🔋 Features

✅ **AI Voice Agents** – Learn through real-time voice conversations with AI tutors tailored to specific subjects and
topics.

✅ **Authentication** – Secure login and registration powered by Clerk, including support for social login like Google.

✅ **Billing & Subscriptions** – Manage user plans, upgrades, and payment processing with ease.

✅ **Bookmarks & Session History** – Save your favorite tutors and revisit previous tutoring sessions anytime.

✅ **Create a Tutor** – Easily build custom AI tutors by selecting subject, topic, and teaching style.

✅ **Cross-Device Compatibility** – Fully responsive UI optimized for desktops, tablets, and mobile devices.

✅ **Database Integration** – Real-time data storage, retrieval, and updates with Supabase.

✅ **Modern UI/UX** – Clean and accessible design system built using shadcn/ui and Tailwind CSS.

✅ **Search Functionality** – Quickly locate tutors with a dynamic search bar and filtering options.

✅ **Scalable Architecture** – Modular codebase, reusable components, and robust backend using Next.js for future-proof
development.

✅ **Error Monitoring** – Proactive error tracking and performance metrics with Sentry integration.

...and much more!

---

## ⚡ Quick Start

### 🛠 Prerequisites

Ensure the following are installed on your machine:

* Git
* Node.js
* NPM

---

### 📥 Cloning the Repository

```bash
git clone https://github.com/JeetDas5/LearnSphere
cd LearnSphere
```

---

### 📦 Installation

Install the project dependencies:

```bash
npm install
```

---

### ⚙️ Set Up Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

> 🔐 Replace the placeholder values with your actual credentials. You can get them
> from [Supabase](https://supabase.com/), [Clerk](https://clerk.dev/), [Sentry](https://sentry.io/),
> and [Vapi](https://vapi.ai/).

---

### 🚀 Running the Project

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:3000
```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---
