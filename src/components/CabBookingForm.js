import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';

export const CabBookingForm = () => {
  const [activeTab, setActiveTab] = useState('outstation');
  const [tripType, setTripType] = useState('oneway');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    destination: '',
    pickupDate: '',
    pickupTime: ''
  });

  const tabs = [
    { id: 'outstation', label: 'OutStation' },
    { id: 'local', label: 'Local' },
    { id: 'airport', label: 'Airport' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData, 'Trip type:', tripType, 'Tab:', activeTab);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-8 w-full max-w-md mx-auto lg:mx-0"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6"
      >
        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Book Your Ride
        </h3>
        <p className="text-blue-100 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Fast, easy, and reliable booking
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex mb-6 bg-white/5 rounded-xl p-1 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-2 sm:px-3 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'text-blue-100 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Trip Type Radio Buttons */}
      <div className="flex gap-4 sm:gap-6 mb-6 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
        <label className="flex items-center cursor-pointer flex-1">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === 'oneway'}
            onChange={(e) => setTripType(e.target.value)}
            className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-white font-medium text-sm sm:text-base">One Way</span>
        </label>
        <label className="flex items-center cursor-pointer flex-1">
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === 'round'}
            onChange={(e) => setTripType(e.target.value)}
            className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-white font-medium text-sm sm:text-base">Round Trip</span>
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Location */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            placeholder="Pick-Up Location"
            className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
            }}
            required
          />
        </div>

        {/* Destination */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Your Destination"
            className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
            }}
            required
          />
        </div>

        {/* Date and Time Row */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Pickup Date */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              className="w-full pl-12 pr-3 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
              }}
              required
            />
          </div>

          {/* Pickup Time */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="w-full pl-12 pr-3 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
              }}
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base shadow-xl"
          style={{
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
          }}
        >
          <Search className="h-5 w-5" />
          Search Cabs
        </motion.button>
      </form>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-blue-200 text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Best prices guaranteed • 24/7 support
        </p>
      </motion.div>
    </motion.div>
  );
};
