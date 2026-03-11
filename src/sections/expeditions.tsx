"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Compass, Mountain, Tent, Waves } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const countryIcons: Record<string, React.ReactNode> = {
  Madagascar: <Mountain className="w-5 h-5" />,
  Ghana: <Waves className="w-5 h-5" />,
  "United Kingdom": <Tent className="w-5 h-5" />,
};

export function Expeditions() {
  return (
    <section id="expeditions" className="py-24 bg-white dark:bg-gray-900" aria-label="Field expeditions and research trips">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" />
              <span>Field Expeditions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Exploration & Research Trips
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Documenting biodiversity across Madagascar and beyond through scientific expeditions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-emerald-300 to-teal-300 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700" />

            <div className="space-y-12">
              {portfolioData.expeditions.map((expedition, index) => (
                <motion.div
                  key={expedition.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400 border-4 border-white dark:border-gray-900" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}>
                          <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                            {countryIcons[expedition.country] || <MapPin className="w-5 h-5" />}
                          </div>
                          <div className={index % 2 === 0 ? "md:text-right" : ""}>
                            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                              <Calendar className="w-4 h-4" />
                              {expedition.date}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {expedition.country}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {expedition.location}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {expedition.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {expedition.highlights.map((highlight, hIndex) => (
                            <span
                              key={hIndex}
                              className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
