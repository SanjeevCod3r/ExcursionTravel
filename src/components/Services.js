import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Briefcase, Bus, Shield, MapPin } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Corporate Car Rental',
      description: 'Premium vehicles with professional chauffeurs for executive travel and business meetings.',
      color: 'from-[#0056D2] to-[#43E0F8]'
    },
    {
      icon: Users,
      title: 'Employee Transport Services',
      description: 'Reliable and comfortable daily commute solutions for your workforce across all locations.',
      color: 'from-[#43E0F8] to-[#5DFDCB]'
    },
    {
      icon: Briefcase,
      title: 'Executive Transportation',
      description: 'Luxury fleet with experienced chauffeurs for C-suite executives and VIP guests.',
      color: 'from-[#FE805A] to-[#FE6B47]'
    },
    {
      icon: Bus,
      title: 'Group Transportation',
      description: 'Buses and coaches for conferences, events, and corporate outings with flexible scheduling.',
      color: 'from-[#5DFDCB] to-[#43E0F8]'
    },
    {
      icon: Shield,
      title: 'Event Mobility Solutions',
      description: 'Comprehensive transportation management for corporate events, conferences, and roadshows.',
      color: 'from-[#0056D2] to-[#5DFDCB]'
    },
    {
      icon: MapPin,
      title: 'Outstation Travel',
      description: 'Long-distance corporate travel with well-maintained vehicles and professional drivers.',
      color: 'from-[#FE805A] to-[#0056D2]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-testid="services-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="services-eyebrow"
          >
            OUR CORE SERVICES
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="services-title"
          >
            Efficiency, Discretion & <span className="text-[#0056D2]">Premium Experience</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="services-description"
          >
            Comprehensive mobility solutions tailored to meet the unique needs of corporate clients, ensuring seamless travel experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-testid="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              data-testid={`service-card-${index}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                data-testid={`service-icon-${index}`}
              >
                <service.icon className="text-white" size={28} />
              </motion.div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                data-testid={`service-title-${index}`}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`service-description-${index}`}
              >
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-[#0056D2] font-semibold hover:gap-3 transition-all duration-300 group"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`service-learn-more-${index}`}
              >
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </a>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
