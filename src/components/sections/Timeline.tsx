"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Lightbulb,
  Plane,
  Search,
  HardHat,
  PartyPopper,
  Rocket,
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "The Vision Begins",
    description:
      "A bold dream was born — to create an unforgettable water adventure experience unlike anything India had ever seen. The journey of Aquatown started with a vision to redefine water entertainment through innovation, adventure, and world-class attractions.",
    icon: Lightbulb,
    color: "from-aqua-400 to-aqua-600",
    glowColor: "shadow-aqua-500/40",
    status: "completed",
  },
  {
    year: "2024",
    title: "Inspiration from Dubai",
    description:
      "A visit to Dubai introduced us to world-class inflatable water attractions and immersive entertainment. Inspired by this experience, we envisioned bringing the concept to India—bigger, better, and unlike anything seen before.",
    icon: Plane,
    color: "from-ocean-400 to-ocean-600",
    glowColor: "shadow-ocean-500/40",
    status: "completed",
  },
  {
    year: "2025",
    title: "Research & Planning",
    description:
      "A year dedicated to extensive research, market analysis, location selection, global partnerships, attraction planning, and designing an experience tailored for Indian visitors while meeting international standards.",
    icon: Search,
    color: "from-cyan-400 to-cyan-600",
    glowColor: "shadow-cyan-500/40",
    status: "completed",
  },
  {
    year: "2026",
    title: "Building the Dream",
    description:
      "Construction officially began as the Aquatown vision started taking shape. Every attraction, from giant inflatable adventure zones to India\u2019s First Water Go-Kart, was carefully designed to deliver a world-class experience focused on fun, innovation, and safety.",
    icon: HardHat,
    color: "from-coral-400 to-coral-600",
    glowColor: "shadow-coral-500/40",
    status: "current",
  },
  {
    year: "2027",
    title: "Grand Opening",
    description:
      "Aquatown proudly opens as India\u2019s Biggest Inflatable Water Adventure Park, introducing a completely new category of water entertainment. Guests will enjoy giant inflatable obstacle courses, adventure zones, family attractions, relaxing experiences, and India\u2019s First Water Go-Kart.",
    icon: PartyPopper,
    color: "from-yellow-400 to-yellow-600",
    glowColor: "shadow-yellow-500/40",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Something Even Bigger Is Coming...",
    description:
      "The journey doesn\u2019t stop here. Aquatown is already working on the next generation of water adventures, with exciting new attractions, larger experiences, and innovative concepts currently under development.",
    icon: Rocket,
    color: "from-purple-400 to-purple-600",
    glowColor: "shadow-purple-500/40",
    status: "upcoming",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950 overflow-hidden"
      id="journey"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-aqua-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-coral-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-5 bg-white/10 backdrop-blur-sm border border-white/10 text-aqua-300 font-bold uppercase tracking-widest text-xs rounded-full">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-300 to-aqua-100">
              Journey
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg font-medium">
            From a bold vision to India&apos;s biggest inflatable water
            adventure — follow the Aquatown story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line (static background) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10"></div>

          {/* Animated Progress Line — stops at current year (2026), does not extend into future */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-aqua-400 via-aqua-300 to-coral-400 origin-top max-h-[60%]"
          ></motion.div>

          {/* Milestone Items */}
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start mb-16 last:mb-0 md:items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg ${milestone.glowColor} ${
                      milestone.status === "current"
                        ? "ring-4 ring-coral-400/50 ring-offset-2 ring-offset-ocean-950"
                        : ""
                    }`}
                  >
                    <Icon size={20} className="text-white" />
                    {milestone.status === "current" && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral-400 animate-ping"></span>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div
                    className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                      milestone.status === "current"
                        ? "bg-white/10 backdrop-blur-lg border-coral-500/40 shadow-xl shadow-coral-500/10"
                        : milestone.status === "completed"
                        ? "bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20"
                        : "bg-white/[0.03] backdrop-blur-sm border-white/5 hover:bg-white/[0.07] hover:border-white/10"
                    }`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        milestone.status === "current"
                          ? "bg-coral-500/20 text-coral-300"
                          : milestone.status === "completed"
                          ? "bg-aqua-500/15 text-aqua-300"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {milestone.status === "current" && (
                        <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse"></span>
                      )}
                      {milestone.year}
                      {milestone.status === "current" && " — Now"}
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-black mb-3 ${
                        milestone.status === "upcoming"
                          ? "text-white/60"
                          : "text-white"
                      }`}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base leading-relaxed font-medium ${
                        milestone.status === "upcoming"
                          ? "text-white/40"
                          : "text-white/70"
                      }`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
