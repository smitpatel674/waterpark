"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Baby, Users, HeartPulse, LifeBuoy, Map } from "lucide-react";

const features = [
  {
    icon: <Baby className="w-8 h-8 text-coral-500" />,
    title: "Dedicated Kids Zone",
    desc: "Safe, appropriately sized inflatables with constant monitoring.",
  },
  {
    icon: <Users className="w-8 h-8 text-aqua-500" />,
    title: "Adult Adventure Zone",
    desc: "High-intensity obstacles designed specifically for older thrill-seekers.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-ocean-500" />,
    title: "Trained Safety Team",
    desc: "Certified lifeguards and staff stationed across all attraction zones.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Safe Structures",
    desc: "Premium, commercial-grade inflatables with strict safety standards.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-purple-500" />,
    title: "Family-Friendly",
    desc: "A welcoming, clean, and well-managed environment for the whole family.",
  },
  {
    icon: <Map className="w-8 h-8 text-yellow-500" />,
    title: "Separate Areas",
    desc: "Carefully planned layout to prevent overcrowding and mix-ups.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Safety() {
  return (
    <section className="relative py-24 bg-cyan-100" id="safety">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] z-10 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-cyan-100"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-ocean-950 mb-6 leading-tight">
                Adventure Designed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-aqua-600">
                  for Everyone
                </span>
              </h2>
              <p className="text-lg text-ocean-800/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Aquatown is being designed with dedicated experiences for adults, children, families, and adventure seekers, supported by carefully planned activity zones and safety-focused operations.
              </p>
              
              <div className="hidden lg:block relative w-full aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm border border-white/40 shadow-xl p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <motion.div 
                  className="absolute right-0 bottom-0 w-64 h-64 bg-aqua-400/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-ocean-950 mb-2">Safety First</h3>
                    <p className="text-ocean-800/70 font-medium">Our top priority is ensuring a secure environment so you can focus purely on the fun.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-ocean-950 mb-2">{feature.title}</h4>
                  <p className="text-ocean-800/70 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
