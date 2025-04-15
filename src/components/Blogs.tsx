'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type BlogPost = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'Mastering REST APIs with Django',
    description:
      'Learn how to build scalable, secure, and efficient REST APIs using Django and Django REST Framework.  am enjoying a lot. I have worked on my bowling and fitness, feeling fresh and I am enjoying bowling. Even if the ball tails a bit (due to the use of saliva), it becomes easier to get wickets (especially bowled and lbw) dismissals. The wicket is on the slower side. Just tried to attack the stumps as much as I can.',
    image: '/images/flatmates.png',
    link: 'https://medium.com/@yourusername/django-rest-api',
  },
  {
    title: 'Building Full-stack Apps with MERN',
    description:
      'This article dives into creating robust full-stack apps with MongoDB, Express, React, and Node.js. am enjoying a lot. I have worked on my bowling and fitness, feeling fresh and I am enjoying bowling. Even if the ball tails a bit (due to the use of saliva), it becomes easier to get wickets (especially bowled and lbw) dismissals. The wicket is on the slower side. Just tried to attack the stumps as much as I can',
    image: '/images/insighthub.png',
    link: 'https://medium.com/@yourusername/mern-stack-guide',
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-12 px-4 md:px-24 container mx-auto">
    {/* <section id="blogs" className="py-12 px-4 max-w-6xl mx-auto"> */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Blogs/Articles</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
           <motion.div
           key={index}
           className="bg-gray-100 dark:bg-[#1a1a1a]  shadow-md transition hover:shadow-lg"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4, delay: index * 0.1 }}
         >
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row  gap-6 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 hover:shadow-md hover:border hover:border-white transition-shadow duration-300 group"
          >
            <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {post.title}
              </h3>
              <p className="text-md text-zinc-700 dark:text-zinc-300">{post.description}</p>
            </div>
          </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
