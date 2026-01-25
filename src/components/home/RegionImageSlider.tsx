import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import templeImage from "@/assets/images/temples/arunachala-temple.jpg";
import farmImage from "@/assets/images/farms/paddy-fields.jpg";
import girivamaImage from "@/assets/images/girivalam/sacred-path.jpg";
import factoryImage from "@/assets/images/factories/industrial-facility.jpg";
import streetImage from "@/assets/images/streets/heritage-street.jpg";

interface SlideData {
  image: string;
  title: string;
  titleTa: string;
  subtitle: string;
  subtitleTa: string;
}

const slides: SlideData[] = [
  {
    image: templeImage,
    title: "Sacred Heritage",
    titleTa: "புனித பாரம்பரியம்",
    subtitle: "Arunachala Temple at the heart of Thiruvannamalai",
    subtitleTa: "திருவண்ணாமலையின் இதயத்தில் அருணாசல கோயில்",
  },
  {
    image: farmImage,
    title: "Fertile Lands",
    titleTa: "வளமான நிலங்கள்",
    subtitle: "Lush paddy fields across the agricultural belt",
    subtitleTa: "விவசாய வளையத்தில் பசுமையான நெல் வயல்கள்",
  },
  {
    image: girivamaImage,
    title: "Girivalam Path",
    titleTa: "கிரிவலம் பாதை",
    subtitle: "Ancient pilgrimage route around the sacred hill",
    subtitleTa: "புனித மலையைச் சுற்றிய பழமையான புனித பாதை",
  },
  {
    image: factoryImage,
    title: "Industrial Growth",
    titleTa: "தொழில்துறை வளர்ச்சி",
    subtitle: "Modern manufacturing facilities taking shape",
    subtitleTa: "நவீன உற்பத்தி வசதிகள் வடிவம் பெறுகின்றன",
  },
  {
    image: streetImage,
    title: "Heritage Towns",
    titleTa: "பாரம்பரிய நகரங்கள்",
    subtitle: "Charming streets with rich cultural history",
    subtitleTa: "செழுமையான கலாச்சார வரலாற்றுடன் கூடிய அழகான தெருக்கள்",
  },
];

interface RegionImageSliderProps {
  language?: "en" | "ta";
  autoPlay?: boolean;
  interval?: number;
}

export const RegionImageSlider = ({
  language = "en",
  autoPlay = true,
  interval = 5000,
}: RegionImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl group">
      {/* Image Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.image}
            alt={language === "ta" ? currentSlide.titleTa : currentSlide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
            {language === "ta" ? currentSlide.titleTa : currentSlide.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base">
            {language === "ta" ? currentSlide.subtitleTa : currentSlide.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
