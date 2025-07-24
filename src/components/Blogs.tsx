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
    title: 'Mastering REST APIs with Django Rest Framework',
    description:
      'Mastering REST APIs with Django REST Framework (DRF) empowers you to build robust, scalable, and secure backend systems. DRF simplifies API development with tools like serializers, viewsets, and routers. It supports powerful features such as authentication, permissions, and pagination out of the box. Ideal for both beginners and pros, DRF accelerates modern web and mobile app development.',
    image: '/images/django-rest-image.png',
    link: 'https://medium.com/@yourusername/django-rest-api',
  },
  {
    title: 'Building Full-stack Apps with MERN',
    description:
      'Building full-stack apps with the MERN stack—MongoDB, Express.js, React, and Node.js—offers a seamless JavaScript development experience from frontend to backend. MongoDB handles flexible data storage, Express and Node power the backend, and React builds dynamic user interfaces. This stack enables rapid, scalable app development and is ideal for creating modern web applications with efficient performance and responsiveness.',
    image: '/images/MERN-image.png',
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
