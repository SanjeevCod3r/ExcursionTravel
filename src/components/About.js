import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: CheckCircle,
      title: 'Easy Booking Process',
      description: 'Streamlined booking experience for corporate clients'
    },
    {
      icon: Clock,
      title: 'Convenient Pick-Up & Return',
      description: 'Flexible scheduling that fits your business needs'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div {...fadeInUp} data-testid="about-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="about-eyebrow"
            >
              ABOUT US
            </motion.div>

            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
              data-testid="about-title"
            >
              Your Trusted Partner in <span className="text-[#0056D2]">Corporate Car Rentals</span>
            </h2>

            <p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="about-description"
            >
              Excursion Travel is your dedicated partner for professional mobility solutions. We specialize in corporate, institutional, and executive transportation across India, delivering world-class service with unwavering commitment to quality, transparency, and compliance.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4"
                  data-testid={`about-feature-${index}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="about-cta-button"
            >
              Book Now
            </motion.a>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5717511/pexels-photo-5717511.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate Transportation"
                className="w-full h-[500px] object-cover"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056D2]/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
              data-testid="about-floating-card"
            >
              <p className="text-2xl font-bold text-[#0056D2] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Pan-India Coverage
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Serving businesses across all major cities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
