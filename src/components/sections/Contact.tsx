"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation2, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-ocean-950 mb-4"
          >
            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-500 to-ocean-500">Aquatown</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ocean-800/70 font-medium"
          >
            Get in touch or find your way to India&apos;s ultimate water adventure.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cyan-50 rounded-[2rem] p-2 overflow-hidden shadow-xl border border-cyan-100"
          >
            <div className="relative w-full h-[300px] rounded-[1.5rem] overflow-hidden bg-ocean-100 mb-6 group">
              {/* Abstract Map Visual (Placeholder for actual Maps iframe) */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10 mix-blend-multiply"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-coral-500 drop-shadow-xl z-20"
                >
                  <MapPin fill="currentColor" size={48} className="text-white" />
                </motion.div>
                <div className="w-8 h-2 bg-ocean-900/20 rounded-full blur-sm mt-2"></div>
                <div className="mt-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg font-bold text-ocean-950 text-sm">
                  Aquatown Site
                </div>
              </div>

              {/* Water features on map */}
              <div className="absolute bottom-10 left-10 w-32 h-16 bg-aqua-400/30 rounded-full blur-xl transform rotate-12"></div>
              <div className="absolute top-10 right-10 w-48 h-24 bg-ocean-500/20 rounded-full blur-xl transform -rotate-12"></div>
            </div>

            <div className="px-6 pb-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-aqua-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-950 text-lg mb-1">Address</h4>
                    <p className="text-ocean-800/80 font-medium">E/4, Vatsalya City, Detroj Road,<br/>Kadi – 382715, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a href="#" className="flex-1 py-3 px-4 rounded-xl bg-ocean-900 hover:bg-ocean-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors">
                    <Navigation2 size={18} /> Get Directions
                  </a>
                  <a href="tel:+916355918057" className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-cyan-50 border border-cyan-100 text-ocean-900 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
                    <Phone size={18} className="text-aqua-500" /> Call Now
                  </a>
                  <a href="mailto:info@aquatown.in" className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-cyan-50 border border-cyan-100 text-ocean-900 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
                    <Mail size={18} className="text-aqua-500" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-cyan-50 relative overflow-hidden group"
          >
            {/* Water theme decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-aqua-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

            <h3 className="text-2xl font-black text-ocean-950 mb-6">Send a Message</h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-ocean-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-cyan-50/50 border border-cyan-100 focus:border-aqua-400 focus:ring-2 focus:ring-aqua-400/20 rounded-xl px-4 py-3 outline-none transition-all text-ocean-950 font-medium placeholder:text-ocean-900/30"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-ocean-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full bg-cyan-50/50 border border-cyan-100 focus:border-aqua-400 focus:ring-2 focus:ring-aqua-400/20 rounded-xl px-4 py-3 outline-none transition-all text-ocean-950 font-medium placeholder:text-ocean-900/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ocean-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-cyan-50/50 border border-cyan-100 focus:border-aqua-400 focus:ring-2 focus:ring-aqua-400/20 rounded-xl px-4 py-3 outline-none transition-all text-ocean-950 font-medium placeholder:text-ocean-900/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-ocean-900 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-cyan-50/50 border border-cyan-100 focus:border-aqua-400 focus:ring-2 focus:ring-aqua-400/20 rounded-xl px-4 py-3 outline-none transition-all text-ocean-950 font-medium placeholder:text-ocean-900/30 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-ocean-500 hover:from-aqua-400 hover:to-ocean-400 text-white font-bold text-lg shadow-lg shadow-aqua-500/30 hover:shadow-aqua-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
