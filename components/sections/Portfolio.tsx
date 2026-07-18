"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI SaaS Dashboard",
      category: "Next.js • Prisma • AI",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    },
    {
      title: "Dental Clinic",
      category: "Business Website",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    },
    {
      title: "Restaurant Landing",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    },
    {
      title: "Crypto Platform",
      category: "FinTech UI",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&q=80",
    },
  ];

  return (
    <section id="portfolio" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="mx-auto mt-5 mb-16 max-w-2xl text-center text-gray-400">
          Some of our latest premium websites and digital experiences.
        </p>

        <div className="grid gap-10 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#101010]"
            >
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">

                  <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
                    <ExternalLink size={18} />
                    View Project
                  </button>

                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-blue-400">
                  {project.category}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
