import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Car, Award, Clock, Shield } from 'lucide-react';

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
      suffix: '+'
    },
    {
      number: counters.cities,
      label: 'Cities Covered',
      icon: MapPin,
      suffix: '+'
    },
    {
      number: counters.vehicles,
      label: 'Vehicles Fleet',
      icon: Car,
      suffix: '+'
    },
    {
      number: counters.experience,
      label: 'Years Experience',
      icon: Award,
      suffix: '+'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#0056D2] to-[#43E0F8]" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          data-testid="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
              data-testid={`stat-item-${index}`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300"
              >
                <stat.icon className="text-white" size={28} />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                data-testid={`stat-number-${index}`}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <p
                className="text-white/90 text-sm font-medium uppercase tracking-wider"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`stat-label-${index}`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span className="text-sm font-medium">Award Winning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
