import React, { useState } from 'react';
import { MapPin, Map as MapIcon, Loader2 } from 'lucide-react';
import { GooglePlacesAutocomplete } from './GooglePlacesAutocomplete';
import { MapSelector } from './MapSelector';

export const EnhancedLocationInput = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  required = false,
  name = ''
}) => {
  const [showMapSelector, setShowMapSelector] = useState(false);

  const handleMapLocationSelect = (location) => {
    // Create a synthetic event to maintain the same interface
    const syntheticEvent = {
      target: {
        name: name,
        value: location.name
      }
    };
    onChange(syntheticEvent);
  };

  return (
    <>
      <div className="relative">
        {/* Location Input with Map Button */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
          </div>
          
          {/* Use GooglePlacesAutocomplete for the input */}
          <GooglePlacesAutocomplete
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            required={required}
            name={name}
          />
          
          {/* Map Selector Button */}
          <button
            type="button"
            onClick={() => setShowMapSelector(true)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-300 hover:text-blue-400 transition-colors"
            title="Open map selector"
          >
            <MapIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Map Selector Modal */}
      {showMapSelector && (
        <MapSelector
          onLocationSelect={handleMapLocationSelect}
          onClose={() => setShowMapSelector(false)}
          initialLocation={value ? { name: value, lat: 0, lng: 0 } : null}
          placeholder={placeholder}
        />
      )}
    </>
  );
};
