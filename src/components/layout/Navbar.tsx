"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Attractions", href: "#attractions" },
  { name: "Experience", href: "#experience" },
  { name: "Safety", href: "#safety" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-50 relative">
          <Image
            src="/image.png"
            alt="Aquatown Logo"
            width={180}
            height={45}
            className={cn(
              "h-10 w-auto object-contain transition-all",
              isScrolled || isMobileMenuOpen ? "mix-blend-multiply" : "mix-blend-screen"
            )}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide hover:text-aqua-500 transition-colors",
                isScrolled ? "text-slate-600" : "text-white/90 drop-shadow-sm hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm shadow-lg hover:shadow-coral-500/30 hover:-translate-y-0.5 transition-all"
          >
            Get Updates
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden z-50 p-2 rounded-full transition-colors",
            isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-center py-4 rounded-xl bg-gradient-to-r from-aqua-500 to-ocean-800 text-white font-bold text-lg shadow-lg"
              >
                Get Updates
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
