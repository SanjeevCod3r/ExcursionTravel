import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Settings, Shield, TrendingUp, UserCheck } from 'lucide-react';

export const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Corporate-Grade Service',
      description: 'Professional chauffeurs, well-maintained fleet, and commitment to punctuality for business excellence.'
    },
    {
      icon: Globe,
      title: 'Pan-India Coverage',
      description: 'Seamless mobility solutions across all major cities and routes throughout India.'
    },
    {
      icon: Settings,
      title: 'Tailor-Made Solutions',
      description: 'Customized transportation packages designed specifically for your business requirements.'
    },
    {
      icon: Shield,
      title: 'Service Ethics & Accountability',
      description: 'Transparent pricing, verified drivers, and 24/7 support ensuring complete peace of mind.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Years of excellence serving Fortune 500 companies and leading enterprises across sectors.'
    },
    {
      icon: UserCheck,
      title: 'Trusted by Enterprises',
      description: 'Preferred mobility partner for corporations, institutions, and executive leadership teams.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-testid="why-choose-section">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #43E0F8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="why-choose-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/20 backdrop-blur-lg rounded-full text-[#43E0F8] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="why-choose-eyebrow"
          >
            WHY CHOOSE EXCURSION TRAVEL
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="why-choose-title"
          >
            Setting Standards in <span className="text-[#0056D2]">Corporate Mobility</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="why-choose-description"
          >
            At Excursion Travel, excellence is not a promise—it's a standard. We deliver peace of mind, professionalism, and performance.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-testid="why-choose-grid"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#0056D2]/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              data-testid={`why-choose-card-${index}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#0056D2]/30 transition-all duration-300"
                data-testid={`why-choose-icon-${index}`}
              >
                <reason.icon className="text-white" size={26} />
              </motion.div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0056D2] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                data-testid={`why-choose-title-${index}`}
              >
                {reason.title}
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`why-choose-description-${index}`}
              >
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0056D2]/5 to-[#43E0F8]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 relative"
          data-testid="why-choose-philosophy"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0056D2]/5 via-[#43E0F8]/5 to-transparent rounded-3xl blur-3xl transform -rotate-1" />
          <div className="absolute inset-0 bg-gradient-to-tl from-white/50 to-transparent rounded-3xl" />

          {/* Main Quote Card */}
          <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white/80 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#0056D2]/20 to-[#43E0F8]/20 rounded-full blur-xl" />
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-[#43E0F8]/30 to-[#0056D2]/30 rounded-full blur-lg" />

            {/* Floating Quote Mark */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8 text-[#0056D2]/20"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
              </svg>
            </motion.div>

            {/* Main Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center relative z-10"
            >
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
                data-testid="philosophy-quote"
              >
                "Delivering{' '}
                <motion.span
                  className="bg-gradient-to-r from-[#0056D2] via-[#1e40af] to-[#43E0F8] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  confidence
                </motion.span>
                ,{' '}
                <motion.span
                  className="bg-gradient-to-r from-[#43E0F8] via-[#0056D2] to-[#1e40af] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  continuity
                </motion.span>
                , and{' '}
                <motion.span
                  className="bg-gradient-to-r from-[#1e40af] via-[#43E0F8] to-[#0056D2] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  class
                </motion.span>{' '}
                in every movement."
              </motion.p>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="philosophy-subtitle"
              >
                Our commitment to{' '}
                <span className="text-[#0056D2] font-semibold">professionalism</span>,{' '}
                <span className="text-[#43E0F8] font-semibold">precision</span>, and{' '}
                <span className="text-[#1e40af] font-semibold">refined travel experiences</span>.
              </motion.p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex justify-center"
            >
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#0056D2] to-transparent rounded-full" />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <Award size={20} />
                <span>Experience Our Excellence</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
