import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbnb from "@/public/airbnb-lagos.png";
import fameet from "@/public/fameet.png";
// import vanlifeDashboard from "@/public/vanlifeDashboard.png";
import chatapp from "@/public/chatapp.png";

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
      "I got an internship and I was able to develop my skills as a front-end developer. I also personal upskilled to full stack during the internship.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Front-End Developer @ Fatherland Global",
    location: "Ibadan, Nigeria",
    description: "I work as a front-end developer building a social media app.",
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
    title: "Chat App",
    description:
      "Chat app built with React, Typescript, Nodejs, Socket.io, Express, and MongoDB, create an account an chat with other users.",
    tags: [
      "React",
      "Socket.io",
      "Express",
      "Nodejs",
      "MongoDB",
      "Typescript",
      "mern",
    ],
    imageUrl: chatapp,
    link: "https://chat-app-mern-re7b.onrender.com/",
  },
  {
    title: "Listings - Airbnb Lagos",
    description:
      "Airbnb Lagos: This app was inspired by the popurlar Airbnb. It is a full-stack app that allows users to book and manage their bookings. Allows passwordless login with Google.",
    tags: ["React", "Nextjs", "Prisma", "MongoDB", "Tailwind", "Typescript"],
    imageUrl: airbnb,
    link: "https://airbnb-lagos.vercel.app/",
  },
  {
    title: "Fameet (Frontend - Fatherland global)",
    description:
      "Fameet: Social media app that connect users to their families. It has features like posting, commenting, liking, and following. The backend was built with Laravel-php and the frontend with React.",
    tags: ["React", "Next", "Typescript", "Socket.io"],
    imageUrl: fameet,
    link: "https://fameet.com/",
  },
  // {
  //   title: "Van rental app",
  //   description:
  //     "This app implements JWT (JSON Web Token) for  authentication and authorization, and React Router dom for navigation and managing protected routes.",
  //   tags: [
  //     "React",
  //     "React-router-dom",
  //     "Express",
  //     "Nodejs",
  //     "MongoDB",
  //     "Tailwind",
  //     "mern",
  //   ],
  //   imageUrl: vanlifeDashboard,
  //   link: "https://master--famous-concha-79d633.netlify.app",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Zustand",
  "Express",
  "Socket.io",
  "Framer Motion",
] as const;
