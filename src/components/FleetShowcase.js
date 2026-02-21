import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Fuel, Settings, Star, ChevronRight } from 'lucide-react';

export const FleetShowcase = () => {
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz E-Class',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
      category: 'Luxury Sedan',
      seats: 5,
      fuel: 'Petrol',
      features: ['GPS Navigation', 'Leather Seats', 'Climate Control', 'Premium Sound'],
      price: '₹4,500/day',
      rating: 4.9
    },
    {
      id: 2,
      name: 'BMW X5',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
      category: 'SUV',
      seats: 7,
      fuel: 'Diesel',
      features: ['All-Wheel Drive', 'Panoramic Roof', 'Heated Seats', 'Advanced Safety'],
      price: '₹6,200/day',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Audi Q7',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
      category: 'Luxury SUV',
      seats: 7,
      fuel: 'Petrol',
      features: ['Quattro AWD', 'Virtual Cockpit', 'Massage Seats', 'Night Vision'],
      price: '₹7,800/day',
      rating: 4.9
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMEZGRiIgZmlsbC1vcGFjaXR5PSIwLjA0Ij4KPHBhdGggZD0iTTM2IDE0YzAuNTUyIDAgMSAwLjQ0OCAxIDFzLTAuNDQ4IDEtMSAxLTEtMC40NDgtMS0xIDAtLjQ0OC0xLTFMMzYgMTR6TTMwIDJjMS4xMDQgMCAyIC44OTYgMiAycy0uODk2IDItMiAyLTIgMC44OTYtMi0yIDAtLjg5Ni0yLTJWNFoiLz4KPC9nPgo8L2c+Cg==')] bg-repeat"></div>
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
            <Car size={20} />
            <span>Premium Fleet</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Choose Your <span className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] bg-clip-text text-transparent">Perfect Ride</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Discover our meticulously maintained fleet of premium vehicles, from luxury sedans to spacious SUVs
          </p>
        </motion.div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="text-sm font-semibold text-gray-900">{car.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {car.name}
                  </h3>
                  <p className="text-white/90 text-sm">{car.category}</p>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                {/* Specs */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel size={16} />
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#0056D2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {car.price}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="text-[#0056D2] text-xs font-medium">
                        +{car.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  <span>Book Now</span>
                  <ChevronRight className="transition-transform duration-300 group-hover/btn:translate-x-1" size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Fleet Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-[#0056D2] text-[#0056D2] font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <Settings size={20} />
            <span>View Complete Fleet</span>
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
