"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section
  id="home"
  className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
> 
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[180px]"
      />

      <motion.span
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-4 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
      >
        🚀 AI Web Development Agency
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative z-10 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
      >
        We build{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
          modern AI websites
        </span>{" "}
        that convert visitors into clients.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="relative z-10 mt-8 max-w-2xl text-lg text-gray-400"
      >
        NovaFlow AI creates premium websites, SaaS platforms and AI
        integrations for startups and businesses around the world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-4"
      >
        <a href="#contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition"
  >
    Get Started
  </motion.button>
</a>

        <a href="#portfolio">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-blue-500"
  >
    View Portfolio
  </motion.button>
</a>
      </motion.div>
    </section> 
  );
}
