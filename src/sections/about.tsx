"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Globe, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Passionate About Conservation
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A dedicated researcher working to protect Madagascar&apos;s unique biodiversity
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {portfolioData.about.story}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {portfolioData.about.mission}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <Card className="bg-green-50/50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
                <CardContent className="p-6">
                  <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years of Research</div>
                </CardContent>
              </Card>
              <Card className="bg-emerald-50/50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Research Sites</div>
                </CardContent>
              </Card>
              <Card className="bg-teal-50/50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Community Members Engaged</div>
                </CardContent>
              </Card>
              <Card className="bg-green-50/50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
