import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Users, Briefcase, Bus, Shield, MapPin, X, Clock, CheckCircle, Star, Phone } from 'lucide-react';

export const Services = ({ onBookNow }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Car,
      title: 'Corporate Car Rental',
      description: 'Premium vehicles with professional chauffeurs for executive travel and business meetings.',
      color: 'from-[#0056D2] to-[#43E0F8]',
      details: {
        features: [
          'Luxury sedans and SUVs',
          'Professional chauffeurs',
          'Real-time GPS tracking',
          'Airport transfers',
          'City-to-city travel',
          'Flexible booking options'
        ],
        pricing: 'Starting from ₹3,500/day',
        duration: 'Available 24/7',
        vehicles: 'Mercedes, BMW, Audi, Toyota Camry',
        idealFor: 'Business meetings, client visits, corporate events'
      }
    },
    {
      icon: Users,
      title: 'Employee Transport Services',
      description: 'Reliable and comfortable daily commute solutions for your workforce across all locations.',
      color: 'from-[#43E0F8] to-[#5DFDCB]',
      details: {
        features: [
          'Daily pickup & drop',
          'Multiple shift coverage',
          'Route optimization',
          'Dedicated fleet management',
          'Attendance tracking',
          'Emergency backup vehicles'
        ],
        pricing: 'Custom pricing based on routes',
        duration: 'Fixed schedule operations',
        vehicles: 'Tempo Travelers, Mini Buses, Vans',
        idealFor: 'IT companies, manufacturing units, corporate offices'
      }
    },
    {
      icon: Briefcase,
      title: 'Executive Transportation',
      description: 'Luxury fleet with experienced chauffeurs for C-suite executives and VIP guests.',
      color: 'from-[#FE805A] to-[#FE6B47]',
      details: {
        features: [
          'Premium luxury vehicles',
          'Experienced executive chauffeurs',
          'Discreet service',
          'Complimentary refreshments',
          'Wi-Fi enabled vehicles',
          'Privacy glass available'
        ],
        pricing: 'Starting from ₹8,000/day',
        duration: 'On-demand and dedicated',
        vehicles: 'Mercedes S-Class, BMW 7 Series, Audi A8',
        idealFor: 'Board members, CEOs, international delegates'
      }
    },
    {
      icon: Bus,
      title: 'Group Transportation',
      description: 'Buses and coaches for conferences, events, and corporate outings with flexible scheduling.',
      color: 'from-[#5DFDCB] to-[#43E0F8]',
      details: {
        features: [
          'Large capacity buses',
          'Professional drivers',
          'Custom route planning',
          'Event coordination',
          'Multiple pickup points',
          'Luggage handling'
        ],
        pricing: 'Starting from ₹15,000/trip',
        duration: 'Flexible scheduling',
        vehicles: 'Volvo Buses, Coaches, Mini Buses',
        idealFor: 'Corporate events, conferences, team outings'
      }
    },
    {
      icon: Shield,
      title: 'Event Mobility Solutions',
      description: 'Comprehensive transportation management for corporate events, conferences, and roadshows.',
      color: 'from-[#0056D2] to-[#5DFDCB]',
      details: {
        features: [
          'Complete event transport',
          'Dedicated event manager',
          'Guest coordination',
          'VIP transportation',
          'Parking management',
          'Real-time monitoring'
        ],
        pricing: 'Custom event packages',
        duration: 'Event-based services',
        vehicles: 'Mixed fleet based on requirements',
        idealFor: 'Corporate events, product launches, roadshows'
      }
    },
    {
      icon: MapPin,
      title: 'Outstation Travel',
      description: 'Long-distance corporate travel with well-maintained vehicles and professional drivers.',
      color: 'from-[#FE805A] to-[#0056D2]',
      details: {
        features: [
          'Inter-city travel',
          'Experienced long-distance drivers',
          '24/7 roadside assistance',
          'Flexible return options',
          'Corporate billing',
          'Travel insurance included'
        ],
        pricing: 'Starting from ₹12/km',
        duration: 'Multi-day trips available',
        vehicles: 'Sedans, SUVs, Premium cars',
        idealFor: 'Business trips, client visits, multi-city tours'
      }
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
              <button
                onClick={() => setSelectedService(service)}
                className="relative z-10 inline-flex items-center text-[#0056D2] font-semibold hover:gap-3 transition-all duration-300 group"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`service-learn-more-${index}`}
              >
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </button>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Details Popup */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setSelectedService(null)}
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-2 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Premium Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-200 to-pink-200 rounded-full filter blur-3xl"></div>
              </div>

              {/* Popup Header */}
              <div className={`relative bg-gradient-to-br ${selectedService.color} px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
                  }}></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full filter blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full filter blur-3xl"></div>
                </div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="text-white flex-1 pr-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl border border-white/30"
                      >
                        <selectedService.icon size={20} className="sm:size-24 md:size-32" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {selectedService.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white/90 text-xs sm:text-sm font-medium">Premium Service</span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {selectedService.description}
                    </motion.p>
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedService(null)}
                    className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 shadow-xl flex-shrink-0"
                  >
                    <X size={16} className="sm:size-20 md:size-24 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Popup Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-200px)]">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column */}
                  <div className="space-y-6 md:space-y-8">
                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg"
                    >
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <CheckCircle size={16} className="sm:size-20 md:size-24 text-white" />
                        </motion.div>
                        <span className="text-sm sm:text-base md:text-xl">Premium Features</span>
                      </h4>
                      <div className="space-y-3 sm:space-y-4">
                        {selectedService.details.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors duration-300"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.3 }}
                              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full mt-1 sm:mt-2 flex-shrink-0 shadow-md"
                            ></motion.div>
                            <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Ideal For */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${selectedService.color}/10 border border-${selectedService.color.split(' ')[0].split('#')[1]}/20 shadow-lg`}
                    >
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FE805A] to-[#FE6B47] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Star size={16} className="sm:size-20 md:size-24 text-white" />
                        </motion.div>
                        <span className="text-sm sm:text-base md:text-xl">Perfect For</span>
                      </h4>
                      <p className="text-gray-700 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl leading-relaxed text-sm sm:text-base font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {selectedService.details.idealFor}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6 md:space-y-8">
                    {/* Pricing Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className={`p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br ${selectedService.color} text-white shadow-2xl border border-white/30 relative overflow-hidden`}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <div className="relative z-10">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">₹</span>
                          </div>
                          <span className="text-sm sm:text-base md:text-lg">Premium Pricing</span>
                        </h4>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {selectedService.details.pricing}
                        </p>
                        <p className="text-white/90 text-xs sm:text-sm font-medium">
                          *Custom pricing available for bulk bookings
                        </p>
                      </div>
                    </motion.div>

                    {/* Availability Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl"
                    >
                      <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Clock size={16} className="sm:size-20 md:size-24 text-white" />
                        </motion.div>
                        <span className="text-sm sm:text-base md:text-lg">24/7 Availability</span>
                      </h4>
                      <p className="text-white/95 text-sm sm:text-base font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {selectedService.details.duration}
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs sm:text-sm font-medium">Always Available</span>
                      </div>
                    </motion.div>

                    {/* Vehicles Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg"
                    >
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Car size={16} className="sm:size-20 md:size-24 text-white" />
                        </motion.div>
                        <span className="text-sm sm:text-base md:text-lg">Premium Fleet</span>
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base font-medium bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {selectedService.details.vehicles}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Premium CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 15px 40px rgba(0, 86, 210, 0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedService(null);
                      onBookNow?.({ service: selectedService });
                    }}
                    className={`flex-1 px-8 py-5 bg-gradient-to-r ${selectedService.color} text-white font-bold rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg relative overflow-hidden group`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
                      }}></div>
                    </div>
                    
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative z-10 flex items-center gap-2 sm:gap-3"
                    >
                      <Phone size={16} className="sm:size-18 md:size-20" />
                      <span className="text-xs sm:text-sm md:text-base">Book Premium Service</span>
                    </motion.div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(null)}
                    className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gray-100 text-gray-700 font-bold rounded-xl sm:rounded-2xl hover:bg-gray-200 transition-all duration-300 border border-gray-300 text-sm sm:text-base"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Close Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
