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
    <section id="about" className="py-24 bg-gradient-to-br from-white via-green-50/30 to-orange-50/20 dark:from-green-950/20 dark:via-green-900/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 dark:from-green-900/50 dark:to-orange-900/40 text-green-800 dark:text-green-200 text-sm font-semibold mb-6 border border-green-200/50 dark:border-green-700/50">
              <Leaf className="w-5 h-5" />
              <span>My Story & Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50 mb-6">
              Driven by Passion for Nature
            </h2>
            <p className="max-w-2xl mx-auto text-green-900/80 dark:text-green-100/80 text-lg leading-relaxed">
              Dedicated to protecting Madagascar&apos;s irreplaceable biodiversity through research, community engagement, and conservation action
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
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold border border-green-200/50 dark:border-green-700/50 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/30 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-900 dark:text-green-50 mb-2">5+</div>
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300">Years of Research</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50/50 dark:from-orange-900/30 dark:to-amber-900/20 border border-orange-200/50 dark:border-orange-700/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-orange-900 dark:text-orange-50 mb-2">10+</div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300">Research Sites</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-900/30 dark:to-teal-900/20 border border-emerald-200/50 dark:border-emerald-700/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-900 dark:text-emerald-50 mb-2">500+</div>
                  <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Community Members</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-900/30 dark:to-green-900/20 border border-green-200/50 dark:border-green-700/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-900 dark:text-green-50 mb-2">12</div>
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300">Publications</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
