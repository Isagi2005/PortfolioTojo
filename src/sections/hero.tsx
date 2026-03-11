"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, MapPin, Microscope, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ProfileAvatar } from "@/components/profile-avatar";

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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <ProfileAvatar />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-8 order-1 md:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 dark:from-green-900/50 dark:to-orange-900/40 text-green-800 dark:text-green-200 text-sm font-semibold border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm w-fit"
            >
              <Leaf className="w-4 h-4 animate-pulse" />
              <span>Conservation Researcher</span>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-xl text-green-700 dark:text-green-300 font-semibold leading-relaxed">
                Dedicated to protecting Madagascar's unique biodiversity through scientific research, community engagement, and conservation action.
              </p>
              <p className="text-base text-green-600/70 dark:text-green-400/70 leading-relaxed">
                {portfolioData.tagline}
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="p-4 rounded-lg bg-white/50 dark:bg-green-900/20 border border-green-200/30 dark:border-green-700/30 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">5+</p>
                <p className="text-xs text-green-600/70 dark:text-green-400/70">Years Research</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-green-900/20 border border-green-200/30 dark:border-green-700/30 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">10+</p>
                <p className="text-xs text-green-600/70 dark:text-green-400/70">Field Sites</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-green-900/20 border border-green-200/30 dark:border-green-700/30 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">12</p>
                <p className="text-xs text-green-600/70 dark:text-green-400/70">Publications</p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-700 dark:to-emerald-700 dark:hover:from-green-800 dark:hover:to-emerald-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold w-full"
                onClick={() => scrollToSection("about")}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20 px-6 py-3 rounded-lg font-semibold w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
