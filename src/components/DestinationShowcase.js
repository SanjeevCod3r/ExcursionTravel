import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar, ChevronRight, Camera, Landmark, ShoppingBag, Utensils } from 'lucide-react';

export const DestinationShowcase = () => {
  const navigate = useNavigate();

  const featuredDestinations = [
    {
      id: 1,
      name: 'Hyderabad',
      tagline: 'City of Pearls & Nizams',
      image: '/asset/hyderabad.png',
      description: 'Experience the perfect blend of ancient heritage and modern innovation in Hyderabad, known for its iconic Charminar, world-class IT hubs, and legendary biryani.',
      highlights: [
        { icon: Landmark, text: 'Historic Charminar' },
        { icon: Utensils, text: 'Famous Biryani' },
        { icon: ShoppingBag, text: 'Hitech City Shopping' }
      ],
      rating: 4.8,
      bestTime: 'Oct - Mar',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      name: 'Bangalore',
      tagline: 'Silicon Valley of India',
      image: '/asset/bangalore.png',
      description: 'Discover Bangalore, India\'s tech capital, where lush gardens, vibrant nightlife, and cutting-edge innovation create an unforgettable urban experience.',
      highlights: [
        { icon: Camera, text: 'Lalbagh Botanical Garden' },
        { icon: Landmark, text: 'Bangalore Palace' },
        { icon: ShoppingBag, text: 'Commercial Street' }
      ],
      rating: 4.7,
      bestTime: 'Oct - May',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'Mumbai',
      tagline: 'City That Never Sleeps',
      image: '/asset/mumbai.png',
      description: 'Dive into the bustling energy of Mumbai, home to Bollywood glamour, historic landmarks, pristine beaches, and the iconic Gateway of India.',
      highlights: [
        { icon: Landmark, text: 'Gateway of India' },
        { icon: Camera, text: 'Marine Drive' },
        { icon: Star, text: 'Bollywood Studios' }
      ],
      rating: 4.6,
      bestTime: 'Nov - May',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Delhi',
      tagline: 'Heart of India',
      image: '/asset/delhi.png',
      description: 'Explore Delhi, where ancient Mughal monuments meet contemporary culture. From the majestic Red Fort to bustling markets, experience India\'s rich heritage.',
      highlights: [
        { icon: Landmark, text: 'Red Fort' },
        { icon: Landmark, text: 'India Gate' },
        { icon: ShoppingBag, text: 'Chandni Chowk Market' }
      ],
      rating: 4.5,
      bestTime: 'Oct - Mar',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      name: 'Chennai',
      tagline: 'Cultural Capital of South India',
      image: '/asset/chennai.png',
      description: 'Immerse yourself in Chennai\'s rich Tamil culture, beautiful temples, pristine beaches, and world-famous South Indian cuisine.',
      highlights: [
        { icon: Landmark, text: 'Kapaleeshwarar Temple' },
        { icon: Camera, text: 'Marina Beach' },
        { icon: Utensils, text: 'Authentic South Indian Food' }
      ],
      rating: 4.4,
      bestTime: 'Dec - Mar',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      name: 'Goa',
      tagline: 'Paradise on Earth',
      image: '/asset/goa.png',
      description: 'Escape to Goa\'s stunning beaches, Portuguese heritage, vibrant nightlife, and laid-back vibe. Perfect for relaxation and adventure.',
      highlights: [
        { icon: Camera, text: 'Beautiful Beaches' },
        { icon: Landmark, text: 'Portuguese Architecture' },
        { icon: Star, text: 'Water Sports' }
      ],
      rating: 4.9,
      bestTime: 'Nov - May',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              <MapPin size={16} />
              Explore Destinations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Incredible Cities to Discover
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            From historic Hyderabad to vibrant Bangalore, explore India's most captivating cities with our premium transportation services.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-10`} />
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&q=85';
                  }}
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={12} />
                  <span className="text-sm font-semibold text-gray-900">{destination.rating}</span>
                </div>

                {/* Best Time Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={12} />
                  <span className="text-xs font-medium">{destination.bestTime}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {destination.name}
                    </h3>
                    <p className="text-sm text-[#0056D2] font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {destination.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-6 h-6 bg-[#43E0F8]/10 rounded-full flex items-center justify-center">
                        <highlight.icon size={12} className="text-[#43E0F8]" />
                      </div>
                      <span style={{ fontFamily: 'Manrope, sans-serif' }}>{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/fleet')}
                    className="flex-1 py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Book Ride
                    <ChevronRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#43E0F8] hover:text-[#43E0F8] transition-all duration-300"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Explore These Amazing Cities?
          </h3>
          <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Let us take you on a memorable journey through India's most incredible destinations with our premium transportation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/fleet')}
              className="px-8 py-4 bg-white text-[#0056D2] font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Book Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
