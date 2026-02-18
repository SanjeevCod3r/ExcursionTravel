import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Destinations = () => {
  const destinations = [
    {
      name: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1518018901567-417c6068e213?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Capital mobility solutions'
    },
    {
      name: 'Mumbai',
      image: 'https://images.pexels.com/photos/35784380/pexels-photo-35784380.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Financial district transport'
    },
    {
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1730305315982-9a9170dd212c?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Tech hub connectivity'
    },
    {
      name: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Eastern gateway services'
    },
    {
      name: 'Chennai',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Southern hub transport'
    },
    {
      name: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb6c8d3c6?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'IT corridor mobility'
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-white" data-testid="destinations-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="destinations-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="destinations-eyebrow"
          >
            EXPLORE INDIA ON WHEELS
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="destinations-title"
          >
            We Serve <span className="text-[#0056D2]">Pan-India</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="destinations-description"
          >
            Seamless corporate transportation across major business hubs and cities throughout India.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="destinations-grid">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              data-testid={`destination-card-${index}`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  data-testid={`destination-image-${index}`}
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-[#0056D2]/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center gap-2 mb-2"
                  data-testid={`destination-location-${index}`}
                >
                  <MapPin className="text-[#43E0F8]" size={20} />
                  <span className="text-[#43E0F8] font-semibold text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {destination.description}
                  </span>
                </motion.div>
                <h3
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  data-testid={`destination-name-${index}`}
                >
                  {destination.name}
                </h3>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  className="text-white/90 text-sm overflow-hidden"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid={`destination-explore-${index}`}
                >
                  <span className="inline-flex items-center gap-2 mt-2">
                    Explore Services
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </motion.div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#43E0F8]/50 rounded-3xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
