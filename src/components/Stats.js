import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Car, Award, Clock, Shield, Star, Sparkles } from 'lucide-react';

export const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    cities: 0,
    vehicles: 0,
    experience: 0
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
      { threshold: 0.3 }
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
      const duration = 2500; // 2.5 seconds for smoother animation
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        clients: 500,
        cities: 50,
        vehicles: 1000,
        experience: 15
      };

      const timer = setInterval(() => {
        setCounters(prev => ({
          clients: Math.min(prev.clients + Math.ceil(targets.clients / steps), targets.clients),
          cities: Math.min(prev.cities + Math.ceil(targets.cities / steps), targets.cities),
          vehicles: Math.min(prev.vehicles + Math.ceil(targets.vehicles / steps), targets.vehicles),
          experience: Math.min(prev.experience + Math.ceil(targets.experience / steps), targets.experience)
        }));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      number: counters.clients,
      label: 'Corporate Clients',
      icon: Users,
      suffix: '+',
      color: 'from-blue-400 to-blue-600'
    },
    {
      number: counters.cities,
      label: 'Cities Covered',
      icon: MapPin,
      suffix: '+',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      number: counters.vehicles,
      label: 'Vehicles Fleet',
      icon: Car,
      suffix: '+',
      color: 'from-purple-400 to-purple-600'
    },
    {
      number: counters.experience,
      label: 'Years Experience',
      icon: Award,
      suffix: '+',
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0056D2] via-[#1e40af] to-[#43E0F8]" data-testid="stats-section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-16 w-8 h-8 border-2 border-white/20 rounded-lg"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 left-16 w-6 h-6 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-32 left-32 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          data-testid="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="group relative"
              data-testid={`stat-item-${index}`}
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-500 shadow-2xl group-hover:shadow-white/10">

                {/* Icon with Enhanced Animation */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <stat.icon className="text-white" size={32} />
                </motion.div>

                {/* Number with Enhanced Styling */}
                <motion.div
                  initial={{ scale: 0, rotateX: -90 }}
                  whileInView={{ scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  data-testid={`stat-number-${index}`}
                >
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {stat.number}{stat.suffix}
                  </span>
                </motion.div>

                {/* Label */}
                <p
                  className="text-white/90 text-base font-semibold uppercase tracking-wide group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid={`stat-label-${index}`}
                >
                  {stat.label}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full origin-center"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-bold text-white mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Why Choose Us?
          </motion.h3>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: 'ISO Certified', desc: 'Quality Assurance' },
              { icon: Clock, text: '24/7 Support', desc: 'Always Available' },
              { icon: Star, text: 'Award Winning', desc: 'Excellence Recognized' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-white/10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <item.icon className="text-white" size={24} />
                  </motion.div>
                  <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.text}
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-white to-cyan-100 text-[#0056D2] font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span>Experience Excellence</span>
              <Star className="text-yellow-500" size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
