"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Linkedin, Twitter, ExternalLink, MessageSquare } from "lucide-react";
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
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! I will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
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
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Contact Me
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Interested in research collaborations, conservation projects, or just want to connect? Reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-green-50/50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                        <a
                          href={`mailto:${portfolioData.email}`}
                          className="text-gray-900 dark:text-gray-100 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
                          {portfolioData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                        <p className="text-gray-900 dark:text-gray-100 font-medium">
                          Antananarivo, Madagascar
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Connect Online
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={portfolioData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href={portfolioData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                    <a
                      href={portfolioData.social.researchgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ResearchGate
                    </a>
                    <a
                      href={portfolioData.social.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ORCID
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Open for Collaborations</h3>
                  <p className="text-white/90 text-sm">
                    Currently seeking research partnerships, conservation project collaborations, and speaking opportunities related to biodiversity conservation in Madagascar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
