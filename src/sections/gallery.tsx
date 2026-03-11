"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Camera, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === 0 ? portfolioData.gallery.length - 1 : (prev as number) - 1
    );
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === portfolioData.gallery.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const currentImage = selectedImage !== null ? portfolioData.gallery[selectedImage] : null;

  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-800">
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
              <Camera className="w-4 h-4" />
              <span>Wildlife Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Through the Lens
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Capturing the beauty and diversity of Madagascar&apos;s unique wildlife
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.gallery.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-200 dark:bg-gray-700"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <Camera className="w-12 h-12 text-green-400/50 dark:text-green-500/30" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-medium text-sm mb-1">
                    {image.caption}
                  </p>
                  <div className="flex items-center gap-1 text-white/80 text-xs">
                    <MapPin className="w-3 h-3" />
                    {image.location}
                  </div>
                </div>

                {/* Corner Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            {currentImage?.caption || "Image Viewer"}
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <AnimatePresence mode="wait">
              {currentImage && (
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  {/* Image Placeholder */}
                  <div className="relative w-[80vw] max-w-4xl aspect-video bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-lg flex items-center justify-center">
                    <Camera className="w-24 h-24 text-green-500/30" />
                  </div>

                  {/* Caption */}
                  <div className="mt-6 text-center">
                    <p className="text-white font-medium text-lg mb-2">
                      {currentImage.caption}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <MapPin className="w-4 h-4" />
                      {currentImage.location}
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="mt-4 text-white/40 text-sm">
                    {selectedImage !== null ? selectedImage + 1 : 0} / {portfolioData.gallery.length}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
