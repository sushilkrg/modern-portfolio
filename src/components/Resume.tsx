"use client";

import React from "react";
import { Download, Eye } from "lucide-react";
import Link from "next/link";
import { ChipIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto"
    >
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Resume
        </h1>
      </div>

      <div className="relative w-full h-[75vh] sm:h-[70vh] border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden shadow-lg">
        {/* Embed half-view PDF */}
        <object
          data="/sushil_resume.pdf"
          type="application/pdf"
          className="w-full h-full pointer-events-none"
        >
          <p className="p-4 text-center text-sm text-zinc-600 dark:text-zinc-300">
            PDF preview not supported.{" "}
            <a
              href="/sushil_resume.pdf"
              className="underline text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download here
            </a>
          </p>
        </object>

        {/* Overlay Gradient + Action Buttons */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 dark:from-zinc-900/90 to-transparent flex flex-col items-center justify-end p-4 gap-2">
          <Link
            href="/sushil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition"
          >
            <Eye className="w-4 h-4" />
            View Full Resume
          </Link>

          <a
            href="/sushil_resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-white hover:underline"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
