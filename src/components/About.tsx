import React from "react";

function About() {
  return (
    <div id="about" className="relative min-h-auto flex flex-col items-center container mx-3 md:mx-auto py-30">
      <h1 className="text-2xl md:text-5xl font-bold pb-12">About Me</h1>
      <div>
        <p className="my-2 text-xl">
        → MCA Student & Passionate Developer with a strong focus on building
          impactful real-world applications.
        </p>
        <p className="my-2 text-xl">
        → Excellent Problem Solver, having solved 300+ data structure and
          algorithm problems across coding platforms.
        </p>
        <p className="my-2 text-xl">
        → Project-Oriented Mindset, with hands-on experience in developing
          full-stack applications and innovative solutions.
        </p>
        <p className="my-2 text-xl">
        → Strong Interpersonal & Communication Skills, with a continuous drive
          to learn, grow, and collaborate effectively.
        </p>
      </div>
    </div>
  );
}

export default About;
