import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Car, Users, Shield, Star, MapPin, Clock, Fuel, Settings, Briefcase } from 'lucide-react';

export const Fleet = ({ onBookNow }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    passengers: 'all',
    features: []
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fleet Categories Data
  const fleetCategories = [
    {
      name: 'SEDANS',
      icon: Briefcase,
      description: 'Our sedan fleet is designed for comfort, reliability, and executive travel. Ideal for business meetings, airport transfers, and city rides, our sedans offer a smooth, spacious, and professional travel experience. With well-maintained vehicles and trained chauffeurs, we ensure punctuality, safety, and a stress-free journey tailored to corporate and premium travel needs.',
      subcategories: [
        {
          name: 'Economy Sedans',
          vehicles: [
            {
              name: 'Maruti Suzuki Dzire',
              seats: '4 Passengers',
              features: ['Fuel Efficient', 'Air Conditioning', 'Comfortable Ride'],
              image: 'https://images.unsplash.com/photo-1552519507-cf6b0c2e7e81?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Hyundai Aura',
              seats: '4 Passengers',
              features: ['Modern Interior', 'Smooth Engine', 'Good Mileage'],
              image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Honda Amaze',
              seats: '4 Passengers',
              features: ['Reliable Performance', 'Spacious Cabin', 'Advanced Safety'],
              image: 'https://images.unsplash.com/photo-1552519507-cf6b0c2e7e81?crop=entropy&cs=srgb&fm=jpg&q=85'
            }
          ]
        },
        {
          name: 'Premium Sedans',
          vehicles: [
            {
              name: 'Maruti Suzuki Ciaz',
              seats: '4 Passengers',
              features: ['Premium Interior', 'Advanced Features', 'Comfortable Seating'],
              image: 'https://images.unsplash.com/photo-1552519507-cf6b0c2e7e81?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Hyundai Verna',
              seats: '4 Passengers',
              features: ['Modern Design', 'Superior Comfort', 'Tech Features'],
              image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Honda City',
              seats: '4 Passengers',
              features: ['Luxury Feel', 'Advanced Safety', 'Smooth Ride'],
              image: 'https://images.unsplash.com/photo-1552519507-cf6b0c2e7e81?crop=entropy&cs=srgb&fm=jpg&q=85'
            }
          ]
        },
        {
          name: 'Luxury Sedans',
          vehicles: [
            {
              name: 'Toyota Camry',
              seats: '4 Passengers',
              features: ['Executive Comfort', 'Premium Audio', 'Advanced Tech'],
              image: 'https://images.unsplash.com/photo-1634981297377-ffce46cb28e4?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Corolla Altis',
              seats: '4 Passengers',
              features: ['Hybrid Option', 'Superior Comfort', 'Reliable Performance'],
              image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Mercedes E Class',
              seats: '4 Passengers',
              features: ['Luxury Experience', 'Premium Interior', 'Advanced Safety'],
              image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85'
            }
          ]
        }
      ]
    },
    {
      name: 'MUV Vehicles',
      icon: Users,
      description: 'Our MUV fleet is designed for space, versatility, and group comfort. Ideal for family travel, corporate teams, airport transfers, and long-distance journeys, our MUVs provide ample legroom, generous luggage capacity, and a relaxed travel experience. With well-maintained vehicles and professional chauffeurs, we ensure safety, punctuality, and a smooth ride for group and premium travel needs.',
      vehicles: [
        {
          name: 'Ertiga',
          seats: '7 Passengers',
          features: ['Spacious Interior', 'Family Friendly', 'Good Ground Clearance'],
          image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
        },
        {
          name: 'Kia Carens',
          seats: '7 Passengers',
          features: ['Modern Design', 'Connected Car Tech', 'Comfortable Ride'],
          image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
        },
        {
          name: 'Maruti XL6',
          seats: '6 Passengers',
          features: ['Premium Feel', 'Spacious Cabin', 'Advanced Features'],
          image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
        }
      ]
    },
    {
      name: 'SUV Vehicles',
      icon: Shield,
      description: 'Our SUV fleet combines power, luxury, and capability. Perfect for executive travel, family adventures, and demanding journeys, our SUVs offer superior comfort, advanced safety features, and impressive performance. With professional chauffeurs and well-maintained vehicles, we deliver a premium driving experience that combines luxury with rugged capability.',
      subcategories: [
        {
          name: 'Premium SUVs',
          vehicles: [
            {
              name: 'Toyota Crysta',
              seats: '7 Passengers',
              features: ['Premium Comfort', 'Advanced Safety', 'Spacious Interior'],
              image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Toyota Innova Hycross',
              seats: '8 Passengers',
              features: ['Hybrid Technology', 'Luxury Seating', 'Advanced Features'],
              image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Toyota Fortuner',
              seats: '7 Passengers',
              features: ['Powerful Engine', 'Off-road Capability', 'Premium Interior'],
              image: 'https://images.unsplash.com/photo-1634981297325-fbb675134d5a?crop=entropy&cs=srgb&fm=jpg&q=85'
            }
          ]
        },
        {
          name: 'Luxury SUVs',
          vehicles: [
            {
              name: 'Mercedes GLS',
              seats: '7 Passengers',
              features: ['Ultimate Luxury', 'Advanced Tech', 'Executive Comfort'],
              image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85'
            },
            {
              name: 'Audi Q7',
              seats: '7 Passengers',
              features: ['German Engineering', 'Premium Audio', 'Luxury Experience'],
              image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85'
            }
          ]
        }
      ]
    },
    {
      name: 'VANS',
      icon: Users,
      description: 'Our van fleet is designed for maximum space, comfort, and group travel. Ideal for corporate teams, family trips, events, airport transfers, and outstation journeys, our vans offer spacious seating, ample luggage capacity, and a comfortable ride for larger groups. With well-maintained vehicles and trained chauffeurs, we ensure safety, punctuality, and a smooth, hassle-free journey tailored to group and commercial travel needs.',
      vehicles: [
        {
          name: 'Toyota Vellfire',
          seats: '7 Passengers',
          features: ['Luxury Van Experience', 'Premium Interior', 'Advanced Comfort'],
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Mercedes Sprinter',
          seats: '12 Passengers',
          features: ['Commercial Grade', 'Spacious Interior', 'Professional Service'],
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Toyota Commuter',
          seats: '15 Passengers',
          features: ['Large Capacity', 'Comfortable Seating', 'Reliable Performance'],
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ]
    },
    {
      name: 'TRAVELLER',
      icon: Users,
      description: 'Our Traveller fleet is designed for comfortable, spacious, and efficient group travel. Ideal for corporate tours, family vacations, pilgrimages, events, and long-distance journeys, our Travellers offer generous seating, ample luggage space, and a smooth ride for large groups. With well-maintained vehicles and experienced chauffeurs, we ensure safety, punctuality, and a relaxed, hassle-free travel experience tailored to group and tour travel needs.',
      vehicles: [
        {
          name: 'Tempo Traveller',
          seats: '12-15 Passengers',
          features: ['Spacious Interior', 'Tour Ready', 'Comfortable Journey'],
          image: 'https://images.pexels.com/photos/3789823/pexels-photo-3789823.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Force Urbania',
          seats: '13 Passengers',
          features: ['Modern Design', 'AC Comfort', 'Reliable for Long Trips'],
          image: 'https://images.pexels.com/photos/3789823/pexels-photo-3789823.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ]
    },
    {
      name: 'BUSES & COACHES',
      icon: Users,
      description: 'Our bus and coach fleet delivers exceptional group transportation solutions. Perfect for corporate events, large family gatherings, tours, and commercial transport needs, our vehicles offer superior comfort, modern amenities, and professional service. With experienced drivers and well-maintained fleet, we ensure safe, punctual, and enjoyable journeys for large groups.',
      vehicles: [
        {
          name: '43-Seater Luxury Volvo',
          seats: '43 Passengers',
          features: ['Luxury Seating', 'Entertainment System', 'Premium Comfort'],
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: '38-Seater Luxury Volvo',
          seats: '38 Passengers',
          features: ['Executive Comfort', 'Modern Amenities', 'Professional Service'],
          image: 'https://images.pexels.com/photos/29586609/pexels-photo-29586609.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ]
    }
  ];

  // Flatten all vehicles for easier filtering
  const allVehicles = useMemo(() => {
    const vehicles = [];
    fleetCategories.forEach(category => {
      if (category.subcategories) {
        category.subcategories.forEach(subcategory => {
          subcategory.vehicles.forEach(vehicle => {
            vehicles.push({
              ...vehicle,
              category: category.name,
              subcategory: subcategory.name,
              categoryIcon: category.icon
            });
          });
        });
      } else if (category.vehicles) {
        category.vehicles.forEach(vehicle => {
          vehicles.push({
            ...vehicle,
            category: category.name,
            categoryIcon: category.icon
          });
        });
      }
    });
    return vehicles;
  }, []);

  // Filter vehicles based on search and filters
  const filteredVehicles = useMemo(() => {
    return allVehicles.filter(vehicle => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category filter
      const matchesCategory = selectedFilters.category === 'all' || vehicle.category === selectedFilters.category;

      // Passengers filter
      const vehiclePassengers = parseInt(vehicle.seats.split(' ')[0]);
      const matchesPassengers = selectedFilters.passengers === 'all' ||
        (selectedFilters.passengers === '1-4' && vehiclePassengers <= 4) ||
        (selectedFilters.passengers === '5-7' && vehiclePassengers >= 5 && vehiclePassengers <= 7) ||
        (selectedFilters.passengers === '8+' && vehiclePassengers >= 8);

      // Features filter
      const matchesFeatures = selectedFilters.features.length === 0 ||
        selectedFilters.features.every(feature =>
          vehicle.features.some(vFeature => vFeature.toLowerCase().includes(feature.toLowerCase()))
        );

      return matchesSearch && matchesCategory && matchesPassengers && matchesFeatures;
    });
  }, [allVehicles, searchTerm, selectedFilters]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleFeatureFilter = (feature) => {
    setSelectedFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: 'all',
      passengers: 'all',
      features: []
    });
    setSearchTerm('');
  };

  const availableFeatures = ['AC', 'Fuel Efficient', 'Luxury', 'Spacious', 'Premium', 'Advanced Safety', 'Entertainment'];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" data-testid="fleet-section">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/10 to-[#43E0F8]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/10 to-[#5DFDCB]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0056D2]/5 to-[#43E0F8]/5 rounded-full filter blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20 - (i * 10), 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 10 + (i * 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2
            }}
            className={`absolute w-3 h-3 rounded-full ${
              i % 3 === 0 ? 'bg-[#0056D2]/20' :
              i % 3 === 1 ? 'bg-[#43E0F8]/20' :
              'bg-[#5DFDCB]/20'
            }`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0056D2]/10 via-[#43E0F8]/10 to-[#0056D2]/10 backdrop-blur-xl rounded-full border border-[#43E0F8]/30 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full"
            />
            <span className="text-[#0056D2] font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              EXPLORE OUR FLEET
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
          >
            Find Your{' '}
            <span className="bg-gradient-to-r from-[#0056D2] via-[#43E0F8] to-[#5DFDCB] bg-clip-text text-transparent">
              Perfect Vehicle
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Discover our comprehensive fleet of premium vehicles. Use our advanced search and filter tools to find exactly what you need for your journey.
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles by name or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0056D2]/20 focus:border-[#0056D2] transition-all duration-300 text-gray-900 placeholder-gray-500"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <Filter className="w-5 h-5" />
              Filters
              {(selectedFilters.category !== 'all' || selectedFilters.passengers !== 'all' || selectedFilters.features.length > 0) && (
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {(selectedFilters.category !== 'all' ? 1 : 0) + (selectedFilters.passengers !== 'all' ? 1 : 0) + selectedFilters.features.length}
                </span>
              )}
            </motion.button>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {fleetCategories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange('category', selectedFilters.category === category.name ? 'all' : category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilters.category === category.name
                    ? 'bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:border-[#0056D2]/30'
                }`}
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Advanced Filters
                  </h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#0056D2] hover:text-[#0056D2]/80 font-medium transition-colors"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Passenger Capacity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Passenger Capacity
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Capacities' },
                        { value: '1-4', label: '1-4 Passengers' },
                        { value: '5-7', label: '5-7 Passengers' },
                        { value: '8+', label: '8+ Passengers' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="passengers"
                            value={option.value}
                            checked={selectedFilters.passengers === option.value}
                            onChange={(e) => handleFilterChange('passengers', e.target.value)}
                            className="text-[#0056D2] focus:ring-[#0056D2]"
                          />
                          <span className="text-sm text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Key Features
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableFeatures.map((feature) => (
                        <label key={feature} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.features.includes(feature)}
                            onChange={() => toggleFeatureFilter(feature)}
                            className="text-[#0056D2] focus:ring-[#0056D2] rounded"
                          />
                          <span className="text-xs text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {feature}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Vehicle Category
                    </label>
                    <select
                      value={selectedFilters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]/20 focus:border-[#0056D2]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <option value="all">All Categories</option>
                      {fleetCategories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Showing <span className="font-semibold text-[#0056D2]">{filteredVehicles.length}</span> of <span className="font-semibold">{allVehicles.length}</span> vehicles
          </div>
          {filteredVehicles.length !== allVehicles.length && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-[#0056D2] hover:text-[#0056D2]/80 font-medium transition-colors"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </motion.div>

        {/* Vehicles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={JSON.stringify(filteredVehicles)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={`${vehicle.category}-${vehicle.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0056D2]/20 via-[#43E0F8]/20 to-[#5DFDCB]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                    <vehicle.categoryIcon className="w-3 h-3 text-[#0056D2]" />
                    <span className="text-xs font-semibold text-[#0056D2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Passenger Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0056D2] shadow-lg"
                  >
                    {vehicle.seats}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {vehicle.name}
                  </motion.h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#0056D2]/5 to-[#43E0F8]/5 text-[#0056D2] text-xs sm:text-sm rounded-full border border-[#0056D2]/10 hover:border-[#0056D2]/30 transition-all duration-300 font-medium"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        +{vehicle.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Book Now Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(254, 128, 90, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      onBookNow?.({ vehicle });
                    }}
                    className="w-full relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                      Book Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-[#0056D2]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              No vehicles found
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Try adjusting your search terms or filters to find more options.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
