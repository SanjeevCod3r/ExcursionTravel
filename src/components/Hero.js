import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden" data-testid="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/asset/Home%20Page%20Hero%20Image.png)',
            backgroundPosition: 'center'
          }}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
              Corporate Mobility Solutions
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
              Experience Excellence
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
              From premium chauffeur-driven services to tailored solutions, we deliver excellence in every ride.
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
        </div>
      </div>
    </div>
  );
};
