import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
const skills = [
  "React",
  "Next.js",
  "Nodejs",
  "Express.js",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redux-toolkit",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Shadcn-UI",
  "Material-UI",
  "Bootstrap",
  "NPM/Yarn/PNPM",
  "Node-mailer",
  "Python",
  "Django REST Framework",
  "Git",
  "GitHub",
  "C/C++",
  "Java(Core)",
  "Data Structures & Algorithm",
  "Linux",
  "Testing",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Github Actions",
  "GraphQL",
  "Vercel",
  "Render",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-2 md:px-6 mx-auto">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Skills &amp; Technologies
          </h1>
          <p className="text-xl leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            Experienced in building real-world projects from scratch, with
            hands-on knowledge of frontend frameworks, backend APIs, databases,
            and deployment tools.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-xl text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
