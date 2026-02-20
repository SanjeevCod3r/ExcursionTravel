import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, MapPin, Phone, Mail, User, CheckCircle, X, Car, CreditCard, Shield, Star, Navigation, Settings } from 'lucide-react';

export const Booking = ({ onBack, vehicle, service }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropLocation: '',
    passengers: '1',
    specialRequests: '',
    paymentMethod: 'card',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedFare, setEstimatedFare] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const totalSteps = 4;

  // Mock location suggestions
  const mockLocations = [
    'Indira Gandhi International Airport, New Delhi',
    'Chhatrapati Shivaji Maharaj International Airport, Mumbai',
    'Kempegowda International Airport, Bangalore',
    'Netaji Subhas Chandra Bose International Airport, Kolkata',
    'Rajiv Gandhi International Airport, Hyderabad',
    'Sardar Vallabhbhai Patel International Airport, Ahmedabad',
    'Cochin International Airport, Kochi',
    'Pune International Airport, Pune',
    'Chennai International Airport, Chennai',
    'Goa International Airport, Goa'
  ];

  useEffect(() => {
    // Calculate estimated fare when locations change
    if (formData.pickupLocation && formData.dropLocation && formData.passengers) {
      const baseFare = 1500;
      const distanceMultiplier = Math.random() * 2 + 1; // Random distance factor
      const passengerMultiplier = parseInt(formData.passengers);
      const estimatedFare = Math.round(baseFare * distanceMultiplier * (passengerMultiplier * 0.8));
      setEstimatedFare(estimatedFare);
    }
  }, [formData.pickupLocation, formData.dropLocation, formData.passengers]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Handle location suggestions
    if (name === 'pickupLocation' || name === 'dropLocation') {
      const suggestions = mockLocations.filter(loc =>
        loc.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setLocationSuggestions(suggestions);
    }
  };

  const selectLocationSuggestion = (location, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: location
    }));
    setLocationSuggestions([]);
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        break;
      case 2:
        if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
        if (!formData.pickupTime) newErrors.pickupTime = 'Pickup time is required';
        if (!formData.pickupLocation.trim()) newErrors.pickupLocation = 'Pickup location is required';
        if (!formData.dropLocation.trim()) newErrors.dropLocation = 'Drop location is required';
        break;
      case 3:
        // Additional validation if needed
        break;
      case 4:
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    onBack();
  };

  const steps = [
    { id: 1, title: 'Personal Info', icon: User, description: 'Your details' },
    { id: 2, title: 'Trip Details', icon: MapPin, description: 'Journey info' },
    { id: 3, title: 'Preferences', icon: Settings, description: 'Special requests' },
    { id: 4, title: 'Confirmation', icon: CheckCircle, description: 'Review & pay' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/5 to-[#43E0F8]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/5 to-[#5DFDCB]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-[#0056D2] transition-all duration-300 border border-gray-100"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Book Your Ride
            </h1>
            <p className="text-gray-600 mt-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Step {currentStep} of {totalSteps} • {steps[currentStep - 1].description}
            </p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-4"
        >
          <div className="flex items-center justify-between mb-3">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                    step.id <= currentStep
                      ? 'bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                  }`}
                >
                  <step.icon size={currentStep >= step.id ? 14 : 12} className="sm:hidden" />
                  <step.icon size={currentStep >= step.id ? 16 : 14} className="hidden sm:block" />
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: step.id < currentStep ? 1 : 0 }}
                    className="flex-1 h-1 mx-2 sm:mx-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full"
                    style={{ originX: 0 }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {steps[currentStep - 1].description}
            </p>
          </div>
        </motion.div>

        {/* Vehicle/Service Summary */}
        {(vehicle || service) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white p-6 rounded-2xl mb-8 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {vehicle ? vehicle.name : service.title}
                  </h3>
                  <p className="text-white/90" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {vehicle ? `${vehicle.seats} • ${vehicle.features.slice(0, 2).join(' • ')}` : service.description}
                  </p>
                </div>
              </div>
              {estimatedFare && (
                <div className="text-right">
                  <div className="text-2xl font-bold">₹{estimatedFare}</div>
                  <div className="text-sm text-white/80">Estimated Fare</div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Form Steps */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 sm:p-8 md:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <User className="text-[#0056D2] w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Personal Information
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Tell us about yourself so we can provide personalized service
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900 text-base`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-1"
                        >
                          <X size={14} />
                          {errors.firstName}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-1"
                        >
                          <X size={14} />
                          {errors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <X size={14} />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <X size={14} />
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-[#0056D2] w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Trip Details
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Where and when do you need transportation?
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Pickup Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.pickupDate ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        />
                      </div>
                      {errors.pickupDate && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-1"
                        >
                          <X size={14} />
                          {errors.pickupDate}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Pickup Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="time"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.pickupTime ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        />
                      </div>
                      {errors.pickupTime && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-1"
                        >
                          <X size={14} />
                          {errors.pickupTime}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Pickup Location *
                    </label>
                    <div className="relative">
                      <Navigation className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.pickupLocation ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="Enter pickup location or airport"
                      />

                      {/* Location Suggestions */}
                      {locationSuggestions.length > 0 && formData.pickupLocation && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-10 max-h-48 overflow-y-auto"
                        >
                          {locationSuggestions.map((location, index) => (
                            <button
                              key={index}
                              onClick={() => selectLocationSuggestion(location, 'pickupLocation')}
                              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                              style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                              <div className="flex items-center gap-3">
                                <MapPin className="text-gray-400 w-4 h-4 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{location}</span>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    {errors.pickupLocation && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <X size={14} />
                        {errors.pickupLocation}
                      </motion.p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Drop Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="dropLocation"
                        value={formData.dropLocation}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 ${errors.dropLocation ? 'border-red-300 bg-red-50' : 'border-gray-200'} focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                        placeholder="Enter destination"
                      />

                      {/* Location Suggestions */}
                      {locationSuggestions.length > 0 && formData.dropLocation && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-10 max-h-48 overflow-y-auto"
                        >
                          {locationSuggestions.map((location, index) => (
                            <button
                              key={index}
                              onClick={() => selectLocationSuggestion(location, 'dropLocation')}
                              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                              style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                              <div className="flex items-center gap-3">
                                <MapPin className="text-gray-400 w-4 h-4 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{location}</span>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    {errors.dropLocation && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <X size={14} />
                        {errors.dropLocation}
                      </motion.p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Number of Passengers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900 appearance-none"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map(num => (
                          <option key={num} value={num.toString()}>{num} Passenger{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Fare Estimate */}
                  {estimatedFare && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Estimated Fare
                          </h4>
                          <p className="text-sm text-green-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            Based on your route and preferences
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            ₹{estimatedFare}
                          </div>
                          <div className="text-sm text-green-600">Approximate</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="text-[#0056D2] w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Additional Preferences
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Any special requirements or preferences for your trip
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Let us know about any special requirements, accessibility needs, or preferences for your journey..."
                      rows="5"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 text-gray-900 resize-none"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                  </div>

                  {/* Service Guarantees */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 grid md:grid-cols-3 gap-4"
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <Shield className="text-blue-600 w-6 h-6 mb-2" />
                      <h4 className="font-semibold text-blue-800 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Safe & Secure
                      </h4>
                      <p className="text-xs text-blue-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        GPS tracking & verified drivers
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                      <Clock className="text-green-600 w-6 h-6 mb-2" />
                      <h4 className="font-semibold text-green-800 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Punctual Service
                      </h4>
                      <p className="text-xs text-green-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        On-time pickup guaranteed
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <Star className="text-purple-600 w-6 h-6 mb-2" />
                      <h4 className="font-semibold text-purple-800 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Premium Experience
                      </h4>
                      <p className="text-xs text-purple-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Clean, comfortable vehicles
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-[#0056D2] w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Review & Confirm
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Please review your booking details before confirming
                    </p>
                  </div>

                  {/* Booking Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-2xl p-6 mb-6"
                  >
                    <h4 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Booking Summary
                    </h4>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>Passenger</span>
                        <span className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>Contact</span>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {formData.email}
                          </div>
                          <div className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {formData.phone}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>Journey</span>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {formData.pickupDate}
                          </div>
                          <div className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {formData.pickupTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-start py-2 border-b border-gray-200">
                        <span className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>Route</span>
                        <div className="text-right max-w-xs">
                          <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            From: {formData.pickupLocation}
                          </div>
                          <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            To: {formData.dropLocation}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>Passengers</span>
                        <span className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {formData.passengers} Passenger{formData.passengers > 1 ? 's' : ''}
                        </span>
                      </div>

                      {formData.specialRequests && (
                        <div className="py-2 border-b border-gray-200">
                          <span className="text-gray-600 block mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Special Requests</span>
                          <span className="text-gray-900 text-sm italic" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {formData.specialRequests}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-4">
                        <span className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Total Estimated Fare
                        </span>
                        <span className="text-2xl font-bold text-[#0056D2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          ₹{estimatedFare || 'TBD'}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Payment Method */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Payment Method
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === 'card'
                            ? 'border-[#0056D2] bg-[#0056D2]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                            formData.paymentMethod === 'card' ? 'text-[#0056D2]' : 'text-gray-400'
                          }`} />
                          <div className="text-center">
                            <div className={`text-sm font-semibold ${
                              formData.paymentMethod === 'card' ? 'text-[#0056D2]' : 'text-gray-700'
                            }`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                              Credit/Debit Card
                            </div>
                          </div>
                        </div>
                      </label>

                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === 'upi'
                            ? 'border-[#0056D2] bg-[#0056D2]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">₹</span>
                          </div>
                          <div className="text-center">
                            <div className={`text-sm font-semibold ${
                              formData.paymentMethod === 'upi' ? 'text-[#0056D2]' : 'text-gray-700'
                            }`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                              UPI
                            </div>
                          </div>
                        </div>
                      </label>

                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === 'cash'
                            ? 'border-[#0056D2] bg-[#0056D2]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-green-600 to-green-800 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <div className="text-center">
                            <div className={`text-sm font-semibold ${
                              formData.paymentMethod === 'cash' ? 'text-[#0056D2]' : 'text-gray-700'
                            }`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                              Cash
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </motion.div>

                  {/* Terms and Conditions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="mt-1 text-[#0056D2] focus:ring-[#0056D2] rounded"
                      />
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        I agree to the{' '}
                        <a href="#" className="text-[#0056D2] hover:text-[#0056D2]/80 underline">
                          Terms and Conditions
                        </a>
                        {' '}and{' '}
                        <a href="#" className="text-[#0056D2] hover:text-[#0056D2]/80 underline">
                          Privacy Policy
                        </a>
                        . I understand the fare estimate is approximate and may vary based on actual distance and conditions.
                      </span>
                    </label>
                    {errors.termsAccepted && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        <X size={14} />
                        {errors.termsAccepted}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 flex items-center justify-between gap-4"
          >
            <motion.button
              whileHover={{ scale: currentStep > 1 ? 1.05 : 1 }}
              whileTap={{ scale: currentStep > 1 ? 0.95 : 1 }}
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 sm:px-6 py-3 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-[#0056D2] hover:text-[#0056D2]'
              }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <ArrowLeft size={16} />
              Previous
            </motion.button>

            {currentStep < totalSteps ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Next
                <ArrowRight size={16} />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-[#FE805A] to-[#FE6B47] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} />
                    Confirm Booking
                  </>
                )}
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Thank You Popup */}
        <AnimatePresence>
          {showThankYou && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                {/* Popup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-4 text-center"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>

                  {/* Message */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Booking Confirmed!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Your booking has been successfully submitted! You'll receive a confirmation email and SMS with all the details. Our team will contact you within 2 hours to finalize arrangements.
                  </motion.p>

                  {/* Booking Details Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-50 p-4 rounded-xl mb-6 text-left"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Booking Details
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Reference:</strong> XC-{Date.now().toString().slice(-6)}</p>
                      <p><strong>Pickup:</strong> {formData.pickupDate} at {formData.pickupTime}</p>
                      <p><strong>Route:</strong> {formData.pickupLocation} → {formData.dropLocation}</p>
                      <p><strong>Vehicle:</strong> {vehicle ? vehicle.name : 'As per availability'}</p>
                      <p><strong>Fare:</strong> ₹{estimatedFare || 'TBD'}</p>
                    </div>
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleThankYouClose}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Continue to Home
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
