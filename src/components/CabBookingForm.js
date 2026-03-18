import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Search, User, Mail, Phone, Check, Car, IndianRupee } from 'lucide-react';
import { pricingData, cities, carTypes } from '../data/pricingData';

export const CabBookingForm = () => {
  const [activeTab, setActiveTab] = useState('outstation');
  const [tripType, setTripType] = useState('oneway');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [showPricing, setShowPricing] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [bookingStep, setBookingStep] = useState('form'); // 'form', 'pricing', 'userDetails', 'confirmation'
  
  const [formData, setFormData] = useState({
    pickupLocation: '',
    destination: '',
    pickupDate: '',
    pickupTime: ''
  });

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
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

  const handleUserDetailsChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const calculatePrice = () => {
    if (!selectedCity || !selectedCar) return 0;
    
    const cityPricing = pricingData[selectedCity];
    const carPricing = cityPricing[selectedCar];
    
    let basePrice = carPricing.baseCharge;
    
    // For outstation trips, use minimum charge
    if (activeTab === 'outstation') {
      basePrice = Math.max(basePrice, carPricing.outstationMinKms * carPricing.outstationRate);
    }
    
    return basePrice;
  };

  const handleSearchCabs = (e) => {
    e.preventDefault();
    if (!selectedCity || !selectedCar) {
      alert('Please select city and car type');
      return;
    }
    
    const price = calculatePrice();
    setCalculatedPrice(price);
    setBookingStep('pricing');
    setShowPricing(true);
  };

  const handleAcceptPrice = () => {
    setBookingStep('userDetails');
    setShowPricing(false);
    setShowUserForm(true);
  };

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please fill all details');
      return;
    }
    
    setBookingStep('confirmation');
    setShowUserForm(false);
    setShowConfirmation(true);
  };

  const handleConfirmBooking = () => {
    // Here you would normally send the data to your backend
    console.log('Booking confirmed:', {
      tripDetails: { ...formData, activeTab, tripType, selectedCity, selectedCar },
      userDetails,
      price: calculatedPrice
    });
    
    alert('Booking confirmed! We will contact you shortly.');
    
    // Reset form
    setFormData({
      pickupLocation: '',
      destination: '',
      pickupDate: '',
      pickupTime: ''
    });
    setUserDetails({
      name: '',
      email: '',
      phone: ''
    });
    setSelectedCity('');
    setSelectedCar('');
    setBookingStep('form');
    setShowConfirmation(false);
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
          {bookingStep === 'form' && 'Book Your Ride'}
          {bookingStep === 'pricing' && 'Pricing Details'}
          {bookingStep === 'userDetails' && 'Your Details'}
          {bookingStep === 'confirmation' && 'Confirm Booking'}
        </h3>
        <p className="text-blue-100 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {bookingStep === 'form' && 'Fast, easy, and reliable booking'}
          {bookingStep === 'pricing' && 'Best prices guaranteed'}
          {bookingStep === 'userDetails' && 'Please provide your details'}
          {bookingStep === 'confirmation' && 'Review your booking'}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Step 1: Booking Form */}
        {bookingStep === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
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

            {/* City Selection */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">Select City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                }}
                required
              >
                <option value="" className="text-gray-800">Choose your city</option>
                {cities.map((city) => (
                  <option key={city} value={city} className="text-gray-800">{city}</option>
                ))}
              </select>
            </div>

            {/* Car Type Selection */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">Select Car Type</label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                }}
                required
              >
                <option value="" className="text-gray-800">Choose car type</option>
                {carTypes.map((car) => (
                  <option key={car} value={car} className="text-gray-800">{car}</option>
                ))}
              </select>
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

            {/* Form Fields */}
            <form onSubmit={handleSearchCabs} className="space-y-4">
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
          </motion.div>
        )}

        {/* Step 2: Pricing Display */}
        {bookingStep === 'pricing' && (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-100 text-sm">Estimated Price</span>
                <Car className="h-5 w-5 text-blue-300" />
              </div>
              <div className="flex items-baseline justify-center mb-6">
                <IndianRupee className="h-6 w-6 text-white mr-1" />
                <span className="text-4xl font-bold text-white">{calculatedPrice}</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-blue-100">
                  <span>City:</span>
                  <span className="text-white font-medium">{selectedCity}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Car Type:</span>
                  <span className="text-white font-medium">{selectedCar}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Trip Type:</span>
                  <span className="text-white font-medium">{tripType === 'oneway' ? 'One Way' : 'Round Trip'}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Service Type:</span>
                  <span className="text-white font-medium capitalize">{activeTab}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={() => setBookingStep('form')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white/10 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Back
              </motion.button>
              <motion.button
                onClick={handleAcceptPrice}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl"
              >
                Accept & Continue
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: User Details Form */}
        {bookingStep === 'userDetails' && (
          <motion.div
            key="userDetails"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleUserFormSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleUserDetailsChange}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserDetailsChange}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  }}
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleUserDetailsChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  }}
                  required
                />
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={() => setBookingStep('pricing')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-white/10 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Back
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl"
                >
                  Continue
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 4: Booking Confirmation */}
        {bookingStep === 'confirmation' && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-400" />
                </div>
              </div>
              
              <h4 className="text-white text-lg font-semibold text-center mb-4">Booking Summary</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-blue-100">
                  <span>Name:</span>
                  <span className="text-white font-medium">{userDetails.name}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Email:</span>
                  <span className="text-white font-medium">{userDetails.email}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Phone:</span>
                  <span className="text-white font-medium">{userDetails.phone}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Pickup:</span>
                  <span className="text-white font-medium">{formData.pickupLocation}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Destination:</span>
                  <span className="text-white font-medium">{formData.destination}</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Date & Time:</span>
                  <span className="text-white font-medium">{formData.pickupDate} {formData.pickupTime}</span>
                </div>
                <div className="flex justify-between text-blue-100 pt-3 border-t border-white/20">
                  <span>Total Price:</span>
                  <span className="text-white font-bold text-lg">₹{calculatedPrice}</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleConfirmBooking}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-xl"
            >
              Confirm Booking
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      {bookingStep === 'form' && (
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
      )}
    </motion.div>
  );
};
