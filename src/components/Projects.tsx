"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  skills: string[];
};

const projects: Project[] = [
  {
    title: "Flatmates",
    description:
      "Flatmates is a platform designed to simplify your roommate search by matching preferences and helping you post, explore, and save trusted listings. Easily connect with like-minded individuals and find the perfect shared living space in your city.",
    image: "/images/flatmates.png",
    liveLink: "https://flatmates-psi.vercel.app",
    githubLink: "https://github.com/sushilkrg/flatmates-frontend",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind-CSS",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Payyou",
    description:
      "PayYou is a full-stack digital wallet app that lets users securely add money, send funds, and track transactions. It features a user-friendly dashboard to manage wallet balance, view recent activity, and monitor weekly transactions — all in one place.",
    image: "/images/payyou.png",
    liveLink: "https://payyou.vercel.app",
    githubLink: "https://github.com/sushilkrg/payyou",
    skills: [
      "React",
      "Node.js",
      "Expressjs",
      "Redux Toolkit",
      "Tailwind-CSS",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "InsightHub",
    description:
      "Collect anonymous feedback or suggestions through sharable links. Supports OTP verification and real-time updates.",
    image: "/images/insighthub.png",
    liveLink: "https://insighthub-six.vercel.app",
    githubLink: "https://github.com/sushilkrg/insighthub",
    skills: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "TypeScript",
      "Resend Email",
      "ShadCN",
      "Typescript",
    ],
  },
  {
    title: "Micropost",
    description:
      "A social networking platform to share short messages with images, jobs, and news. Includes follow/unfollow, profile view, and saved posts.",
    image: "/images/micropost.png",
    liveLink: "https://micropost-client.vercel.app",
    githubLink: "https://github.com/sushilkrg/micropost-client",
    skills: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Cloudinary"],
  },
  {
    title: "Image Gallery",
    description:
      "Search high-quality images with filters and pagination using the Unsplash API. Fully responsive design.",
    image: "/images/imagegallery.png",
    liveLink: "https://sushilkrg.github.io/Image-Gallery",
    githubLink: "https://github.com/sushilkrg/Image-Gallery",
    skills: ["HTML", "CSS", "JavaScript", "Unsplash API"],
  },
  {
    title: "Mint-Coin",
    description:
      "Track live cryptocurrency prices, rankings, market caps, and trends using interactive graphs and charts.",
    image: "/images/mintcoin.png",
    liveLink: "https://mintcoin-theta.vercel.app",
    githubLink: "https://github.com/sushilkrg/mintcoin",
    skills: ["React", "Vite", "Crypto API", "Google Graph"],
  },
  {
    title: "Task Master",
    description:
      "Manage daily tasks with features like add, edit, delete, and mark complete. Built with React and Context API.",
    image: "/images/taskmaster.png",
    liveLink: "https://task-master-psi-eight.vercel.app",
    githubLink: "https://github.com/sushilkrg/task-master",
    skills: ["React", "Vite", "Context API"],
  },

  {
    title: "Faculty Authentication System",
    description:
      "Admin can manage faculty data. Face recognition-based authentication system built with Django and React.",
    image: "/images/facultyauth.png",
    liveLink: "https://facultyauthsystem.vercel.app",
    githubLink: "https://github.com/sushilkrg/fac-auth-fake",
    skills: [
      "Python",
      "Django REST Framework",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Face Recognition",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-28 container mx-auto">
      {/* <section id="projects" className="py-12 px-4 max-w-6xl mx-auto"> */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-[#1a1a1a]  shadow-md transition hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-56 md:h-68">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  // className="object-cover group-hover:scale-105 transition-transform duration-300"
                  className="w-full object-fill object-center border-none rounded-md"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white-600 dark:text-white-400 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-indigo-600 hover:underline border border-white rounded-md p-1 bg-blue-100"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-4 items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
