import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Corporate Car Rental',
    'Employee Transport',
    'Executive Transportation',
    'Group Transportation',
    'Event Mobility',
    'Outstation Travel'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="footer-company-info"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              data-testid="footer-company-name"
            >
              Excursion Travel
            </h3>
            <p
              className="text-gray-400 mb-6 leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="footer-company-description"
            >
              Your trusted partner in corporate mobility solutions across India. Experience excellence in every journey.
            </p>
            <div className="flex gap-4" data-testid="footer-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-[#43E0F8] transition-all duration-300 group"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            data-testid="footer-quick-links"
          >
            <h4
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              data-testid="footer-quick-links-title"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#43E0F8] transition-colors duration-300 inline-block hover:translate-x-2 transform"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`footer-quick-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            data-testid="footer-services"
          >
            <h4
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              data-testid="footer-services-title"
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#43E0F8] transition-colors duration-300 inline-block hover:translate-x-2 transform text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            data-testid="footer-contact-info"
          >
            <h4
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              data-testid="footer-contact-title"
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#43E0F8] mt-1 flex-shrink-0" />
                <a
                  href="tel:+919990817615"
                  className="text-gray-400 hover:text-[#43E0F8] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  data-testid="footer-phone"
                >
                  +91 9990-817-615
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#43E0F8] mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:Contact@excursiontravel.in"
                    className="text-gray-400 hover:text-[#43E0F8] transition-colors block"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="footer-email-contact"
                  >
                    Contact@excursiontravel.in
                  </a>
                  <a
                    href="mailto:booking.excursiontravel@gmail.com"
                    className="text-gray-400 hover:text-[#43E0F8] transition-colors block mt-1 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid="footer-email-booking"
                  >
                    booking.excursiontravel@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
          data-testid="footer-bottom-bar"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="footer-copyright"
            >
              © {new Date().getFullYear()} Excursion Travel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#43E0F8] transition-colors text-sm"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="footer-privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#43E0F8] transition-colors text-sm"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                data-testid="footer-terms-conditions"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
