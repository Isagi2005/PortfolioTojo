"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, MapPin, Microscope } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section with introduction">
      {/* Background Gradient - Nature inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/20 to-green-50/30 dark:from-green-950/40 dark:via-orange-950/20 dark:to-green-950/30">
        {/* Animated Background Elements */}
        {/* Organic background shapes - forest green */}
        <motion.div
          className="absolute top-32 left-0 w-72 h-72 rounded-full bg-green-300/15 dark:bg-green-600/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        {/* Organic background shapes - copper/orange accent */}
        <motion.div
          className="absolute bottom-10 right-5 w-96 h-96 rounded-full bg-orange-300/10 dark:bg-orange-600/8 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        {/* Center soft glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-200/5 to-transparent dark:via-green-600/5"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 dark:from-green-900/50 dark:to-orange-900/40 text-green-800 dark:text-green-200 text-sm font-semibold mb-8 border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm"
        >
          <Leaf className="w-5 h-5 animate-pulse" />
          <span>Protecting Madagascar's Wildlife</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-950 dark:text-white mb-6 tracking-tight"
        >
          <span className="block">{portfolioData.name.split(" ")[0]}</span>
          <span className="block mt-3 bg-gradient-to-r from-green-700 via-emerald-600 to-orange-600 dark:from-green-300 dark:via-emerald-400 dark:to-orange-400 bg-clip-text text-transparent">
            {portfolioData.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light"
        >
          {portfolioData.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="max-w-3xl mx-auto text-green-900/80 dark:text-green-100/90 text-xl sm:text-2xl mb-12 leading-relaxed font-light"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm">Field Research</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
              <Microscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm">Scientific Study</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <span className="text-sm">Conservation</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection("expeditions")}
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Expeditions
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30 px-8 py-6 text-lg rounded-xl"
            onClick={() => scrollToSection("projects")}
          >
            <Microscope className="w-5 h-5 mr-2" />
            Research Projects
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 px-8 py-6 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
