import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Clock, Users, ArrowRight, Star } from 'lucide-react';

export const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    {
      name: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1518018901567-417c6068e213?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Capital mobility solutions',
      stats: { clients: '500+', vehicles: '200+', experience: '10+ Years' },
      highlights: ['Airport Transfers', 'Executive Transport', 'Event Services']
    },
    {
      name: 'Mumbai',
      image: 'https://images.pexels.com/photos/35784380/pexels-photo-35784380.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Financial district transport',
      stats: { clients: '400+', vehicles: '180+', experience: '8+ Years' },
      highlights: ['Business Travel', 'Corporate Fleet', 'VIP Services']
    },
    {
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1730305315982-9a9170dd212c?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Tech hub connectivity',
      stats: { clients: '600+', vehicles: '250+', experience: '12+ Years' },
      highlights: ['IT Park Transport', 'Startup Fleet', 'Innovation Hub']
    },
    {
      name: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Eastern gateway services',
      stats: { clients: '300+', vehicles: '150+', experience: '7+ Years' },
      highlights: ['Port Services', 'Business District', 'Cultural Events']
    },
    {
      name: 'Chennai',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Southern hub transport',
      stats: { clients: '350+', vehicles: '160+', experience: '9+ Years' },
      highlights: ['Auto Industry', 'IT Corridor', 'Beach City Services']
    },
    {
      name: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb6c8d3c6?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'IT corridor mobility',
      stats: { clients: '450+', vehicles: '190+', experience: '11+ Years' },
      highlights: ['Hitech City', 'Pharma Hub', 'Educational Services']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="destinations" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden py-24" data-testid="destinations-section">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/20 to-[#43E0F8]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/20 to-[#5DFDCB]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-full filter blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-2xl opacity-15"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-48 left-16 w-16 h-16 bg-gradient-to-br from-[#43E0F8] to-[#5DFDCB] rounded-full opacity-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
          data-testid="destinations-header"
        >
          {/* Modern Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0056D2]/10 via-[#43E0F8]/10 to-[#0056D2]/10 backdrop-blur-xl rounded-full border border-[#43E0F8]/30 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full"
            />
            <span className="text-[#0056D2] font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              EXPLORE INDIA ON WHEELS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="destinations-title"
          >
            We Serve <span className="bg-gradient-to-r from-[#0056D2] via-[#43E0F8] to-[#5DFDCB] bg-clip-text text-transparent">Pan-India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="destinations-description"
          >
            Seamless corporate transportation across major business hubs and cities throughout India. From metropolitan capitals to emerging tech hubs, we ensure your business travels effortlessly.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 sm:mb-20"
        >
          {[
            { icon: MapPin, label: 'Cities Covered', value: '50+' },
            { icon: Car, label: 'Fleet Size', value: '1000+' },
            { icon: Users, label: 'Happy Clients', value: '2000+' },
            { icon: Star, label: 'Years Experience', value: '15+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg"
              >
                <stat.icon size={20} />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          data-testid="destinations-grid"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60"
              data-testid={`destination-card-${index}`}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-full"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-testid={`destination-image-${index}`}
                  />
                </motion.div>

                {/* Dynamic Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                  hoveredCard === index
                    ? 'from-[#0056D2]/95 via-[#43E0F8]/80 to-transparent'
                    : 'from-black/70 via-black/40 to-transparent'
                }`} />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30"
                >
                  <div className="flex items-center gap-1">
                    <MapPin className="text-white" size={14} />
                    <span className="text-white text-xs font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {destination.description}
                    </span>
                  </div>
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                    className="transform transition-transform duration-300 group-hover:translate-y-0"
                  >
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      data-testid={`destination-name-${index}`}
                    >
                      {destination.name}
                    </h3>

                    {/* Stats */}
                    <div className="flex gap-4 mb-4">
                      {Object.entries(destination.stats).map(([key, value]) => (
                        <div key={key} className="text-white/90 text-xs">
                          <span className="font-semibold">{value}</span>
                          <span className="ml-1 capitalize">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.slice(0, 2).map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                          +{destination.highlights.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-[#43E0F8] font-semibold group-hover:gap-4 transition-all duration-300"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={16} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#43E0F8]/60 rounded-3xl transition-all duration-500 pointer-events-none" />
              </div>

              {/* Bottom Stats Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-4 bg-gray-50/50"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#0056D2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {destination.stats.clients}
                    </div>
                    <div className="text-xs text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Clients
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0056D2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {destination.stats.vehicles}
                    </div>
                    <div className="text-xs text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Vehicles
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#0056D2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {destination.stats.experience}
                    </div>
                    <div className="text-xs text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0056D2]/5 via-[#43E0F8]/5 to-[#0056D2]/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#43E0F8]/20">
            <h3
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to Experience Premium Transportation?
            </h3>
            <p
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Join thousands of satisfied corporate clients who trust Excursion Travel for their mobility needs across India.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
