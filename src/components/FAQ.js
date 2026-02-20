import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "How do I book a corporate car rental service?",
      answer: "Booking is simple! You can book through our website, call our 24/7 hotline at +91 9990-817-615, or email us at booking.excursiontravel@gmail.com. Our dedicated account managers will assist you with all arrangements."
    },
    {
      question: "What types of vehicles do you offer?",
      answer: "We offer a comprehensive fleet including luxury sedans (Mercedes, BMW, Audi), SUVs, tempo travelers, mini buses, and executive vans. All vehicles are well-maintained, GPS-enabled, and driven by professional chauffeurs."
    },
    {
      question: "Do you provide services across all Indian cities?",
      answer: "Yes! We serve over 50 cities across India including Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, and many more. We also offer inter-city transfers between major business hubs."
    },
    {
      question: "What are your pricing structures?",
      answer: "Our pricing is transparent and customized based on your requirements. We offer hourly, daily, and monthly packages. Corporate clients receive special negotiated rates. Contact us for a personalized quote."
    },
    {
      question: "Are your drivers verified and professional?",
      answer: "Absolutely! All our chauffeurs undergo rigorous background checks, possess valid commercial licenses, and receive extensive training. They are uniformed, punctual, and maintain the highest standards of professionalism."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "Safety is our top priority. All vehicles undergo regular maintenance, are equipped with GPS tracking, first-aid kits, and emergency communication systems. Our drivers follow strict safety protocols and traffic regulations."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we specialize in airport transfers! We provide seamless pickups and drop-offs at all major airports including Delhi (IGI), Mumbai, Bangalore, Chennai, and Hyderabad airports with real-time flight tracking."
    },
    {
      question: "Can I book for multiple days or ongoing requirements?",
      answer: "Definitely! We cater to both short-term and long-term requirements. Whether you need transportation for a business meeting, conference, or ongoing corporate transportation, we can customize packages accordingly."
    },
    {
      question: "What is your cancellation and rescheduling policy?",
      answer: "We understand business needs change. You can reschedule bookings up to 4 hours before pickup without charges. Cancellation policies vary by booking type - our team will explain this when you book."
    },
    {
      question: "Do you provide invoices and billing support?",
      answer: "Yes, we provide detailed invoices for all corporate accounts. We support various payment methods and can accommodate your company's billing preferences. GST-compliant invoicing is available."
    },
    {
      question: "What if I need urgent transportation?",
      answer: "We offer 24/7 emergency transportation services. Our rapid response team ensures quick vehicle deployment for urgent business requirements or unexpected travel needs."
    },
    {
      question: "Do you have experience with large corporate accounts?",
      answer: "Yes! We proudly serve Fortune 500 companies, multinational corporations, and leading enterprises across various industries including IT, manufacturing, finance, and consulting sectors."
    }
  ];

  return (
    <section className="py-24 bg-white" data-testid="faq-section">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #43E0F8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="faq-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="faq-eyebrow"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="faq-title"
          >
            Everything You Need to <span className="text-[#0056D2]">Know</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="faq-description"
          >
            Find answers to common questions about our corporate transportation services. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16" data-testid="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                data-testid={`faq-button-${index}`}
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-[#0056D2] mt-1 flex-shrink-0" size={20} />
                  <h3
                    className="text-lg font-semibold text-gray-900 pr-4"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.has(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        data-testid={`faq-answer-${index}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#0056D2]/5 to-[#43E0F8]/5 rounded-3xl p-8 border border-[#43E0F8]/20"
          data-testid="faq-contact-cta"
        >
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Still Have Questions?
          </h3>
          <p
            className="text-gray-600 mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Our expert team is here to help with any specific requirements or custom transportation solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919990817615"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <Phone size={18} />
              Call Now: +91 9990-817-615
            </a>
            <a
              href="mailto:contact@excursiontravel.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
