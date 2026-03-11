"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Award, Calendar, Building2, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";

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

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-green-50/50 dark:bg-green-950/30">
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
              <Briefcase className="w-4 h-4" />
              <span>Experience & Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Professional Journey
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Academic background and professional experience in conservation research
            </p>
          </motion.div>

          <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
                            <Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                              {exp.role}
                            </h3>
                            <p className="text-green-600 dark:text-green-400 font-medium">
                              {exp.organization}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="shrink-0 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                              {edu.degree}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                          {edu.year}
                        </Badge>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          Thesis: {edu.thesis}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {portfolioData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
