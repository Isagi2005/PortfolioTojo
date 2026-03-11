"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

interface TimelineExperienceProps {
  items: TimelineItem[];
}

export function TimelineExperience({ items }: TimelineExperienceProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 dark:from-green-500 dark:via-emerald-400 dark:to-green-500 md:-translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="absolute left-0 md:left-1/2 top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 border-4 border-white dark:border-green-950 md:-translate-x-1/2 z-10"
            />

            {/* Content */}
            <div className={`flex-1 ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-white dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/30 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.type === "experience" ? "from-green-400 to-green-600" : "from-emerald-400 to-emerald-600"} dark:${item.type === "experience" ? "from-green-500 dark:to-green-700" : "from-emerald-500 dark:to-emerald-700"} flex items-center justify-center text-white flex-shrink-0`}>
                    {item.type === "experience" ? (
                      <Briefcase className="w-5 h-5" />
                    ) : (
                      <Building2 className="w-5 h-5" />
                    )}
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-lg font-bold text-green-950 dark:text-green-50">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs text-green-600 dark:text-green-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </div>

                <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
