"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Leaf } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#expeditions", label: "Expeditions" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-green-950/90 backdrop-blur-lg shadow-xl border-b border-green-200/30 dark:border-green-800/30"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                isScrolled
                  ? "bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg"
                  : "bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg"
              }`}>
                <Leaf className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className={`font-bold text-lg transition-colors ${
                isScrolled
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-900 dark:text-gray-100"
              }`}>
                {portfolioData.name.split(" ")[0]}
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isScrolled
                      ? "text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-50 hover:bg-green-100 dark:hover:bg-green-800/40"
                      : "text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-50 hover:bg-white/40 dark:hover:bg-green-900/30"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`rounded-lg transition-all ${
                  isScrolled
                    ? "hover:bg-green-100 dark:hover:bg-green-800/40"
                    : "hover:bg-white/30 dark:hover:bg-green-900/20"
                }`}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-6 h-6 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-6 h-6 text-green-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-white/95 dark:bg-green-950/95 shadow-xl border-b border-green-200/30 dark:border-green-800/30 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-50 hover:bg-green-100 dark:hover:bg-green-800/40 rounded-lg transition-all font-semibold"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
