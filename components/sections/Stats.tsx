"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let current = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      number: 30,
      suffix: "+",
      label: "Countries Served",
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      number: 24,
      suffix: "/7",
      label: "AI Support",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl border border-gray-800 bg-[#111] p-10 text-center hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
            >
              <h3 className="text-5xl font-extrabold text-blue-500">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
