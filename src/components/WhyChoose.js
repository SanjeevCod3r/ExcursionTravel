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
    <section className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden" data-testid="why-choose-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="why-choose-title"
          >
            Setting Standards in <span className="text-[#43E0F8]">Corporate Mobility</span>
          </h2>
          <p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
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
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-[#43E0F8]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#43E0F8]/20"
              data-testid={`why-choose-card-${index}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-to-br from-[#43E0F8] to-[#0056D2] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#43E0F8]/50 transition-all duration-300"
                data-testid={`why-choose-icon-${index}`}
              >
                <reason.icon className="text-white" size={26} />
              </motion.div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-white mb-3 group-hover:text-[#43E0F8] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                data-testid={`why-choose-title-${index}`}
              >
                {reason.title}
              </h3>
              <p
                className="text-gray-400 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`why-choose-description-${index}`}
              >
                {reason.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#43E0F8]/10 to-[#0056D2]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
          data-testid="why-choose-philosophy"
        >
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10">
            <p
              className="text-2xl sm:text-3xl font-bold text-white mb-4 italic"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              data-testid="philosophy-quote"
            >
              "Delivering confidence, continuity, and class in every movement."
            </p>
            <p
              className="text-lg text-gray-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="philosophy-subtitle"
            >
              Our commitment to professionalism, precision, and refined travel experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
