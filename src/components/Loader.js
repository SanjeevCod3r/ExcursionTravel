import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, MapPin, Shield, Users } from 'lucide-react';

export const Loader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Car, MapPin, Shield, Users];

  useEffect(() => {
    if (isLoading) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 200);

      const iconInterval = setInterval(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length);
      }, 800);

      return () => {
        clearInterval(progressInterval);
        clearInterval(iconInterval);
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Moving Road Lines */}
            <div className="absolute top-1/4 left-0 right-0">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="h-1 bg-gradient-to-r from-transparent via-[#43E0F8] to-transparent opacity-30"
              />
            </div>
            <div className="absolute top-1/2 left-0 right-0">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-[#0056D2] to-transparent opacity-40"
              />
            </div>
            <div className="absolute top-3/4 left-0 right-0">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                className="h-1 bg-gradient-to-r from-transparent via-[#FE805A] to-transparent opacity-30"
              />
            </div>

            {/* Floating Gradient Orbs */}
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#43E0F8] to-[#0056D2] rounded-full filter blur-3xl opacity-20"
            />
            <motion.div
              animate={{ 
                y: [0, 30, 0],
                x: [0, -20, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#FE805A] to-[#FE6B47] rounded-full filter blur-3xl opacity-20"
            />
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 left-1/3 w-36 h-36 bg-gradient-to-br from-[#5DFDCB] to-[#43E0F8] rounded-full filter blur-3xl opacity-15"
            />
          </div>

          {/* Main Loader Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo/Icon Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 relative"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#0056D2]/20 border-t-[#0056D2] border-r-[#43E0F8]"></div>
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-4 border-[#43E0F8]/20 border-b-[#43E0F8] border-l-[#FE805A]"
              />
              
              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-4 border-[#FE805A]/20 border-t-[#FE805A] border-r-[#5DFDCB]"
              />

              {/* Center Icon */}
              <motion.div
                key={currentIcon}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-2xl flex items-center justify-center shadow-2xl">
                  {React.createElement(icons[currentIcon], { 
                    size: 24, 
                    className: "sm:size-32 text-white" 
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            >
              Excursion Travel
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-white/80 mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Premium Corporate Transportation
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-64 sm:w-80 mx-auto"
            >
              {/* Progress Background */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Progress Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#0056D2] via-[#43E0F8] to-[#5DFDCB] rounded-full relative"
                >
                  {/* Shine Effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 text-white/90 font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-2 mt-6"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                  className="w-2 h-2 bg-gradient-to-r from-[#43E0F8] to-[#0056D2] rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
