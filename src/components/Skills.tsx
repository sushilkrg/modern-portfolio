// // <div className="relative min-h-[40rem] flex flex-col bg-gray-700 items-center container mx-3 md:mx-auto py-20">
// //   <h1 className="text-2xl md:text-5xl font-bold pb-8">Skills & Technology</h1>

// "use client";

// import React from "react";
// import { motion } from 'framer-motion';

// type SkillCategory = {
//   title: string;
//   skills: string[];
// };

// const skillsData: SkillCategory[] = [
//   {
//     title: "Programming Languages",
//     skills: ["Python", "JavaScript", "C/C++", "Java"],
//   },
//   {
//     title: "Frontend Skills",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "ShadCN UI",
//       "Aceternity UI",
//       "Redux Toolkit",
//       "Material UI",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Backend Skills",
//     skills: [
//       "Node.js",
//       "Django",
//       "Django REST Framework",
//       "ExpressJS",
//       "Prisma ORM",
//       "REST api",
//       "graphQL",
//     ],
//   },
//   {
//     title: "Databases",
//     skills: ["PostgreSQL", "MongoDB", "Firebase Firestore", "NeonDB"],
//   },
//   {
//     title: "Other Tools",
//     skills: [
//       "Git",
//       "GitHub",
//       "Docker",
//       "Kubernetes",
//       "Firebase",
//       "Vercel",
//       "Render",
//       "CI/CD",
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-12 px-2 md:px-6 max-w-6xl mx-auto">
//     <h1 className="text-2xl text-center md:text-5xl font-bold pb-12">Skills & Technology</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//       {skillsData.map((category) => (
//         <div
//           key={category.title}
//           className="group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.02] hover:border-amber-50"
//         >
//           <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
//             {category.title}
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {category.skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="text-sm px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
//   );
// };

// export default Skills;

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C++', 'Java'],
  },
  {
    title: 'Frontend Skills',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'Aceternity UI',
      'Redux Toolkit',
      'Material UI',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend Skills',
    skills: [
      'Node.js',
      'Django',
      'Django REST Framework',
      'ExpressJS',
      'Prisma ORM',
      'REST api',
      'graphQL',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase Firestore', 'NeonDB'],
  },
  {
    title: 'Other Tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Kubernetes',
      'Firebase',
      'Vercel',
      'Render',
      'CI/CD',
    ],
  },
];

const getLogoPath = (skill: string) =>
  `/logos/${skill.toLowerCase().replace(/[\s/.+]+/g, '')}.svg`;

const skillColors: Record<string, string> = {
  React: 'text-sky-500',
  'Next.js': 'text-black dark:text-white',
  JavaScript: 'text-yellow-400',
  TypeScript: 'text-blue-500',
  Python: 'text-yellow-500',
  'Tailwind CSS': 'text-cyan-400',
  'Redux Toolkit': 'text-purple-600',
  MongoDB: 'text-green-600',
  Firebase: 'text-yellow-400',
  Docker: 'text-blue-400',
  Git: 'text-orange-500',
  GitHub: 'text-gray-800 dark:text-white',
  PostgreSQL: 'text-blue-700',
  Django: 'text-green-700',
  GraphQL: 'text-pink-500',
  'Node.js': 'text-green-500',
  'Material UI': 'text-blue-600',
  Bootstrap: 'text-purple-500',
  Vercel: 'text-black dark:text-white',
  Render: 'text-indigo-600',
  Java: 'text-red-600',
  'C/C++': 'text-blue-700',
  ExpressJS: 'text-gray-700',
  Prisma: 'text-indigo-500',
  default: 'text-gray-500',
};

export default function Skills() {
  return (
    <section id='skills' className="py-16 px-4 md:px-12 bg-white dark:bg-[#0e0e0e] transition">
      <div className='py-8 px-4 max-w-6xl mx-auto'>

      
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-md transition hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }: { skill: string }) {
  const [imgSrc, setImgSrc] = useState(getLogoPath(skill));
  const fallbackIcon = '/logos/fallback.svg';
  const color = skillColors[skill] || skillColors.default;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col items-center gap-2 rounded-xl p-3 shadow hover:shadow-md transition text-center bg-white dark:bg-gray-300`}
      title={skill}
    >
      <Image
        src={imgSrc}
        alt={`${skill} logo`}
        width={36}
        height={36}
        onError={() => setImgSrc(fallbackIcon)}
        className={`object-contain ${color}`}
      />
      <span className=" font-medium dark:text-black">{skill}</span>
    </motion.div>
  );
}
