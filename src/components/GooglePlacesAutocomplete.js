import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { LocationInput } from './LocationInput';

export const GooglePlacesAutocomplete = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  required = false,
  name = ''
}) => {
  const [isGoogleMapsAvailable, setIsGoogleMapsAvailable] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const inputRef = useRef(null);
  const autocompleteService = useRef(null);
  const placesService = useRef(null);

  // Update internal state when external value changes
  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    // Check if Google Maps is available
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setIsGoogleMapsAvailable(true);
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        placesService.current = new window.google.maps.places.PlacesService(
          document.createElement('div')
        );
      } else {
        setIsGoogleMapsAvailable(false);
      }
    };

    // Check immediately
    checkGoogleMaps();
    
    // Only check again once if not available (reduced from 2000ms to 1000ms for faster fallback)
    if (!isGoogleMapsAvailable) {
      const timer = setTimeout(checkGoogleMaps, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

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

    if (newValue.length > 2 && autocompleteService.current) {
      setIsLoading(true);
      
      autocompleteService.current.getPlacePredictions(
        {
          input: newValue,
          componentRestrictions: { country: ['in'] }, // Restrict to India
          types: ['address', 'establishment', 'geocode']
        },
        (predictions, status) => {
          setIsLoading(false);
          
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPredictions(predictions);
            setShowSuggestions(true);
          } else {
            setPredictions([]);
            setShowSuggestions(false);
          }
        }
      );
    } else {
      setPredictions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectPlace = (place) => {
    // Get detailed place information
    if (placesService.current) {
      placesService.current.getDetails(
        { placeId: place.place_id },
        (result, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            // Format the address
            const formattedAddress = result.formatted_address || place.description;
            setInputValue(formattedAddress);
            
            // Create a synthetic event to maintain the same interface
            const syntheticEvent = {
              target: {
                name: name,
                value: formattedAddress
              }
            };
            
            onChange(syntheticEvent);
            setShowSuggestions(false);
            setPredictions([]);
          }
        }
      );
    } else {
      // Fallback if places service is not available
      const locationText = place.description || place;
      setInputValue(locationText);
      
      const syntheticEvent = {
        target: {
          name: name,
          value: locationText
        }
      };
      onChange(syntheticEvent);
      setShowSuggestions(false);
      setPredictions([]);
    }
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

  // If Google Maps is not available, use the fallback
  if (!isGoogleMapsAvailable) {
    return <LocationInput 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
      name={name}
    />;
  }

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
      {showSuggestions && predictions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl max-h-60 overflow-y-auto">
          {predictions.map((prediction, index) => (
            <button
              key={prediction.place_id || index}
              type="button"
              onClick={() => handleSelectPlace(prediction)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-start gap-3 border-b border-gray-100 last:border-b-0"
            >
              <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">
                  {prediction.structured_formatting?.main_text || prediction.description}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {prediction.structured_formatting?.secondary_text || ''}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {showSuggestions && !isLoading && predictions.length === 0 && inputValue.length > 2 && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
          <div className="px-4 py-3 text-sm text-gray-500 text-center">
            No locations found
          </div>
        </div>
      )}
    </div>
  );
};
