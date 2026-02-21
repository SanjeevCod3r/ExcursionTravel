import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, CreditCard, Headphones, Award, CheckCircle, Star } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'GPS tracking, 24/7 monitoring, and comprehensive insurance coverage for peace of mind',
      color: 'from-green-400 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service with instant assistance whenever you need it',
      color: 'from-blue-400 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: MapPin,
      title: 'Pan India Coverage',
      description: 'Extensive network across 50+ cities with seamless pickup and drop-off services',
      color: 'from-purple-400 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      icon: CreditCard,
      title: 'Easy Payment',
      description: 'Multiple payment options with secure transactions and flexible booking policies',
      color: 'from-orange-400 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Headphones,
      title: 'Personal Assistance',
      description: 'Dedicated travel coordinators to handle all your requirements and special requests',
      color: 'from-pink-400 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Well-maintained fleet with regular servicing and highest quality standards',
      color: 'from-yellow-400 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: CheckCircle },
    { number: '50+', label: 'Cities Covered', icon: MapPin },
    { number: '1000+', label: 'Vehicles', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0056D2]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#43E0F8]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-[#0056D2]/10 text-[#0056D2] px-6 py-3 rounded-full mb-6 font-medium"
          >
            <Award size={20} />
            <span>Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Experience the <span className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] bg-clip-text text-transparent">Difference</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Discover what makes us the preferred choice for travelers across India
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Trusted by Thousands
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Join our growing community of satisfied customers who choose excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300"
                  >
                    <stat.icon className="text-white" size={24} />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.number}
                  </div>
                  <p className="text-white/80 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
