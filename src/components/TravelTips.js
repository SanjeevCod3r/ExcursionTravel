import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Plane, MapPin, Clock, Shield, Heart } from 'lucide-react';

export const TravelTips = () => {
  const tips = [
    {
      id: 1,
      icon: Plane,
      title: 'Best Time to Travel',
      description: 'Plan your trip during shoulder seasons (March-May, September-November) to avoid crowds and get better deals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: MapPin,
      title: 'Local Transportation',
      description: 'Use local trains, buses, or rickshaws for authentic experiences. Apps like RedBus and MakeMyTrip help with bookings.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: Clock,
      title: 'Cultural Etiquette',
      description: 'Respect local customs, dress modestly at religious sites, and always ask before photographing people.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Safety First',
      description: 'Stay hydrated, use sunscreen, keep important documents secure, and inform someone about your travel plans.',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: Heart,
      title: 'Sustainable Travel',
      description: 'Choose eco-friendly accommodations, reduce plastic use, support local communities, and leave no trace.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      icon: Lightbulb,
      title: 'Smart Packing',
      description: 'Pack light, include versatile clothing, essential medications, and adaptors for Indian electrical outlets.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white rounded-full mb-4">
            <span className="font-semibold text-sm flex items-center gap-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <Lightbulb size={16} />
              Travel Wisdom
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Essential Travel Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Make the most of your Indian adventure with our expert tips and insider knowledge for an unforgettable journey.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tip.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {tip.title}
              </h3>

              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {tip.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`h-1 bg-gradient-to-r ${tip.color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Need More Travel Guidance?
          </h3>
          <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Our travel experts are here to help you plan every detail of your perfect Indian journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#0056D2] font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Download Travel Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
