import React from 'react';
import { motion } from 'framer-motion';
import { CabBookingForm } from './CabBookingForm';

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/asset/Home Page Hero Image.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
          {/* Mobile First: Form on top for phone view */}
          <div className="lg:hidden mb-8">
            <CabBookingForm />
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
              data-testid="hero-content"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-eyebrow"
              >
                Corporate Mobility Solutions
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
                data-testid="hero-title"
              >
                Experience Excellence
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="hero-description"
              >
                From premium chauffeur-driven services to tailored solutions, we deliver excellence in every ride.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                data-testid="hero-cta-container"
              >
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 86, 210, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-full shadow-2xl transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="explore-services-button"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="contact-us-button"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Booking Form (Desktop only) */}
            <div className="hidden lg:flex justify-end">
              <CabBookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
