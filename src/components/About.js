import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Award, Users, MapPin, Shield } from 'lucide-react';

export const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    cities: 0,
    vehicles: 0,
    support: 0
  });
  
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        clients: 500,
        cities: 50,
        vehicles: 1000,
        support: 24
      };

      const timer = setInterval(() => {
        setCounters((prev) => {
          const newCounters = { ...prev };
          let allComplete = true;

          for (const key in targets) {
            if (newCounters[key] < targets[key]) {
              const increment = Math.ceil(targets[key] / steps);
              newCounters[key] = Math.min(newCounters[key] + increment, targets[key]);
              allComplete = false;
            }
          }

          if (allComplete) {
            clearInterval(timer);
          }

          return newCounters;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: '500+', label: 'Corporate Clients', icon: Users },
    { number: '50+', label: 'Cities Covered', icon: MapPin },
    { number: '1000+', label: 'Vehicles', icon: Award },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Easy Booking Process',
      description: 'Streamlined booking experience for corporate clients with dedicated account managers',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Clock,
      title: 'Convenient Pick-Up & Return',
      description: 'Flexible scheduling that fits your business needs with real-time tracking',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" data-testid="about-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-bold mb-6 border border-[#0056D2]/20 backdrop-blur-sm"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="about-eyebrow"
          >
            ABOUT EXCURSION TRAVEL
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="about-title"
          >
            Your Trusted Partner in{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] to-[#43E0F8]">
                Corporate Car Rentals
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full"
              ></motion.div>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="about-description"
          >
            Excursion Travel is your dedicated partner for professional mobility solutions. We specialize in corporate, institutional, and executive transportation across India, delivering world-class service with unwavering commitment to quality, transparency, and compliance.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 86, 210, 0.15)'
            }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0056D2]/30 transition-all duration-300 cursor-pointer"
            data-testid="about-stat-clients"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center text-white mb-4"
            >
              <Users size={20} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counters.clients}+
            </h3>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Corporate Clients
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 86, 210, 0.15)'
            }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0056D2]/30 transition-all duration-300 cursor-pointer"
            data-testid="about-stat-cities"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center text-white mb-4"
            >
              <MapPin size={20} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counters.cities}+
            </h3>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Cities Covered
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 86, 210, 0.15)'
            }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0056D2]/30 transition-all duration-300 cursor-pointer"
            data-testid="about-stat-vehicles"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center text-white mb-4"
            >
              <Award size={20} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counters.vehicles}+
            </h3>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Vehicles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0, 86, 210, 0.15)'
            }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0056D2]/30 transition-all duration-300 cursor-pointer"
            data-testid="about-stat-support"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center text-white mb-4"
            >
              <Shield size={20} />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counters.support}/7
            </h3>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Support
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div {...fadeInUp} data-testid="about-content">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: '0 10px 30px rgba(0, 86, 210, 0.1)'
                  }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer group"
                  data-testid={`about-feature-${index}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    <feature.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors duration-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(254, 128, 90, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="about-cta-button"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-testid="about-image-container"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Mercedes with Professional Driver"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                data-testid="about-image"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Available 24/7
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-gray-100 hover:border-[#0056D2]/30 transition-all duration-300"
              data-testid="about-floating-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Pan-India
                  </p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Coverage
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Serving businesses across all major cities with premium fleet and professional chauffeurs
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
