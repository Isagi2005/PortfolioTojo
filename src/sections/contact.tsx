"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Linkedin, Twitter, ExternalLink, MessageSquare, Leaf, Sprout } from "lucide-react";
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email via API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-white dark:from-green-950/10 dark:via-orange-950/10 dark:to-green-950/5 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/10 dark:bg-orange-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200/10 dark:bg-green-900/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 dark:from-green-900/40 dark:to-orange-900/40 text-green-800 dark:text-green-200 text-sm font-medium mb-4 border border-green-200/50 dark:border-green-800/50">
              <Leaf className="w-4 h-4" />
              <span>Let's Connect for Conservation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-green-900 dark:text-green-50 mb-4">
              Join the Mission
            </h2>
            <p className="max-w-2xl mx-auto text-green-800/80 dark:text-green-200/80 text-lg leading-relaxed">
              Whether you're passionate about Madagascar's wildlife, interested in research collaboration, or seeking consulting on conservation initiatives—I'd love to hear from you. Together, we can make a difference for our planet's most endangered species.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-gradient-to-br from-green-50/80 via-white/50 to-orange-50/40 dark:from-green-900/30 dark:via-green-950/20 dark:to-orange-900/20 border border-green-200/50 dark:border-green-700/50 shadow-lg backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-50">
                      Let's Talk
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/40 dark:hover:bg-green-800/20 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 flex items-center justify-center shrink-0 group-hover:shadow-lg transition-shadow">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider font-semibold text-green-700 dark:text-green-300 mb-1">Email</p>
                        <a
                          href={`mailto:${portfolioData.email}`}
                          className="text-green-900 dark:text-green-50 font-semibold hover:text-green-600 dark:hover:text-green-200 transition-colors break-all"
                        >
                          {portfolioData.email}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/40 dark:hover:bg-orange-800/20 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600 dark:from-orange-500 dark:to-amber-600 flex items-center justify-center shrink-0 group-hover:shadow-lg transition-shadow">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-orange-700 dark:text-orange-300 mb-1">Location</p>
                        <p className="text-green-900 dark:text-green-50 font-semibold">
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

              <Card className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Sprout className="w-8 h-8 text-white/90 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">Open for Collaboration</h3>
                      <p className="text-white/95 leading-relaxed text-sm">
                        I'm actively seeking research partnerships, conservation project collaborations, field work opportunities, and speaking engagements to amplify our impact on Madagascar's biodiversity protection. Let's work together!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-white via-green-50/30 to-white dark:from-green-950/50 dark:via-green-900/30 dark:to-green-950/50 border border-green-200/40 dark:border-green-800/40 shadow-xl backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Success Message */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                          Thank you! Your message has been sent successfully. I'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                          There was an error sending your message. Please try again.
                        </p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase tracking-wide"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`bg-white/60 dark:bg-green-900/30 border-2 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all ${
                            errors.name ? "border-red-500" : "border-green-200/50 dark:border-green-700/50"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-600 dark:text-red-400 text-xs font-medium">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase tracking-wide"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`bg-white/60 dark:bg-green-900/30 border-2 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all ${
                            errors.email ? "border-red-500" : "border-green-200/50 dark:border-green-700/50"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-600 dark:text-red-400 text-xs font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase tracking-wide"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Research collaboration, project inquiry, etc."
                        value={formData.subject}
                        onChange={handleChange}
                        className={`bg-white/60 dark:bg-green-900/30 border-2 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all ${
                          errors.subject ? "border-red-500" : "border-green-200/50 dark:border-green-700/50"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-600 dark:text-red-400 text-xs font-medium">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase tracking-wide"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, research interest, or collaboration idea..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`bg-white/60 dark:bg-green-900/30 border-2 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all resize-none ${
                          errors.message ? "border-red-500" : "border-green-200/50 dark:border-green-700/50"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-600 dark:text-red-400 text-xs font-medium">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-700 dark:to-emerald-700 dark:hover:from-green-800 dark:hover:to-emerald-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
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
