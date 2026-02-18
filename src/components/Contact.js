import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Corporate Car Rental',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Booking Inquiry from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interested: ${formData.service}

Message:
${formData.message}
    `.trim();
    
    window.location.href = `mailto:booking.excursiontravel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9990-817-615',
      link: 'tel:+919990817615'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Contact@excursiontravel.in',
      link: 'mailto:Contact@excursiontravel.in'
    },
    {
      icon: Mail,
      title: 'Reservations',
      value: 'booking.excursiontravel@gmail.com',
      link: 'mailto:booking.excursiontravel@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden" data-testid="contact-section">
      {/* Background Pattern */}
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
          data-testid="contact-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/20 backdrop-blur-lg rounded-full text-[#43E0F8] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="contact-eyebrow"
          >
            GET IN TOUCH
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="contact-title"
          >
            We are committed to creating <span className="text-[#43E0F8]">unparalleled experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
            data-testid="contact-info-section"
          >
            <div>
              <h3
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                data-testid="contact-info-title"
              >
                Let's Start Your Journey
              </h3>
              <p
                className="text-gray-400 text-lg leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="contact-info-description"
              >
                Reach out to us for professional mobility solutions tailored to your business needs. Our team is ready to assist you 24/7.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4" data-testid="contact-info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-[#43E0F8]/50 transition-all duration-300 group"
                  data-testid={`contact-info-card-${index}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#43E0F8] to-[#0056D2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {info.title}
                    </p>
                    <p className="text-white font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-3xl shadow-2xl"
              data-testid="contact-cta-box"
            >
              <h4
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Need Immediate Assistance?
              </h4>
              <p
                className="text-white/90 mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Our dedicated support team is available round the clock to serve you.
              </p>
              <a
                href="tel:+919990817615"
                className="inline-block w-full text-center px-6 py-3 bg-white text-[#0056D2] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="contact-call-now-button"
              >
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10"
            data-testid="contact-form-section"
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white text-sm font-medium mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-label-name"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#43E0F8] transition-all duration-300"
                    placeholder="John Doe"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-input-name"
                  />
                </div>
                <div>
                  <label
                    className="block text-white text-sm font-medium mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-label-email"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#43E0F8] transition-all duration-300"
                    placeholder="john@company.com"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-input-email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white text-sm font-medium mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-label-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#43E0F8] transition-all duration-300"
                    placeholder="+91 9999999999"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-input-phone"
                  />
                </div>
                <div>
                  <label
                    className="block text-white text-sm font-medium mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-label-company"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#43E0F8] transition-all duration-300"
                    placeholder="Your Company"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="form-input-company"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-white text-sm font-medium mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="form-label-service"
                >
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#43E0F8] transition-all duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="form-select-service"
                >
                  <option value="Corporate Car Rental" className="bg-[#1E293B]">Corporate Car Rental</option>
                  <option value="Employee Transport" className="bg-[#1E293B]">Employee Transport</option>
                  <option value="Executive Transportation" className="bg-[#1E293B]">Executive Transportation</option>
                  <option value="Group Transportation" className="bg-[#1E293B]">Group Transportation</option>
                  <option value="Event Mobility" className="bg-[#1E293B]">Event Mobility</option>
                  <option value="Outstation Travel" className="bg-[#1E293B]">Outstation Travel</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-white text-sm font-medium mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="form-label-message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#43E0F8] transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="form-textarea-message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="form-submit-button"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
