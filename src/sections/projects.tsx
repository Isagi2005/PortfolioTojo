"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Microscope, MapPin, Target, Calendar, ExternalLink } from "lucide-react";
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

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
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
              <Microscope className="w-4 h-4" />
              <span>Research Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Conservation Research
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Current and ongoing research projects focused on species protection and habitat conservation
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow overflow-hidden group">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
                    <Microscope className="w-16 h-16 text-green-400/50 dark:text-green-500/30 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>

                    {/* Objectives */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                        Key Objectives
                      </div>
                      <ul className="space-y-1">
                        {project.objectives.slice(0, 3).map((objective, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                      Learn more
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
