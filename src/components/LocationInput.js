import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

// Common Indian cities and locations for fallback
const INDIAN_LOCATIONS = [
  'Delhi, India',
  'Mumbai, India', 
  'Bangalore, India',
  'Chennai, India',
  'Kolkata, India',
  'Hyderabad, India',
  'Pune, India',
  'Ahmedabad, India',
  'Jaipur, India',
  'Lucknow, India',
  'Indore, India',
  'Nagpur, India',
  'Patna, India',
  'Ludhiana, India',
  'Kochi, India',
  'Agra, India',
  'Varanasi, India',
  'Coimbatore, India',
  'Madurai, India',
  'Visakhapatnam, India',
  'Goa, India',
  'Shimla, India',
  'Manali, India',
  'Ooty, India',
  'Mysore, India',
  'Udaipur, India',
  'Jodhpur, India',
  'Jaisalmer, India',
  'Rishikesh, India',
  'Haridwar, India',
  'Amritsar, India',
  'Chandigarh, India',
  'Dehradun, India',
  'Raipur, India',
  'Bhubaneswar, India',
  'Guwahati, India',
  'Thiruvananthapuram, India',
  'Mangalore, India',
  'Vijayawada, India',
  'Tirupati, India',
  'Pushkar, India',
  'Ujjain, India',
  'Shirdi, India',
  'Taj Mahal, Agra, India',
  'Red Fort, Delhi, India',
  'India Gate, Delhi, India',
  'Gateway of India, Mumbai, India',
  'Marine Drive, Mumbai, India',
  'Juhu Beach, Mumbai, India',
  'Bangalore Palace, Bangalore, India',
  'Lalbagh Botanical Garden, Bangalore, India',
  'Cubbon Park, Bangalore, India',
  'Marina Beach, Chennai, India',
  'Kapaleeshwarar Temple, Chennai, India',
  'Fort St. George, Chennai, India',
  'Howrah Bridge, Kolkata, India',
  'Victoria Memorial, Kolkata, India',
  'Indian Museum, Kolkata, India',
  'Charminar, Hyderabad, India',
  'Golkonda Fort, Hyderabad, India',
  'Hussain Sagar Lake, Hyderabad, India',
  'Shaniwar Wada, Pune, India',
  'Agakhan Palace, Pune, India',
  'Sabi Sabi, Pune, India',
  'Sabarmati Ashram, Ahmedabad, India',
  'Kankaria Lake, Ahmedabad, India',
  'Adalaj Stepwell, Ahmedabad, India',
  'City Palace, Jaipur, India',
  'Hawa Mahal, Jaipur, India',
  'Amber Fort, Jaipur, India',
  'Taj Mahal, Agra, India',
  'Agra Fort, Agra, India',
  'Fatehpur Sikri, Agra, India'
];

export const LocationInput = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  required = false,
  name = ''
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const inputRef = useRef(null);

  // Update internal state when external value changes
  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Call the original onChange handler
    const syntheticEvent = {
      target: {
        name: name,
        value: newValue
      }
    };
    onChange(syntheticEvent);

    if (newValue.length > 1) {
      setIsLoading(true);
      
      // Simulate loading delay for better UX
      setTimeout(() => {
        const filtered = INDIAN_LOCATIONS.filter(location =>
          location.toLowerCase().includes(newValue.toLowerCase())
        ).slice(0, 8); // Limit to 8 suggestions
        
        setSuggestions(filtered);
        setShowSuggestions(true);
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectLocation = (location) => {
    setInputValue(location);
    
    const syntheticEvent = {
      target: {
        name: name,
        value: location
      }
    };
    onChange(syntheticEvent);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isLoading ? (
            <Loader2 className="h-5 w-5 text-blue-300 animate-spin" />
          ) : (
            <MapPin className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
          )}
        </div>
        <input
          type="text"
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300 text-sm ${className}`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
          }}
          required={required}
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl max-h-60 overflow-y-auto">
          {suggestions.map((location, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectLocation(location)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-start gap-3 border-b border-gray-100 last:border-b-0"
            >
              <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">
                  {location}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {showSuggestions && !isLoading && suggestions.length === 0 && inputValue.length > 1 && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
          <div className="px-4 py-3 text-sm text-gray-500 text-center">
            No locations found. Try typing a city name.
          </div>
        </div>
      )}
    </div>
  );
};
