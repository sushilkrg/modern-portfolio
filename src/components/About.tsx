// import React from "react";

// function About() {
//   return (
//     <div id="about" className="relative min-h-auto flex flex-col items-center container mx-3 md:mx-auto py-30">
//       <h1 className="text-2xl md:text-5xl font-bold pb-12">About Me</h1>
//       <div>
//         <p className="my-2 text-xl">
//         → MCA Student & Passionate Developer with a strong focus on building
//           impactful real-world applications.
//         </p>
//         <p className="my-2 text-xl">
//         → Excellent Problem Solver, having solved 300+ data structure and
//           algorithm problems across coding platforms.
//         </p>
//         <p className="my-2 text-xl">
//         → Project-Oriented Mindset, with hands-on experience in developing
//           full-stack applications and innovative solutions.
//         </p>
//         <p className="my-2 text-xl">
//         → Strong Interpersonal & Communication Skills, with a continuous drive
//           to learn, grow, and collaborate effectively.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

"use client";

import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative min-h-auto text-center py-12 md:py-30">
      <h1 className="text-2xl md:text-5xl font-bold pb-12">About Me</h1>
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center container mx-auto md:mx-auto py-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 md:max-w-[50%] text-center md:text-left"
        >
          <div>
            <p className="my-2 px-4 text-xl text-left">
              MCA Student & Passionate Software Developer with a strong focus on
              building real-world applications, solving 300+ DSA problems, and
              developing innovative full-stack solutions.
            </p>
            <p className="my-2 px-4 text-xl text-left">
              I possess strong interpersonal and communication skills with a
              growth mindset, always eager to learn, collaborate, and make a
              meaningful impact through technology.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 mb-8 md:mb-0 md:max-w-[30%] md:ml-8"
        >
          <img
            src="/images/my-img.jpg" // Replace with your image path
            alt="About me"
            className=" shadow-lg w-48 h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20  object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
