"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { PropertyImage } from "@/data/properties";

interface PropertyGalleryProps {
  images: PropertyImage[];
  className?: string;
}

export const PropertyGallery = ({ images, className }: PropertyGalleryProps) => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentLang = i18n.language as "en" | "ta";

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "Escape") setIsLightboxOpen(false);
  };

  if (images.length === 0) {
    return (
      <div className={cn("aspect-hero bg-muted flex items-center justify-center", className)}>
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className={cn("relative", className)} onKeyDown={handleKeyDown} tabIndex={0}>
        {/* Main Image */}
        <div className="relative aspect-hero overflow-hidden bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt[currentLang] || images[currentIndex].alt.en}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Expand Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="View fullscreen"
          >
            <Expand className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "flex-shrink-0 w-20 h-14 overflow-hidden transition-all",
                  index === currentIndex
                    ? "ring-2 ring-primary opacity-100"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt[currentLang] || image.alt.en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-4 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt[currentLang] || images[currentIndex].alt.en}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/70 text-sm">
                {images[currentIndex].alt[currentLang] || images[currentIndex].alt.en}
              </p>
              {images.length > 1 && (
                <p className="text-white/50 text-sm mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
