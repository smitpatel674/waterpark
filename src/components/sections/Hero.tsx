"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden pt-20">
      {/* Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/30 to-ocean-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          style={{ y: yText, opacity }}
          className="flex flex-col items-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Coming Soon
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] tracking-tight"
          >
            India’s Biggest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-300 via-aqua-100 to-white drop-shadow-sm">
              Inflatable Water Adventure
            </span>
            <br /> Is Coming
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mb-10 leading-relaxed text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Get ready for giant inflatable obstacles, thrilling water slides, floating adventures, India’s first Water Go-Kart experience, relaxing lazy river moments, and unforgettable fun for every age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#attractions"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-lg shadow-xl hover:shadow-coral-500/30 hover:-translate-y-1 transition-all"
            >
              Explore Attractions
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-lg shadow-xl border border-white/30 hover:-translate-y-1 transition-all"
            >
              Get Launch Updates
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cyan-50"
          ></path>
        </svg>
      </div>
    </section>
  );
}
