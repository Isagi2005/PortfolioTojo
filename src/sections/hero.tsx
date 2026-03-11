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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-950 dark:to-gray-900">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-300/20 dark:bg-green-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-300/20 dark:bg-emerald-600/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-300/15 dark:bg-teal-600/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-medium mb-8"
        >
          <Leaf className="w-4 h-4" />
          <span>Biodiversity Conservation Researcher</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight"
        >
          <span className="block">{portfolioData.name.split(" ")[0]}</span>
          <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
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
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed"
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
