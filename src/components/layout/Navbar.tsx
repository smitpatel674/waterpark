"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLenis } from "lenis/react";

const navLinks = [
  { name: "Attractions", href: "#attractions" },
  { name: "Experience", href: "#experience" },
  { name: "Safety", href: "#safety" },
  { name: "Location", href: "#contact" }, // Fixed Location link target
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(href, { offset: -80 }); // Offset for the fixed header
      } else {
        // Fallback for native smooth scroll if lenis isn't ready
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

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
        <a href="#" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-2 group z-50 relative h-10 w-48 md:w-56 block">
          <Image
            src="/image.png"
            alt="Aquatown Logo"
            fill
            className={cn(
              "object-contain object-left origin-left scale-[2.5] md:scale-[3] transition-all",
              isScrolled || isMobileMenuOpen ? "mix-blend-multiply" : "mix-blend-screen"
            )}
            priority
          />
        </a>

        {/* Desktop Nav - Centered with improved pill design */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-[15px] font-bold tracking-wide px-5 py-2 rounded-full transition-all duration-300",
                isScrolled
                  ? "text-slate-600 hover:bg-slate-100/80 hover:text-ocean-950"
                  : "text-white/90 hover:bg-white/10 hover:text-white hover:backdrop-blur-md"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Empty div for flex-between balance, or we can just let it sit right */}
        <div className="hidden md:block w-[180px]"></div>

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
            <div className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-bold text-slate-800 p-4 rounded-2xl hover:bg-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
