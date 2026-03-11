"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Leaf } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TimelineExperience } from "@/components/timeline-experience";

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
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/20 dark:from-green-950/20 dark:via-green-900/20 dark:to-emerald-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/40 text-green-800 dark:text-green-200 text-sm font-semibold mb-4 border border-green-200/50 dark:border-green-700/50">
              <Leaf className="w-5 h-5 animate-pulse" />
              <span>Career Timeline</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50 mb-4">
              Professional Journey
            </h2>
            <p className="max-w-2xl mx-auto text-green-800/70 dark:text-green-200/70 text-lg leading-relaxed">
              A timeline of my academic background and professional experience in conservation research and biodiversity protection
            </p>
          </motion.div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 max-w-xs mx-auto">
              <TabsTrigger value="experience" className="flex items-center gap-2 font-semibold">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2 font-semibold">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8">
              <TimelineExperience
                items={portfolioData.experience.map((exp, index) => ({
                  id: `exp-${index}`,
                  title: exp.role,
                  organization: exp.organization,
                  period: exp.period,
                  description: exp.description,
                  type: "experience" as const,
                }))}
              />
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <TimelineExperience
                items={portfolioData.education.map((edu, index) => ({
                  id: `edu-${index}`,
                  title: edu.degree,
                  organization: edu.institution,
                  period: edu.year,
                  description: edu.thesis,
                  type: "education" as const,
                }))}
              />
            </TabsContent>
          </Tabs>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-green-950 dark:text-green-50 text-center mb-3">
              Technical Skills & Expertise
            </h3>
            <p className="text-center text-green-700 dark:text-green-300 mb-10 text-sm">
              Tools, methodologies, and areas of specialization
            </p>
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
                    className="px-4 py-2 text-sm bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-700/50 hover:shadow-md transition-shadow font-semibold"
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
