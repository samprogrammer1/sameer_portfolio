import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import ktlink from "@/public/project/5.jpg";
import thekashth from "@/public/project/thekashth.jpg";
import assetTradingImg from "@/public/asset-trading.jpg";
import jeevanekuphaar from "@/public/project/jeevan.jpg";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import nivranweb from "@/public/project/nivaranweb.png";
import nivranapp from "@/public/project/nivrana.jpg";
import swatantradev from "@/public/project/portfolio.png";
import utthanitsolution from "@/public/project/utthanitsolution.png"
import resonance from "@/public/project/resonance.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Freelancer",
    description:
      "I specialize in full-scale freelance projects, with a focus on crafting solutions like URL shorteners, e-commerce platforms, and foundational company websites, delivering tailored and comprehensive solutions for diverse client requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - January 2023",
  },
  {
    title: "Full Stack Developer | Internship",
    location: "COZINCO INNOVATIONS",
    description:
      "Developed a React.js chatbot with Firebase authentication and an online survey website, and currently engaged in crafting a React-Native app for purchasing online gift cards.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - February 2024",
  },
  {
    title: "Full Stack Developer",
    location: "UTTHAN IT SOLUTIONS",
    description:
      "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as Complaint Register Website And Personal Website And portfolio.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - Present",
  },
] as const;

export const projectsData = [
  
  {
    title: "TheKashth | Ecommerce",
    description:
      "I led the creation of the THEKASHTH online store, managing both products and markets. I drove growth by leveraging my technical and marketing skills, adding over six features using Laravel, HTML, CSS, JavaScript, and MySQL.",
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:bootstrap",
      "logos:mysql",
    ],
    imageUrl: thekashth,
    urlLink: "https://thekashth.com/",
    githubLink: "",
  },
  {
    title: "Jeevan Ek Uphaar Foundation Webiste",
    description:
      "I contributed to the Jeevan Ek Uphaar Foundation website by adding over 10 new features. This involved utilizing technologies such as Laravel, HTML, CSS, JavaScript, and MySQL to improve the site's functionality and user experience.",
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:bootstrap",
      "logos:mysql",
    ],
    imageUrl: jeevanekuphaar,
    urlLink: "https://jeevanekuphaar.org/"
  },
  {
    title: "JIET UNIVERSITY RESONANCE EVENT | Webiste",
    description:
      'Developed the "Jiet University Resonance" website for event registration and activity display, leveraging React.js for dynamic interactivity, HTML, CSS, and Bootstrap for responsive design, and PHP for server-side functionalities. The website seamlessly facilitates event registration and showcases all event activities with user-friendly navigation and engaging UI elements.',
    tags: ["PHP","React", "HTML", "JavaScript", "Bootstrap", "Css"],
    icons: [
      "logos:php",
      "logos:react",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "devicon:bootstrap"
    ],
    imageUrl: resonance,
    urlLink: "https://resonancejiet.in/",
  },
  {
    title: "Utthan IT Solution",
    description:
      'Developed the "Utthan IT Solution" website using HTML, CSS, Bootstrap, and core PHP, showcasing comprehensive front-end and back-end skills to deliver a responsive and user-friendly platform.',
    tags: ["PHP", "HTML", "JavaScript", "Bootstrap", "Css"],
    icons: [
      "logos:php",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "devicon:bootstrap"
    ],
    imageUrl: utthanitsolution,
    urlLink: "https://utthanitsolutions.com/",
  },
  {
    title: "KTLink",
    description:
      "Developed an admin application using React Native and Redux, facilitating seamless integration with external APIs. Additionally, conceptualized and built KTLink, a comprehensive URL shortener, utilizing HTML, CSS, and JavaScript for the frontend, and Laravel for the backend. Implemented advanced URL shortening functionalities such as referral tracking, withdrawal management, and dynamic URL generation, enhancing user engagement and interaction.",
    tags: ["JavaScript", "React Native", "Laravel" , "Mysql"],
    icons: [
      "logos:laravel",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:mysql",
    ],
    imageUrl: ktlink,
    // githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
] as const;

export const skillsData = [
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Bootstrap",
    icon: "devicon:bootstrap",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "React Native",
    icon: "logos:react",
  },
  {
    name: "Next Js",
    icon: "devicon:nextjs",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Git",
    icon: "logos:github-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:flutter",
  },
] as const;
