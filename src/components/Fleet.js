import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Briefcase, Shield } from 'lucide-react';

export const Fleet = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const fleetCategories = [
    {
      name: 'Premium Sedans',
      icon: Briefcase,
      description: 'Luxury sedans for executive travel',
      vehicles: [
        {
          name: 'Mercedes E-Class',
          image: 'https://images.unsplash.com/photo-1634981297377-ffce46cb28e4?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '4 Passengers',
          features: ['Leather Seats', 'Climate Control', 'WiFi']
        },
        {
          name: 'BMW 5 Series',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '4 Passengers',
          features: ['Premium Audio', 'Massage Seats', 'Privacy Glass']
        }
      ]
    },
    {
      name: 'Luxury SUVs',
      icon: Shield,
      description: 'Spacious SUVs for comfort and style',
      vehicles: [
        {
          name: 'Toyota Fortuner',
          image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '7 Passengers',
          features: ['4WD', 'Premium Interior', 'Large Luggage Space']
        },
        {
          name: 'Ford Endeavour',
          image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '7 Passengers',
          features: ['Panoramic Sunroof', 'Captain Seats', 'Entertainment System']
        }
      ]
    },
    {
      name: 'Economy Fleet',
      icon: Users,
      description: 'Cost-effective options for daily commute',
      vehicles: [
        {
          name: 'Honda City',
          image: 'https://images.unsplash.com/photo-1552519507-cf6b0c2e7e81?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '4 Passengers',
          features: ['Fuel Efficient', 'Comfortable', 'Air Conditioning']
        },
        {
          name: 'Maruti Dzire',
          image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=srgb&fm=jpg&q=85',
          seats: '4 Passengers',
          features: ['Compact', 'Easy Parking', 'Great Mileage']
        }
      ]
    },
    {
      name: 'Buses & Coaches',
      icon: Users,
      description: 'Group transportation solutions',
      vehicles: [
        {
          name: 'Luxury Coach',
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: '45 Passengers',
          features: ['Reclining Seats', 'Entertainment', 'Washroom']
        },
        {
          name: 'Mini Bus',
          image: 'https://images.pexels.com/photos/3789823/pexels-photo-3789823.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: '20 Passengers',
          features: ['AC', 'Music System', 'Comfortable Seating']
        }
      ]
    }
  ];

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % fleetCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + fleetCategories.length) % fleetCategories.length);
  };

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-gray-50 to-white" data-testid="fleet-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="fleet-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full text-[#0056D2] text-sm font-semibold mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            data-testid="fleet-eyebrow"
          >
            BROWSE OUR FLEET
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
            data-testid="fleet-title"
          >
            Choose Your <span className="text-[#0056D2]">Perfect Ride</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="fleet-category-tabs">
          {fleetCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentCategory === index
                  ? 'bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0056D2]'
              }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid={`fleet-category-tab-${index}`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Fleet Display */}
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
          data-testid="fleet-display"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {fleetCategories[currentCategory].vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                data-testid={`fleet-vehicle-card-${index}`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    data-testid={`fleet-vehicle-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    data-testid={`fleet-vehicle-name-${index}`}
                  >
                    {vehicle.name}
                  </h3>
                  <p
                    className="text-[#0056D2] font-semibold mb-4"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`fleet-vehicle-seats-${index}`}
                  >
                    {vehicle.seats}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6" data-testid={`fleet-vehicle-features-${index}`}>
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    data-testid={`fleet-vehicle-book-button-${index}`}
                  >
                    Book Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCategory}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl text-gray-900 hover:bg-[#0056D2] hover:text-white transition-all duration-300"
            data-testid="fleet-prev-button"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextCategory}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl text-gray-900 hover:bg-[#0056D2] hover:text-white transition-all duration-300"
            data-testid="fleet-next-button"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
