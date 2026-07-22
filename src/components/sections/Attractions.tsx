"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const attractions = [
  {
    title: "Inflatable Adventure Park",
    desc: "India’s largest inflatable water obstacle course with climbing walls, slides, balance challenges, and exciting adventure zones.",
    color: "from-aqua-400 to-ocean-500",
    image: "/intro-img.png",
  },
  {
    title: "Water Go-Kart",
    desc: "Experience India’s first water-based go-kart racing attraction with a unique blend of speed and water adventure.",
    badge: "India’s First",
    color: "from-coral-400 to-coral-600",
    image: "/attr-gokart.png",
  },
  {
    title: "Adult Inflatable Pool",
    desc: "A massive inflatable water playground designed for thrill seekers with challenging obstacles and interactive activities.",
    color: "from-ocean-500 to-ocean-800",
    image: "/hero-bg.png",
  },
  {
    title: "Kids Inflatable Pool",
    desc: "A dedicated children’s water play area featuring safe inflatable slides, splash games, and fun-filled attractions.",
    color: "from-yellow-300 to-yellow-500",
    image: "/attr-pool.png",
  },
  {
    title: "Lazy River",
    desc: "Float peacefully through a scenic lazy river designed for relaxation between adventure experiences.",
    color: "from-aqua-300 to-aqua-500",
    image: "/attr-pool.png",
  },
  {
    title: "Giant Inflatable Slides",
    desc: "Slide into excitement with oversized inflatable water slides suitable for different thrill levels.",
    color: "from-purple-400 to-purple-600",
    image: "/attr-slides.png",
  },
];

export default function Attractions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll into horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-ocean-950" id="attractions">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-aqua-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Dive Into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-aqua-200">Adventure</span>
            </h2>
            <p className="text-white/70 max-w-2xl text-lg font-medium text-balance">
              Explore a world of inflatable challenges, high-speed excitement, floating fun, and relaxing water experiences.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20 relative z-10 w-max pb-10">
          {attractions.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-[300px] md:w-[400px] h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer shrink-0"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Dark Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/60 to-transparent opacity-90 z-10"></div>
              
              {/* Color Tint based on original card color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color z-10`}></div>
              
              {/* Overlay pattern */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay z-10"></div>

              {item.badge && (
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white text-ocean-950 font-bold text-xs uppercase tracking-widest rounded-full shadow-lg z-20">
                  {item.badge}
                </div>
              )}

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 drop-shadow-md">{item.title}</h3>
                  <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Discover More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
              
              {/* Animated glowing border on hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-[2rem] transition-colors duration-500 z-30"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
