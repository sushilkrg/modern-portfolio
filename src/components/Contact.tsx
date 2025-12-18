"use client";

import React from "react";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { ChipIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 px-4 sm:px-6 md:px-16 max-w-4xl mx-auto"
    >
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Contact Me
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sushilkumar01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 transition"
        >
          <Linkedin className="w-8 h-8 mb-1" />
          {/* <span className="text-sm">LinkedIn</span> */}
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sushilkr123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-zinc-700 dark:text-zinc-300 hover:text-pink-500 transition"
        >
          <Instagram className="w-8 h-8 mb-1" />
          {/* <span className="text-sm">Instagram</span> */}
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/sushil_krg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-zinc-700 dark:text-zinc-300 hover:text-sky-500 transition"
        >
          <Twitter className="w-8 h-8 mb-1" />
          {/* <span className="text-sm">Twitter</span> */}
        </a>

        {/* Gmail */}
        <a
          href="mailto:sushilkr8207@gmail.com"
          className="flex flex-col items-center text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition"
        >
          <Mail className="w-8 h-8 mb-1" />
          {/* <span className="text-sm">Gmail</span> */}
        </a>
      </div>
    </section>
  );
};

export default Contact;
