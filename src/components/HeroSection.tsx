// import React from "react";
// import { cn } from "@/lib/utils";
// import { Spotlight } from "./ui/Spotlight";

// export default function HeroSection() {
//   return (
//     <div className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-black antialiased md:items-center md:justify-center">
//       <div
//         className={cn(
//           "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
//           "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
//         )}
//       />

//       <Spotlight
//         className="-top-40 left-0 md:-top-20 md:left-60"
//         fill="white"
//       />
//       <div className="relative z-10 mx-auto w-full flex items-center justify-center flex-col max-w-7xl p-4 md:pt-20">
//         <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-4xl font-bold text-transparent md:text-7xl">
//           <span className="text-4xl">Hii, 👋 </span><br /> I'm Sushil Kumar
//         </h1>
//         <p className="text-left text-2xl md:text-3xl text-neutral-300">
//         Full-Stack Software Developer
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-10 text-white md:px-10">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-4xl flex-col items-start gap-4 text-balance text-left"
      >
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-4xl sm:text-5xl">Hi, 👋</span><br />I&apos;m Sushil Kumar
        </h1>
        <p className="text-xl text-neutral-300 sm:text-2xl md:text-3xl">
          Full-Stack Software Developer
        </p>
        <a  href="https://www.linkedin.com/in/sushilkumar01" target="_blank">

        <button className="bg-green-500 cursor-pointer  text-black text-xl border border-none rounded-full px-4 py-2">Connect with me🚀</button>
        </a>
      </motion.div>
    </div>
  );
}
