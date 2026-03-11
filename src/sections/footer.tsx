"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Linkedin, Twitter, ExternalLink, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8 border-b border-gray-800">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{portfolioData.name.split(" ")[0]}</h3>
                <p className="text-xs text-gray-400">{portfolioData.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to the conservation of Madagascar&apos;s unique biodiversity through research, community engagement, and sustainable practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Research Projects
                </a>
              </li>
              <li>
                <a href="#expeditions" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Expeditions
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex gap-3">
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.social.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {portfolioData.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} {portfolioData.name}. Made with <Heart className="w-4 h-4 text-red-500" /> for conservation.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
