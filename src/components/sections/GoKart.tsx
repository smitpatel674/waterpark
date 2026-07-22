"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GoKart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax and movement effects
  const kartX = useTransform(scrollYProgress, [0.2, 0.8], ["-100%", "100%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 bg-ocean-950 overflow-hidden min-h-[800px] flex items-center">

      {/* Cinematic Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950"></div>
        {/* Abstract track lines */}
        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-white/5 skew-y-3 blur-sm"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-aqua-500/20 shadow-[0_0_15px_rgba(51,214,255,0.5)]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 bg-coral-500/20 border border-coral-500/50 text-coral-400 font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(255,92,51,0.3)]"
          >
            Coming Soon
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            India’s First <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 to-yellow-400">
              Water Go-Kart
            </span> Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-medium leading-relaxed"
          >
            Feel the rush as you race across the water in a completely new go-karting experience built for speed, excitement, and unforgettable competition.
          </motion.p>
        </div>
      </div>

      {/* Animated Kart & Water Trail */}
      <motion.div
        style={{ x: kartX, opacity }}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 pointer-events-none"
      >
        <div className="relative w-64 md:w-96 h-32 md:h-48 mx-auto">
          {/* Speed trails */}
          <div className="absolute top-1/2 right-full w-96 h-2 -translate-y-1/2 bg-gradient-to-l from-white/80 to-transparent blur-sm rounded-full"></div>
          <div className="absolute top-1/2 right-full w-64 h-1 -translate-y-1/2 bg-gradient-to-l from-aqua-400 to-transparent rounded-full translate-y-4"></div>
          <div className="absolute top-1/2 right-full w-48 h-1 -translate-y-1/2 bg-gradient-to-l from-coral-400 to-transparent rounded-full -translate-y-4"></div>

          {/* Abstract Go-Kart Shape */}
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-yellow-500 rounded-full blur-xl opacity-50"></div>
          <div className="absolute inset-y-8 inset-x-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <span className="text-ocean-950 font-black italic text-2xl tracking-tighter">RACE</span>
          </div>

          {/* Splash particles */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute -bottom-4 -left-8 w-16 h-16 bg-white/40 rounded-full blur-md"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 0.7, delay: 0.2 }}
            className="absolute -top-4 -left-4 w-12 h-12 bg-aqua-400/40 rounded-full blur-md"
          ></motion.div>
        </div>
      </motion.div>

    </section>
  );
}
