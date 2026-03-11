"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Avatar Image */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-2xl opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-1">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-green-950">
            <Image
              src="/images/avatar-tojo.jpg"
              alt={portfolioData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-950 dark:text-green-50 mb-2">
          {portfolioData.name}
        </h1>
        <p className="text-lg md:text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
          Conservation Researcher
        </p>
        <p className="text-sm md:text-base text-green-600/80 dark:text-green-400/80 max-w-xs">
          Madagascar • Wildlife Protection • Biodiversity
        </p>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {portfolioData.social.linkedin && (
          <motion.a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        )}
        {portfolioData.social.twitter && (
          <motion.a
            href={portfolioData.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
        )}
        {portfolioData.social.github && (
          <motion.a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        )}
        <motion.a
          href={`mailto:${portfolioData.email}`}
          className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
