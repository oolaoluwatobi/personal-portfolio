import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import kamBanBoardHomepage from '@/public/kanBanBoardHomepage.png'
import vanlifeDashboard from '@/public/vanlifeDashboard.png'
import contactsApp from '@/public/contactsApp .png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Ibadan, Nigeria",
    description:
      "I got an internship and I was able to develop my skills as a front-end developer. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Ibadan, Nigeria",
    description:
      "I work as a front-end developer building a social media app.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "KanBan Board Task Management app",
    description:
      "This app provides users with a seamless way to manage tasks through different stages of completion.",
    tags: ["React", "Express", "Nodejs", "MongoDB", "Tailwind", "mern"],
    imageUrl: kamBanBoardHomepage,
    "link": "https://kanban-client-sigma.vercel.app/",
  },
  {
    title: "Contacts App",
    description:
      "Integrates a RESTful API to perform CRUD operations on contacts. It has features like filtering, sorting and pagination.",
      tags: ["React", "Express", "Nodejs", "MongoDB", "Tailwind", "mern"],
    imageUrl: contactsApp,
    "link": "https://main--melodious-alpaca-0ee727.netlify.app/",
  },
  {
    title: "Van rental app",
    description:
      "This app implements JWT (JSON Web Token) for  authentication and authorization, and React Router dom for navigation and managing protected routes.",
      tags: ["React", "React-router-dom", "Express", "Nodejs", "MongoDB", "Tailwind", "mern"],
    imageUrl: vanlifeDashboard,
    "link": "https://master--famous-concha-79d633.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  // "PostgreSQL",
  "Framer Motion",
] as const;
