import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbnb from "@/public/airbnb-lagos.png";
import fameet from "@/public/fameet.png";
import solarcorptech from "@/public/solarcorptech.com.png";
import fatherland from "@/public/fatherland.io.png";
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
    title: "Intern - Front-End Developer @ Fatherland Global",
    location: "Ibadan, Nigeria",
    description:
      "I was able to develop my skills as a front-end developer. I developed and maintained web applications using Nextjs, ensuring high performance and responsiveness.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-End Developer @ Fatherland Global",
    location: "Ibadan, Nigeria",
    description:
      "I collaborated with cross-functional teams including designers, product managers, and other developers to create seamless user experiences on Fatherland social website",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full Stack Web Developer @ Stevensmith Engineering",
    location: "Remote",
    description:
      "I work as a Software developer building and maintaining product websites and web-apps.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm work as a freelancer. My stack includes React, Next.js, TypeScript, Nodejs, Socket.io, Nestjs, Prisma, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SolarCorpTech",
    description:
      "SolarCorpTech: A full-stack web app that allows users to perform energy audit and book solar installations from @Stevensmith Engineering.",
    tags: [
      "React",
      "Google Analytics",
      "Typescript",
      "AWS",
      "NestJS",
      "MongoDB",
      "Paystack",
    ],
    imageUrl: solarcorptech,
    link: "https://solarcorptech.com/",
  },
  {
    title: "Fatherland",
    description:
      "Fatherland: A social media app built with React, Next.js, Typescript, Socket.io. Users can create account, post, like, comment, and follow other users.",
    tags: ["React", "Next", "Typescript", "Socket.io"],
    imageUrl: fatherland,
    link: "https://fatherland.io/",
  },
  {
    title: "Chat App",
    description:
      "A Full Stack app built with React, Typescript, Nodejs, Socket.io, Express, and MongoDB, users create account and chat with other users.",
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
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Expo - React Native",
  "Next.js",
  "Node.js",
  "NestJS",
  "Git",
  "Jest",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Zustand",
  "Express",
  "Socket.io",
  "Framer Motion",
] as const;
