"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const bubbleData = [...Array(10)].map(() => ({
  width: Math.random() * 100 + 50,
  height: Math.random() * 100 + 50,
  left: `${Math.random() * 100}%`,
  xOffset: Math.random() * 100 - 50,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

export default function Countdown() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-ocean-600 to-ocean-900 overflow-hidden">
      
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbleData.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: bubble.width,
              height: bubble.height,
              left: bubble.left,
              bottom: "-20%",
            }}
            animate={{
              y: [0, -1000],
              x: [0, bubble.xOffset],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 shadow-2xl text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The Adventure <span className="text-aqua-400">Begins Soon</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-12">
              Official Launch Date Will Be Announced Soon
            </p>
          </motion.div>

          {/* Abstract Countdown Visuals (Static since date is TBA) */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg mb-3 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-md tracking-tighter">
                    00
                  </span>
                </div>
                <span className="text-white/70 text-xs md:text-sm font-bold uppercase tracking-widest">{label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Be the first to receive launch updates, exclusive announcements, attraction reveals, and opening offers.
            </p>
            
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/90 text-ocean-950 placeholder:text-ocean-900/50 px-6 py-4 rounded-full outline-none focus:ring-4 focus:ring-aqua-400/50 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white px-6 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span className="hidden sm:inline">Sent!</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Notify Me</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
