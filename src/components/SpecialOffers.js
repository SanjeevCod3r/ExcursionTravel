import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, MapPin, ArrowRight, Percent, Gift } from 'lucide-react';

export const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      subtitle: 'Book 60 days in advance',
      discount: '25%',
      description: 'Save big on your dream vacation with our early booking offer',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
      validUntil: 'March 31, 2026',
      badge: 'Hot Deal',
      packages: ['Kashmir', 'Goa', 'Rajasthan']
    },
    {
      id: 2,
      title: 'Family Package Deal',
      subtitle: 'Special rates for families',
      discount: '30%',
      description: 'Create unforgettable memories with your loved ones at special rates',
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e4e043f?w=600',
      validUntil: 'Ongoing',
      badge: 'Family Special',
      packages: ['All Destinations']
    },
    {
      id: 3,
      title: 'Weekend Getaway',
      subtitle: 'Short breaks under ₹15,000',
      discount: '20%',
      description: 'Perfect for quick rejuvenating trips and city escapes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      validUntil: 'Ongoing',
      badge: 'Quick Escape',
      packages: ['Goa', 'Kerala', 'Pondicherry']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0056D2]/5 via-[#43E0F8]/5 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0056D2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#43E0F8]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
              <Sparkles size={16} />
              Limited Time Offers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Exclusive Travel Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Don't miss out on our amazing offers! Save big on your next adventure with these exclusive deals and promotions.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {offer.badge}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-1">
                    <Percent size={14} className="text-[#0056D2]" />
                    <span className="text-[#0056D2] font-bold text-sm">{offer.discount} OFF</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {offer.title}
                  </h3>
                  <Gift className="text-[#43E0F8]" size={20} />
                </div>

                <p className="text-[#0056D2] font-medium text-sm mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {offer.subtitle}
                </p>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {offer.description}
                </p>

                {/* Packages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {offer.packages.map((pkg, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full flex items-center gap-1"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        <MapPin size={10} />
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Validity */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Clock size={12} />
                  <span style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Valid until: {offer.validUntil}
                  </span>
                </div>

                {/* CTA Button */}
                <Link to="/destinations">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    <span>Claim Offer</span>
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready for Your Next Adventure?
          </h3>
          <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Contact us today to customize your perfect travel experience with our exclusive offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#0056D2] font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Get Custom Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
