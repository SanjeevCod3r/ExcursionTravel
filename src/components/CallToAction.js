import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, ArrowRight, Sparkles, Star } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0056D2] via-[#1e40af] to-[#43E0F8] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-32 right-32 w-4 h-4 bg-cyan-400/40 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-32 left-32 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="text-yellow-400" size={20} />
              <span className="font-medium">Limited Time Offer</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Start Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Adventure?
              </span>
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Book your perfect vehicle today and enjoy exclusive discounts on your first booking.
              Experience luxury, comfort, and reliability across India's most beautiful destinations.
            </p>

            {/* Offer Highlights */}
            <div className="space-y-4 mb-8">
              {[
                'Up to 20% off on first booking',
                'Free GPS navigation included',
                '24/7 roadside assistance',
                'Flexible cancellation policy'
              ].map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="text-white" size={14} />
                  </div>
                  <span className="text-white/90 font-medium">{offer}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white to-cyan-100 text-[#0056D2] font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <Calendar size={20} />
                <span>Book Your Car Now</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <Phone size={20} />
                <span>Call Us: +91 9990-817-615</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Car Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600"
                  alt="Luxury Car"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Mercedes-Benz E-Class
                  </h3>
                  <p className="text-white/80 mb-4">Starting from ₹4,500/day</p>
                  <div className="flex justify-center gap-4 text-sm text-white/70">
                    <span>5 Seats</span>
                    <span>•</span>
                    <span>Petrol</span>
                    <span>•</span>
                    <span>A/C</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg"
              >
                20% OFF
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center gap-2"
              >
                <Phone size={16} />
                <span>24/7</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
