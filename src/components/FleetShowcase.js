import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Car, Users, Shield, Star, MapPin, Clock, Fuel, Settings, Briefcase, ChevronRight } from 'lucide-react';

export const FleetShowcase = ({ onBookNow }) => {
  const navigate = useNavigate();

  const handleBookNow = (vehicleName) => {
    navigate('/fleet');
  };
  const featuredVehicles = [
    {
      name: 'Mercedes E Class',
      category: 'Luxury Sedan',
      seats: '4 Passengers',
      features: ['Premium Interior', 'Advanced Safety', 'Executive Comfort'],
      image: '/asset/mercedes_e_class.png',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Toyota Innova Crysta',
      category: 'Premium MUV',
      seats: '7 Passengers',
      features: ['Spacious Interior', 'Family Comfort', 'Reliable Performance'],
      image: '/asset/toyota_innova.png',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Honda City',
      category: 'Premium Sedan',
      seats: '4 Passengers',
      features: ['Luxury Feel', 'Advanced Tech', 'Smooth Ride'],
      image: '/asset/honda_city.png',
      color: 'from-red-600 to-red-800'
    },
    {
      name: 'Maruti Suzuki Dzire',
      category: 'Economy Sedan',
      seats: '4 Passengers',
      features: ['Fuel Efficient', 'Air Conditioning', 'Comfortable Ride'],
      image: '/asset/maruti_dzire.png',
      color: 'from-green-600 to-green-800'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <Car size={16} />
              Our Fleet
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Premium Vehicles for Every Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Experience luxury and comfort with our meticulously maintained fleet of premium vehicles, driven by professional chauffeurs.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.color} opacity-10`} />
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=srgb&fm=jpg&q=85';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{vehicle.seats}</span>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {vehicle.name}
                  </h3>
                  <Star className="text-yellow-400 fill-current" size={16} />
                </div>
                <p className="text-sm text-[#0056D2] font-medium mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {vehicle.category}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#43E0F8] rounded-full" />
                      <span style={{ fontFamily: 'Manrope, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Now Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBookNow(vehicle.name)}
                  className="w-full py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Book Now
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore Our Complete Fleet
          </h3>
          <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Manrope, sans-serif' }}>
            From economy sedans to luxury SUVs, discover the perfect vehicle for your travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/fleet')}
              className="px-8 py-4 bg-white text-[#0056D2] font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              View All Vehicles
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/fleet')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Book Your Ride
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
