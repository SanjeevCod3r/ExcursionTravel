import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechCorp India',
      company: 'TechCorp India',
      content: 'Exceptional service quality and punctuality. Excursion Travel has been our trusted partner for executive transportation across multiple cities.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      position: 'Director, Global Solutions',
      company: 'Global Solutions Ltd',
      content: 'Professional chauffeurs, well-maintained fleet, and seamless booking experience. Highly recommended for corporate travel needs.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      position: 'VP Operations, MegaCorp',
      company: 'MegaCorp Industries',
      content: 'Outstanding reliability and attention to detail. Their 24/7 support and modern fleet make them the perfect choice for business travel.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-24 bg-white" data-testid="testimonials-section">
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
          data-testid="testimonials-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="testimonials-eyebrow"
          >
            CLIENT TESTIMONIALS
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="testimonials-title"
          >
            Trusted by <span className="text-[#0056D2]">Industry Leaders</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="testimonials-description"
          >
            See what our valued corporate clients have to say about our commitment to excellence and professional service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="text-[#0056D2]" size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6" data-testid={`testimonial-rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p
                className="text-gray-600 mb-6 leading-relaxed italic"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid={`testimonial-content-${index}`}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4" data-testid={`testimonial-author-${index}`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#43E0F8]/20"
                />
                <div>
                  <p
                    className="font-bold text-gray-900"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {testimonial.position}
                  </p>
                  <p
                    className="text-sm text-[#0056D2] font-medium"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
