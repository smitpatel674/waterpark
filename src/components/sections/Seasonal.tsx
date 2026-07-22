"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const seasons = [
  {
    id: "summer",
    title: "Summer Splash",
    desc: "Giant inflatable water slides and cool refreshing obstacle courses perfect for the summer heat.",
    color: "from-yellow-400 to-coral-500",
    bg: "bg-yellow-50",
  },
  {
    id: "monsoon",
    title: "Monsoon Madness",
    desc: "Rain-themed interactive splash zones and high-intensity balance challenges.",
    color: "from-aqua-500 to-ocean-600",
    bg: "bg-aqua-50",
  },
  {
    id: "winter",
    title: "Winter Wave",
    desc: "Heated relaxation pools alongside thrilling high-speed inflatable rides.",
    color: "from-purple-400 to-indigo-600",
    bg: "bg-indigo-50",
  },
];

export default function Seasonal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % seasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + seasons.length) % seasons.length);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-ocean-950 mb-6"
          >
            A New Adventure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-purple-500">
              Every Season
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ocean-800/80 font-medium leading-relaxed text-balance"
          >
            Aquatown will continuously introduce new inflatable rides, slides, challenges, and floating attractions so every visit feels fresh, exciting, and completely different.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-8",
                  seasons[currentIndex].bg
                )}
              >
                {/* Decorative Abstract Shape representing the ride */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.div
                    initial={{ rotate: -10, y: 20 }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={cn(
                      "w-48 h-48 md:w-72 md:h-72 rounded-[3rem] shadow-xl bg-gradient-to-tr border-8 border-white/50 backdrop-blur-md",
                      seasons[currentIndex].color
                    )}
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="inline-block px-4 py-1.5 mb-4 bg-white rounded-full text-ocean-900 font-bold text-sm tracking-widest uppercase shadow-sm">
                      Concept
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-ocean-950 mb-4 leading-tight">
                      {seasons[currentIndex].title}
                    </h3>
                    <p className="text-ocean-800/80 font-medium text-lg leading-relaxed mb-8">
                      {seasons[currentIndex].desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 md:bottom-auto md:top-1/2 left-0 right-0 flex justify-center md:justify-between px-6 md:-translate-y-1/2 gap-4 md:gap-0 z-20">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-ocean-900 hover:bg-white hover:scale-110 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-ocean-900 hover:bg-white hover:scale-110 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Timeline Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {seasons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-10 bg-ocean-600" : "w-2.5 bg-ocean-200 hover:bg-ocean-300"
                )}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
