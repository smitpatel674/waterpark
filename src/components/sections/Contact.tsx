"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Navigation2,
  Phone,
  Send,
  ShieldCheck,
  Waves,
} from "lucide-react";

const fieldClass =
  "w-full rounded-2xl border border-ocean-900/10 bg-slate-50 px-4 py-3.5 text-ocean-950 outline-none transition placeholder:text-ocean-900/30 hover:border-aqua-500/40 focus:border-aqua-500 focus:bg-white focus:ring-4 focus:ring-aqua-500/10";

export default function Contact() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f6fbfd] py-24 md:py-32"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-aqua-400/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,77,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,77,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="container mx-auto px-5 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-aqua-500/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ocean-800 shadow-sm"
          >
            <Waves className="h-4 w-4 text-aqua-500" />
            Plan your visit
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-balance text-4xl font-black tracking-tight text-ocean-950 md:text-6xl"
          >
            Your next adventure
            <span className="block text-gradient">starts right here.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-ocean-800/65 md:text-lg"
          >
            Find your way to Aquatown or send us a message. Our team is ready
            to help you plan a perfect day on the water.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(0,51,77,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative isolate min-h-[520px] overflow-hidden bg-ocean-950 p-7 text-white md:p-10 lg:min-h-full"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(51,214,255,0.3),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(255,92,51,0.18),transparent_30%)]" />
            <div className="absolute -right-28 top-28 -z-10 h-72 w-72 rounded-full border border-aqua-400/15" />
            <div className="absolute -right-16 top-40 -z-10 h-48 w-48 rounded-full border border-aqua-400/15" />

            <div className="flex h-full flex-col">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua-100 backdrop-blur">
                    Aquatown, Gujarat
                  </span>
                  <Waves className="h-7 w-7 text-aqua-400" />
                </div>

                <h3 className="max-w-sm text-3xl font-black leading-tight md:text-4xl">
                  Make a splash,
                  <span className="block text-aqua-400">minutes from Kadi.</span>
                </h3>
                <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/60 md:text-base">
                  Easy to reach, impossible to forget. Tap below for a direct
                  route to the park.
                </p>
              </div>

              <div className="relative my-8 min-h-40 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(35deg,transparent_35%,rgba(51,214,255,0.08)_35%,rgba(51,214,255,0.08)_38%,transparent_38%,transparent_62%,rgba(255,255,255,0.06)_62%,rgba(255,255,255,0.06)_65%,transparent_65%)] bg-[size:72px_72px]" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <span className="absolute h-20 w-20 animate-ping rounded-full bg-aqua-400/15 [animation-duration:2.4s]" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-ocean-950 bg-coral-500 shadow-[0_14px_35px_rgba(255,92,51,0.45)]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span className="mt-3 whitespace-nowrap rounded-xl bg-white px-3 py-2 text-xs font-black text-ocean-950 shadow-xl">
                    You&apos;ve found us
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua-400/15 text-aqua-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                      Park address
                    </p>
                    <address className="mt-1 text-sm font-semibold not-italic leading-6 text-white/85">
                      E/4, Vatsalya City, Detroj Road
                      <br />
                      Kadi – 382715, Gujarat, India
                    </address>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=E%2F4%2C%20Vatsalya%20City%2C%20Detroj%20Road%2C%20Kadi%2C%20Gujarat%20382715"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 font-black text-ocean-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-aqua-50"
                >
                  <span className="flex items-center gap-3">
                    <Navigation2 className="h-5 w-5 text-aqua-500" />
                    Get directions
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="p-7 md:p-10 lg:p-12"
          >
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-aqua-600">
                  We&apos;re here to help
                </p>
                <h3 className="text-3xl font-black text-ocean-950">
                  Send us a message
                </h3>
              </div>
              <div className="flex gap-2">
                <a
                  href="tel:+916355918057"
                  aria-label="Call Aquatown"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ocean-900/10 text-ocean-800 transition hover:border-aqua-500 hover:bg-aqua-50 hover:text-aqua-600"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@aquatown.in"
                  aria-label="Email Aquatown"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ocean-900/10 text-ocean-800 transition hover:border-aqua-500 hover:bg-aqua-50 hover:text-aqua-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-ocean-900"
                  htmlFor="contact-name"
                >
                  Full name
                </label>
                <input
                  className={fieldClass}
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-ocean-900"
                    htmlFor="contact-phone"
                  >
                    Phone number
                  </label>
                  <input
                    className={fieldClass}
                    id="contact-phone"
                    inputMode="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    type="tel"
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-ocean-900"
                    htmlFor="contact-email"
                  >
                    Email address
                  </label>
                  <input
                    className={fieldClass}
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-ocean-900"
                  htmlFor="contact-message"
                >
                  How can we help?
                </label>
                <textarea
                  className={`${fieldClass} min-h-32 resize-y`}
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your visit, group size, or question..."
                  required
                  rows={4}
                />
              </div>

              <button
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-aqua-500 to-ocean-800 px-6 py-4 text-base font-black text-white shadow-[0_14px_30px_rgba(0,163,204,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(0,163,204,0.35)] focus:outline-none focus:ring-4 focus:ring-aqua-500/25"
                type="button"
              >
                Send message
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-7 grid gap-3 border-t border-ocean-900/10 pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-ocean-800/65">
                <Clock3 className="h-5 w-5 shrink-0 text-aqua-500" />
                Replies within 24 hours
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-ocean-800/65">
                <ShieldCheck className="h-5 w-5 shrink-0 text-aqua-500" />
                Your details stay private
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
