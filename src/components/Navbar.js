import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Car, Navigation, MapPin, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'About', href: '#about' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-2 left-2 right-2' 
            : 'top-4 left-4 right-4'
        }`}
        data-testid="main-navbar"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl' 
            : 'bg-white/10 backdrop-blur-lg rounded-3xl'
          } border border-white/20`}>
          <div className="px-6 py-4 md:px-8 md:py-5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2"
                data-testid="logo-container"
              >
                <a href="#home" className="flex items-center">
                  <div className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#0056D2]' : 'text-white'
                  }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Excursion Travel
                  </div>
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-[#0056D2] relative group whitespace-nowrap ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056D2] group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
                className="hidden lg:block px-5 py-2.5 xl:px-6 xl:py-3 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="book-now-button"
              >
                Book Now
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 bg-gray-100 hover:bg-gray-200' 
                    : 'text-white bg-white/10 hover:bg-white/20'
                }`}
                data-testid="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-menu-backdrop"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-hidden"
              data-testid="mobile-menu-drawer"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                boxShadow: '-10px 0 40px rgba(0, 86, 210, 0.3)'
              }}
            >
              {/* Road Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 42px),
                    repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 22px)
                  `,
                }}></div>
              </div>

              {/* Animated Car Silhouette */}
              <div className="absolute top-8 right-8 opacity-20">
                <motion.div
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Car size={60} className="text-white" />
                </motion.div>
              </div>

              {/* Drawer Header */}
              <div className="relative bg-gradient-to-br from-[#0056D2] via-[#1e7aed] to-[#43E0F8] px-6 py-8 overflow-hidden">
                {/* Road lines animation */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="h-full w-8 bg-white"
                  ></motion.div>
                </div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-white">
                    <motion.div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Car size={24} />
                      </motion.div>
                      <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-bold" 
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Excursion
                      </motion.h3>
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-blue-100 text-sm" 
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Your journey starts here
                    </motion.p>
                  </div>
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-2xl bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                    data-testid="close-drawer-button"
                  >
                    <X size={20} className="text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="relative z-10 px-6 py-6 space-y-3 overflow-y-auto h-full pb-32">
                {navLinks.map((link, index) => {
                  const getIcon = (name) => {
                    switch(name) {
                      case 'Home': return <MapPin size={20} />;
                      case 'Services': return <Car size={20} />;
                      case 'Fleet': return <Users size={20} />;
                      case 'About': return <Navigation size={20} />;
                      case 'Destinations': return <MapPin size={20} />;
                      case 'Contact': return <Phone size={20} />;
                      default: return <Car size={20} />;
                    }
                  };

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-[#43E0F8]/50 overflow-hidden"
                      data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {/* Headlight beam effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#43E0F8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center gap-4">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.08 }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0056D2]/20 to-[#43E0F8]/20 flex items-center justify-center text-[#43E0F8] border border-[#43E0F8]/30"
                        >
                          {getIcon(link.name)}
                        </motion.div>
                        <span className="text-white font-semibold text-lg group-hover:text-[#43E0F8] transition-all duration-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {link.name}
                        </span>
                      </div>
                      
                      <motion.div 
                        initial={{ rotate: -180 }}
                        animate={{ rotate: 0 }}
                        transition={{ delay: 0.2 + index * 0.08 }}
                        className="relative w-8 h-8 rounded-full bg-gradient-to-r from-white/10 to-white/5 group-hover:from-[#43E0F8] group-hover:to-[#0056D2] transition-all duration-300 flex items-center justify-center"
                      >
                        <div className="w-3 h-0.5 bg-white/60 group-hover:bg-white transition-all duration-300 transform group-hover:translate-x-1"></div>
                      </motion.div>

                      {/* Road line animation */}
                      <div className="absolute bottom-2 left-10 right-10 h-px bg-white/10">
                        <motion.div
                          className="h-full w-4 bg-[#43E0F8]"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
                        ></motion.div>
                      </div>
                    </motion.a>
                  );
                })}
                
                {/* Animated Divider - Road */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative h-px bg-gradient-to-r from-transparent via-[#43E0F8]/50 to-transparent my-8"
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-2 h-2 bg-[#43E0F8] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#43E0F8] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#43E0F8] rounded-full"></div>
                  </motion.div>
                </motion.div>
                
                {/* Contact Info - Dashboard Style */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-5"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative p-5 rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(254, 128, 90, 0.15) 0%, rgba(254, 107, 71, 0.08) 100%)',
                      border: '1px solid rgba(254, 128, 90, 0.3)'
                    }}
                  >
                    {/* Speedometer effect */}
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-[#FE805A]/30">
                      <motion.div
                        animate={{ rotate: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-1 rounded-full bg-gradient-to-r from-[#FE805A] to-[#FE6B47]"
                        style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%)' }}
                      ></motion.div>
                    </div>
                    
                    <div className="relative flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FE805A] to-[#FE6B47] flex items-center justify-center shadow-lg"
                      >
                        <Phone size={18} className="text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>24/7 Support</p>
                        <p className="font-bold text-white text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>+91 9990-817-615</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(254, 128, 90, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '#contact';
                    }}
                    className="relative w-full px-6 py-4 bg-gradient-to-br from-[#FE805A] via-[#FE6B47] to-[#FE5A5A] text-white font-bold rounded-2xl shadow-xl transition-all duration-300 text-lg overflow-hidden group"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="mobile-book-now-button"
                  >
                    {/* Car animation on button */}
                    <motion.div
                      animate={{ x: [-30, 30] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-1/2 -translate-y-1/2 opacity-20"
                    >
                      <Car size={16} />
                    </motion.div>
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Car size={18} />
                      Book Your Ride
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
