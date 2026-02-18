import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/8424987/pexels-photo-8424987.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Experience Excellence',
      subtitle: 'Corporate Mobility Solutions',
      description: 'From premium chauffeur-driven services to tailored solutions, we deliver excellence in every ride.'
    },
    {
      image: 'https://images.pexels.com/photos/5717511/pexels-photo-5717511.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Seamless, Professional Mobility',
      subtitle: 'For Business Needs Across India',
      description: 'Excursion Travel specializes in seamless, professional mobility solutions for business needs across India.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div id="home" className="relative h-screen overflow-hidden" data-testid="hero-section">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundPosition: 'center'
            }}
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
              data-testid="hero-content"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-medium mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-eyebrow"
              >
                {slides[currentSlide].subtitle}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
                data-testid="hero-title"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-description"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
                data-testid="hero-cta-container"
              >
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 86, 210, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-full shadow-2xl transition-all duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="explore-services-button"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="contact-us-button"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all duration-300"
        data-testid="prev-slide-button"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all duration-300"
        data-testid="next-slide-button"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3" data-testid="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40'
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
