import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search, X, Navigation } from 'lucide-react';

export const MapSelector = ({ 
  onLocationSelect, 
  onClose, 
  initialLocation = null,
  placeholder = "Search for a location or click on the map"
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [isSearching, setIsSearching] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 28.6139, lng: 77.2090 }); // Delhi default
  const [markerPosition, setMarkerPosition] = useState(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  // Sample location data for search
  const sampleLocations = [
    { name: "Indira Gandhi International Airport, Delhi", lat: 28.5665, lng: 77.1031 },
    { name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai", lat: 19.0896, lng: 72.8656 },
    { name: "Kempegowda International Airport, Bangalore", lat: 13.1986, lng: 77.7066 },
    { name: "Chennai International Airport, Chennai", lat: 12.9941, lng: 80.1811 },
    { name: "Netaji Subhash Chandra Bose International Airport, Kolkata", lat: 22.6581, lng: 88.4476 },
    { name: "Rajiv Gandhi International Airport, Hyderabad", lat: 17.2313, lng: 78.4299 },
    { name: "Cochin International Airport, Kochi", lat: 10.1520, lng: 76.4011 },
    { name: "Sardar Vallabhbhai Patel International Airport, Ahmedabad", lat: 23.0773, lng: 72.6347 },
    { name: "Pune Airport, Pune", lat: 18.5822, lng: 73.9197 },
    { name: "Goa International Airport, Goa", lat: 15.3808, lng: 73.8314 },
    { name: "Jaipur International Airport, Jaipur", lat: 26.8244, lng: 75.8122 },
    { name: "Lucknow Airport, Lucknow", lat: 26.7606, lng: 80.8893 },
    { name: "Taj Mahal, Agra", lat: 27.1751, lng: 78.0421 },
    { name: "Red Fort, Delhi", lat: 28.6562, lng: 77.2410 },
    { name: "Gateway of India, Mumbai", lat: 18.9217, lng: 72.8347 },
    { name: "Marine Drive, Mumbai", lat: 18.9440, lng: 72.8225 },
    { name: "Bangalore Palace, Bangalore", lat: 12.9913, lng: 77.5930 },
    { name: "Lalbagh Botanical Garden, Bangalore", lat: 12.9507, lng: 77.5859 },
    { name: "Marina Beach, Chennai", lat: 13.0497, lng: 80.2824 },
    { name: "Kapaleeshwarar Temple, Chennai", lat: 13.0416, lng: 80.2698 },
    { name: "Howrah Bridge, Kolkata", lat: 22.5768, lng: 88.3493 },
    { name: "Victoria Memorial, Kolkata", lat: 22.5448, lng: 88.3426 },
    { name: "Charminar, Hyderabad", lat: 17.3616, lng: 78.4747 },
    { name: "Golkonda Fort, Hyderabad", lat: 17.3840, lng: 78.4011 },
    { name: "Hussain Sagar Lake, Hyderabad", lat: 17.4239, lng: 78.4738 },
    { name: "Shaniwar Wada, Pune", lat: 18.5184, lng: 73.8569 },
    { name: "Agakhan Palace, Pune", lat: 18.5315, lng: 73.8565 },
    { name: "Sabarmati Ashram, Ahmedabad", lat: 23.0618, lng: 72.5808 },
    { name: "Kankaria Lake, Ahmedabad", lat: 23.0090, lng: 72.6007 },
    { name: "City Palace, Jaipur", lat: 26.9254, lng: 75.8237 },
    { name: "Hawa Mahal, Jaipur", lat: 26.9124, lng: 75.8270 },
    { name: "Amber Fort, Jaipur", lat: 26.9855, lng: 75.8513 }
  ];

  useEffect(() => {
    // Initialize map when component mounts
    initializeMap();
    return () => {
      // Cleanup map instance
      if (mapInstance.current) {
        // Map cleanup would go here if using a real map library
      }
    };
  }, []);

  const initializeMap = () => {
    // This is a simplified map implementation
    // In a real app, you would use Google Maps, Mapbox, or Leaflet
    console.log('Map initialized at:', mapCenter);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.length > 2) {
      setIsSearching(true);
      
      // Simulate search delay
      setTimeout(() => {
        const results = sampleLocations.filter(location =>
          location.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setMarkerPosition({ lat: location.lat, lng: location.lng });
    setMapCenter({ lat: location.lat, lng: location.lng });
    setSearchQuery(location.name);
    setSearchResults([]);
  };

  const handleMapClick = (lat, lng) => {
    const location = {
      name: `Custom Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
      lat,
      lng
    };
    handleLocationSelect(location);
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
      onClose();
    }
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = {
            name: "Current Location",
            lat: latitude,
            lng: longitude
          };
          handleLocationSelect(currentLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your current location');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Select Location</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-1">{placeholder}</p>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for a location..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleGetCurrentLocation}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              title="Use current location"
            >
              <Navigation className="h-4 w-4" />
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-3 max-h-40 overflow-y-auto">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(result)}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-start gap-3"
                >
                  <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800">{result.name}</div>
                    <div className="text-xs text-gray-500">
                      {result.lat.toFixed(4)}, {result.lng.toFixed(4)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Map Area */}
        <div className="relative h-64 bg-gray-100">
          {/* Simplified Map Placeholder */}
          <div 
            ref={mapRef}
            className="w-full h-full flex items-center justify-center relative cursor-crosshair"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              // Convert click position to lat/lng (simplified)
              const lat = mapCenter.lat + (y - 128) * 0.001;
              const lng = mapCenter.lng + (x - 256) * 0.001;
              handleMapClick(lat, lng);
            }}
          >
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
              <p className="text-sm">Click on the map to select a location</p>
              <p className="text-xs mt-1">or search above</p>
            </div>
            
            {/* Map Marker */}
            {markerPosition && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full"
                style={{
                  top: `${50 - ((markerPosition.lat - mapCenter.lat) * 1000)}%`,
                  left: `${50 + ((markerPosition.lng - mapCenter.lng) * 1000)}%`
                }}
              >
                <div className="relative">
                  <MapPin className="h-8 w-8 text-blue-500 drop-shadow-lg" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setMapCenter({ lat: mapCenter.lat + 0.01, lng: mapCenter.lng });
              }}
              className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50"
            >
              ↑
            </button>
            <button
              onClick={() => {
                setMapCenter({ lat: mapCenter.lat - 0.01, lng: mapCenter.lng });
              }}
              className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50"
            >
              ↓
            </button>
          </div>
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="p-6 bg-blue-50 border-t border-blue-100">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-500" />
              <div>
                <div className="font-medium text-gray-800">{selectedLocation.name}</div>
                <div className="text-sm text-gray-500">
                  Coordinates: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedLocation}
            className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Select Location
          </button>
        </div>
      </div>
    </div>
  );
};
