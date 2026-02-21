import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  IndianRupee,
  Mountain,
  Camera,
  Waves,
  TreePine,
  Tent,
  Calendar,
  Heart,
  ArrowRight,
  X
} from 'lucide-react';

export const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Comprehensive India Travel Packages Data
  const travelPackages = [
    // North India Packages
    {
      id: 1,
      name: 'Golden Triangle Tour',
      region: 'north',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      price: 45000,
      duration: '7 Days',
      rating: 4.8,
      reviews: 1250,
      highlights: ['Delhi', 'Agra', 'Jaipur', 'Taj Mahal', 'Red Fort', 'Hawa Mahal'],
      description: 'Experience the iconic Golden Triangle with Delhi, Agra and Jaipur - a perfect blend of history, culture and architecture.',
      itinerary: ['Delhi Sightseeing', 'Agra Taj Mahal', 'Jaipur City Palace', 'Fatehpur Sikri', 'Local Markets'],
      includes: ['Accommodation', 'Transportation', 'Guide', 'Meals', 'Entry Tickets'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 2,
      name: 'Kashmir Valley Paradise',
      region: 'north',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1598091383021-15bf608157ca?w=800',
      price: 65000,
      duration: '8 Days',
      rating: 4.9,
      reviews: 890,
      highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake', 'Mughal Gardens'],
      description: 'Discover the paradise on earth with stunning landscapes, serene lakes and snow-capped mountains.',
      itinerary: ['Srinagar Houseboat', 'Gulmarg Gondola', 'Pahalgam Valley', 'Betaab Valley', 'Aru Valley'],
      includes: ['Houseboat Stay', 'Transportation', 'Guide', 'Meals', 'Inner Line Permit'],
      bestTime: 'April - October',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 3,
      name: 'Himachal Hill Stations',
      region: 'north',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 35000,
      duration: '6 Days',
      rating: 4.7,
      reviews: 650,
      highlights: ['Shimla', 'Manali', 'Kullu Valley', 'Rohtang Pass', 'Hadimba Temple'],
      description: 'Explore the charming hill stations of Himachal Pradesh with breathtaking views and adventure activities.',
      itinerary: ['Shimla Sightseeing', 'Kufri Adventure', 'Manali Valley', 'Rohtang Pass', 'Solang Valley'],
      includes: ['Hotel Stay', 'Transportation', 'Guide', 'Meals', 'Adventure Activities'],
      bestTime: 'March - June',
      difficulty: 'Easy',
      maxAltitude: '3979m'
    },
    {
      id: 4,
      name: 'Rishikesh Adventure Trek',
      region: 'north',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      price: 25000,
      duration: '5 Days',
      rating: 4.6,
      reviews: 420,
      highlights: ['Rishikesh', 'Neer Garh Waterfall', 'Chopta Valley', 'Tungnath Temple', 'Chandrashila Peak'],
      description: 'An exhilarating trek through the Garhwal Himalayas with stunning views of the highest peaks.',
      itinerary: ['Rishikesh Acclimatization', 'Chopta Base Camp', 'Tungnath Temple', 'Chandrashila Summit', 'Return Journey'],
      includes: ['Camping Equipment', 'Guide', 'Meals', 'Transportation', 'Permits'],
      bestTime: 'April - June, September - November',
      difficulty: 'Moderate',
      maxAltitude: '4000m'
    },
    {
      id: 5,
      name: 'Rajasthan Desert Safari',
      region: 'north',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      price: 38000,
      duration: '6 Days',
      rating: 4.5,
      reviews: 780,
      highlights: ['Jaisalmer', 'Jodhpur', 'Udaipur', 'Pushkar', 'Thar Desert'],
      description: 'Experience the royal heritage and desert landscapes of Rajasthan with camel safaris and palace stays.',
      itinerary: ['Jaisalmer Fort', 'Jodhpur Mehrangarh', 'Udaipur City Palace', 'Pushkar Camel Fair', 'Desert Camping'],
      includes: ['Heritage Hotels', 'Camel Safari', 'Guide', 'Meals', 'Cultural Shows'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },

    // South India Packages
    {
      id: 6,
      name: 'Kerala Backwaters Tour',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
      price: 42000,
      duration: '7 Days',
      rating: 4.8,
      reviews: 950,
      highlights: ['Kochi', 'Alleppey', 'Munnar', 'Thekkady', 'Kovalam'],
      description: 'Cruise through the serene backwaters, explore spice plantations and relax on pristine beaches.',
      itinerary: ['Kochi Cultural Tour', 'Alleppey Houseboat', 'Munnar Tea Gardens', 'Thekkady Wildlife', 'Kovalam Beach'],
      includes: ['Houseboat Stay', 'Transportation', 'Guide', 'Meals', 'Spice Tour'],
      bestTime: 'September - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 7,
      name: 'Goa Beach Paradise',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      price: 35000,
      duration: '5 Days',
      rating: 4.7,
      reviews: 1100,
      highlights: ['North Goa', 'South Goa', 'Calangute Beach', 'Anjuna Flea Market', 'Dudhsagar Waterfall'],
      description: 'Relax on golden beaches, enjoy water sports and experience the vibrant nightlife of Goa.',
      itinerary: ['Calangute Beach', 'Fort Aguada', 'Anjuna Market', 'Dudhsagar Falls', 'South Goa Beaches'],
      includes: ['Beach Resort', 'Transportation', 'Guide', 'Meals', 'Water Sports'],
      bestTime: 'November - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 8,
      name: 'Ooty & Coorg Hills',
      region: 'south',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 32000,
      duration: '6 Days',
      rating: 4.6,
      reviews: 580,
      highlights: ['Ooty', 'Coonoor', 'Coorg', 'Abbey Falls', 'Raja Seat'],
      description: 'Discover the Nilgiri hills with misty mountains, tea plantations and colonial architecture.',
      itinerary: ['Ooty Botanical Garden', 'Coonoor Tea Factory', 'Abbey Falls', 'Coorg Coffee Estates', 'Raja Seat View'],
      includes: ['Hill Station Hotels', 'Transportation', 'Guide', 'Meals', 'Tea Tour'],
      bestTime: 'April - June, September - November',
      difficulty: 'Easy',
      maxAltitude: '2267m'
    },
    {
      id: 9,
      name: 'Western Ghats Trek',
      region: 'south',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
      price: 28000,
      duration: '6 Days',
      rating: 4.5,
      reviews: 320,
      highlights: ['Wayanad', 'Muthanga Wildlife', 'Edakkal Caves', 'Banasura Sagar', 'Muthumala Viewpoint'],
      description: 'Trek through the biodiversity hotspot of Western Ghats with wildlife and ancient caves.',
      itinerary: ['Wayanad Base', 'Edakkal Caves', 'Muthanga Wildlife', 'Banasura Sagar', 'Muthumala Trek'],
      includes: ['Forest Camping', 'Guide', 'Meals', 'Transportation', 'Wildlife Permits'],
      bestTime: 'December - May',
      difficulty: 'Moderate',
      maxAltitude: '2000m'
    },
    {
      id: 10,
      name: 'Tamil Nadu Temple Tour',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 38000,
      duration: '8 Days',
      rating: 4.7,
      reviews: 670,
      highlights: ['Chennai', 'Mahabalipuram', 'Pondicherry', 'Thanjavur', 'Madurai'],
      description: 'Explore the Dravidian architecture and rich cultural heritage of Tamil Nadu temples.',
      itinerary: ['Mahabalipuram Temples', 'Pondicherry French Quarter', 'Thanjavur Big Temple', 'Madurai Meenakshi', 'Kanyakumari'],
      includes: ['Heritage Hotels', 'Transportation', 'Guide', 'Meals', 'Temple Entry'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },

    // East India Packages
    {
      id: 11,
      name: 'Darjeeling Tea Gardens',
      region: 'east',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 36000,
      duration: '5 Days',
      rating: 4.6,
      reviews: 540,
      highlights: ['Darjeeling', 'Tiger Hill', 'Ghoom Monastery', 'Tea Estates', 'Batasia Loop'],
      description: 'Experience the queen of hill stations with misty mountains, tea gardens and colonial charm.',
      itinerary: ['Tiger Hill Sunrise', 'Ghoom Monastery', 'Tea Estate Tour', 'Batasia Loop', 'Himalayan Views'],
      includes: ['Mountain View Hotel', 'Transportation', 'Guide', 'Meals', 'Tea Tasting'],
      bestTime: 'March - May, September - December',
      difficulty: 'Easy',
      maxAltitude: '2134m'
    },
    {
      id: 12,
      name: 'Bengal Cultural Tour',
      region: 'east',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1609766855264-11b9d3c4b9c5?w=800',
      price: 29000,
      duration: '6 Days',
      rating: 4.4,
      reviews: 480,
      highlights: ['Kolkata', 'Sundarbans', ' Bishnupur', 'Murshidabad', 'Gangasagar'],
      description: 'Discover the cultural capital with colonial architecture, wildlife and rural Bengal.',
      itinerary: ['Kolkata Sightseeing', 'Sundarbans Wildlife', 'Bishnupur Temples', 'Murshidabad Silk', 'Gangasagar Beach'],
      includes: ['Heritage Hotels', 'Boat Safari', 'Guide', 'Meals', 'Cultural Shows'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 13,
      name: 'Sikkim Mountain Trek',
      region: 'east',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1464822759844-d150f38e8cf2?w=800',
      price: 42000,
      duration: '8 Days',
      rating: 4.8,
      reviews: 290,
      highlights: ['Gangtok', 'North Sikkim', 'Gurudongmar Lake', 'Nathu La Pass', 'Yumthang Valley'],
      description: 'A challenging trek through Sikkim with pristine lakes, high passes and Buddhist monasteries.',
      itinerary: ['Gangtok Acclimatization', 'Lachung Valley', 'Gurudongmar Lake', 'Nathu La Pass', 'Yumthang Hot Springs'],
      includes: ['Mountain Lodge', 'Guide', 'Meals', 'Transportation', 'Permits'],
      bestTime: 'April - June, September - October',
      difficulty: 'Challenging',
      maxAltitude: '5230m'
    },

    // West India Packages
    {
      id: 14,
      name: 'Maharashtra Heritage',
      region: 'west',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800',
      price: 35000,
      duration: '7 Days',
      rating: 4.5,
      reviews: 620,
      highlights: ['Mumbai', 'Aurangabad', 'Ajanta Caves', 'Ellora Caves', 'Lonavala'],
      description: 'Explore Maharashtra with its bustling cities, ancient caves and hill stations.',
      itinerary: ['Mumbai Gateway', 'Aurangabad Caves', 'Ajanta Paintings', 'Ellora Temples', 'Lonavala Resorts'],
      includes: ['Heritage Hotels', 'Transportation', 'Guide', 'Meals', 'Cave Entry'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 15,
      name: 'Gujarat Cultural Tour',
      region: 'west',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 32000,
      duration: '6 Days',
      rating: 4.3,
      reviews: 380,
      highlights: ['Ahmedabad', 'Bhuj', 'Dwarka', 'Somnath', 'Gir Wildlife'],
      description: 'Experience Gujarat\'s rich culture, ancient temples and wildlife sanctuaries.',
      itinerary: ['Ahmedabad Heritage', 'Bhuj Desert', 'Dwarka Temple', 'Somnath Beach', 'Gir Lion Safari'],
      includes: ['Heritage Hotels', 'Transportation', 'Guide', 'Meals', 'Cultural Shows'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },

    // Central India Packages
    {
      id: 16,
      name: 'Khajuraho Temples',
      region: 'central',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 28000,
      duration: '4 Days',
      rating: 4.4,
      reviews: 450,
      highlights: ['Khajuraho', 'Bandhavgarh', 'Kanha National Park', 'Panna Tiger Reserve'],
      description: 'Discover the erotic temples of Khajuraho and explore Central India\'s wildlife reserves.',
      itinerary: ['Khajuraho Temples', 'Bandhavgarh Safari', 'Kanha Wildlife', 'Panna Tiger Reserve'],
      includes: ['Wildlife Resorts', 'Jeep Safari', 'Guide', 'Meals', 'Park Entry'],
      bestTime: 'October - June',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },

    // Northeast India Packages
    {
      id: 17,
      name: 'Assam Tea Gardens & Wildlife',
      region: 'east',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      price: 42000,
      duration: '6 Days',
      rating: 4.7,
      reviews: 380,
      highlights: ['Guwahati', 'Kaziranga National Park', 'Majuli Island', 'Tea Estates', 'Brahmaputra River'],
      description: 'Experience the serene beauty of Assam with tea gardens, wildlife safaris and river cruises.',
      itinerary: ['Guwahati Arrival', 'Kaziranga Rhino Safari', 'Majuli Cultural Tour', 'Tea Garden Visit', 'Brahmaputra Cruise'],
      includes: ['Wildlife Resorts', 'Jeep Safari', 'Boat Cruise', 'Guide', 'Meals'],
      bestTime: 'November - April',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 18,
      name: 'Meghalaya Living Root Bridges',
      region: 'east',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: 35000,
      duration: '5 Days',
      rating: 4.9,
      reviews: 290,
      highlights: ['Shillong', 'Cherrapunjee', 'Living Root Bridges', 'Mawlynnong Village', 'Double Decker Bridge'],
      description: 'Trek through Meghalaya\'s stunning landscapes and experience the unique living root bridges.',
      itinerary: ['Shillong Arrival', 'Cherrapunjee Sightseeing', 'Living Root Bridges', 'Mawlynnong Village', 'Return Journey'],
      includes: ['Homestays', 'Local Guide', 'Meals', 'Transportation', 'Entry Permits'],
      bestTime: 'October - May',
      difficulty: 'Moderate',
      maxAltitude: '1800m'
    },

    // More North India Packages
    {
      id: 19,
      name: 'Valley of Flowers Trek',
      region: 'north',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1464822759844-d150f38e8cf2?w=800',
      price: 48000,
      duration: '7 Days',
      rating: 4.8,
      reviews: 210,
      highlights: ['Haridwar', 'Joshimath', 'Valley of Flowers', 'Hemkund Sahib', 'Badrinath'],
      description: 'A breathtaking trek through the Valley of Flowers National Park with stunning alpine meadows.',
      itinerary: ['Haridwar to Joshimath', 'Acclimatization', 'Valley of Flowers Trek', 'Hemkund Sahib', 'Badrinath Temple'],
      includes: ['Mountain Camping', 'Guide', 'Meals', 'Transportation', 'Permits'],
      bestTime: 'June - September',
      difficulty: 'Challenging',
      maxAltitude: '3658m'
    },
    {
      id: 20,
      name: 'Spiti Valley Expedition',
      region: 'north',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      price: 55000,
      duration: '10 Days',
      rating: 4.9,
      reviews: 180,
      highlights: ['Manali', 'Kaza', 'Tabo Monastery', 'Kunzum Pass', 'Chandratal Lake'],
      description: 'Explore the remote Spiti Valley with its ancient monasteries and pristine landscapes.',
      itinerary: ['Manali to Kaza', 'Tabo Monastery', 'Kunzum Pass', 'Chandratal Lake', 'Return Journey'],
      includes: ['Mountain Lodge', 'Guide', 'Meals', 'Transportation', 'Permits'],
      bestTime: 'June - September',
      difficulty: 'Challenging',
      maxAltitude: '4550m'
    },

    // More South India Packages
    {
      id: 21,
      name: 'Andaman Islands Paradise',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      price: 55000,
      duration: '7 Days',
      rating: 4.8,
      reviews: 520,
      highlights: ['Port Blair', 'Havelock Island', 'Neil Island', 'Radhanagar Beach', 'Coral Reefs'],
      description: 'Relax on pristine beaches, snorkel in coral reefs and explore the Andaman Islands.',
      itinerary: ['Port Blair Arrival', 'Havelock Beach', 'Snorkeling at Coral Reefs', 'Neil Island Exploration', 'Island Hopping'],
      includes: ['Beach Resorts', 'Boat Transfers', 'Snorkeling', 'Guide', 'Meals'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 22,
      name: 'Kodagu (Coorg) Coffee Trails',
      region: 'south',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 28000,
      duration: '4 Days',
      rating: 4.5,
      reviews: 340,
      highlights: ['Madikeri', 'Abbey Falls', 'Talakaveri', 'Coffee Plantations', 'Dubare Elephant Camp'],
      description: 'Discover Coorg\'s coffee plantations, waterfalls and rich Kodava culture.',
      itinerary: ['Madikeri Sightseeing', 'Coffee Estate Tour', 'Abbey Falls', 'Talakaveri Trek', 'Cultural Experience'],
      includes: ['Homestays', 'Coffee Tour', 'Guide', 'Meals', 'Transportation'],
      bestTime: 'September - March',
      difficulty: 'Easy',
      maxAltitude: '1712m'
    },
    {
      id: 23,
      name: 'Wayanad Wildlife & Adventure',
      region: 'south',
      type: 'trekking',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
      price: 32000,
      duration: '5 Days',
      rating: 4.6,
      reviews: 280,
      highlights: ['Muthanga Wildlife', 'Edakkal Caves', 'Banasura Sagar', 'Muthumala Viewpoint', 'Soochipara Falls'],
      description: 'Experience Wayanad\'s wildlife sanctuaries and prehistoric caves with adventure activities.',
      itinerary: ['Muthanga Wildlife Safari', 'Edakkal Caves Trek', 'Banasura Sagar Dam', 'Muthumala Trek', 'Soochipara Falls'],
      includes: ['Forest Lodge', 'Wildlife Safari', 'Guide', 'Meals', 'Entry Permits'],
      bestTime: 'October - May',
      difficulty: 'Moderate',
      maxAltitude: '2100m'
    },

    // More Hill Station Packages
    {
      id: 24,
      name: 'Munnar Tea Estates',
      region: 'south',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 30000,
      duration: '5 Days',
      rating: 4.7,
      reviews: 410,
      highlights: ['Munnar', 'Eravikulam National Park', 'Tea Plantations', 'Mattupetty Dam', 'Lockhart Gap'],
      description: 'Explore the misty hills of Munnar with vast tea plantations and wildlife sanctuaries.',
      itinerary: ['Munnar Arrival', 'Tea Plantation Tour', 'Eravikulam Wildlife', 'Mattupetty Dam', 'Echo Point'],
      includes: ['Tea Estate Resorts', 'Wildlife Safari', 'Guide', 'Meals', 'Tea Tasting'],
      bestTime: 'September - May',
      difficulty: 'Easy',
      maxAltitude: '2695m'
    },
    {
      id: 25,
      name: 'Chikmagalur Coffee Country',
      region: 'south',
      type: 'hill-station',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      price: 26000,
      duration: '4 Days',
      rating: 4.4,
      reviews: 320,
      highlights: ['Chikmagalur', 'Mullayanagiri Peak', 'Coffee Plantations', 'Hirekolale Lake', 'Baba Budangiri'],
      description: 'Discover Chikmagalur\'s coffee estates and trek to the second highest peak in Karnataka.',
      itinerary: ['Chikmagalur Exploration', 'Coffee Estate Visit', 'Mullayanagiri Trek', 'Hirekolale Lake', 'Baba Budangiri'],
      includes: ['Coffee Estate Stay', 'Trekking Guide', 'Meals', 'Transportation', 'Permits'],
      bestTime: 'October - May',
      difficulty: 'Moderate',
      maxAltitude: '1950m'
    },

    // Wildlife and Safari Packages
    {
      id: 26,
      name: 'Jim Corbett National Park',
      region: 'north',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      price: 35000,
      duration: '5 Days',
      rating: 4.8,
      reviews: 480,
      highlights: ['Jim Corbett', 'Dhikala Zone', 'Ramganga River', 'Elephant Safari', 'Bird Watching'],
      description: 'Track tigers and experience wildlife in India\'s oldest national park.',
      itinerary: ['Corbett Arrival', 'Elephant Safari', 'Jeep Safari', 'Dhikala Zone', 'River Rafting'],
      includes: ['Wildlife Resort', 'Elephant Safari', 'Jeep Safari', 'Guide', 'Meals'],
      bestTime: 'November - June',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 27,
      name: 'Periyar Tiger Reserve',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
      price: 32000,
      duration: '4 Days',
      rating: 4.6,
      reviews: 390,
      highlights: ['Thekkady', 'Periyar Lake', 'Bamboo Rafting', 'Spice Plantations', 'Cultural Shows'],
      description: 'Explore the Periyar Tiger Reserve with boat safaris and spice plantation tours.',
      itinerary: ['Thekkady Arrival', 'Boat Safari', 'Bamboo Rafting', 'Spice Plantation', 'Cultural Performance'],
      includes: ['Wildlife Resort', 'Boat Safari', 'Guide', 'Meals', 'Cultural Show'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },

    // Cultural and Heritage Packages
    {
      id: 28,
      name: 'Hampi Ancient Wonders',
      region: 'south',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 29000,
      duration: '4 Days',
      rating: 4.7,
      reviews: 360,
      highlights: ['Hampi', 'Vijayanagara Ruins', 'Virupaksha Temple', 'Lotus Palace', 'Boulder Climbing'],
      description: 'Explore the UNESCO World Heritage site of Hampi with its ancient temples and ruins.',
      itinerary: ['Hampi Arrival', 'Vijayanagara Ruins', 'Virupaksha Temple', 'Lotus Palace', 'Sunset at Matanga Hill'],
      includes: ['Heritage Resort', 'Guide', 'Meals', 'Bicycle Tour', 'Entry Tickets'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 29,
      name: 'Ajanta & Ellora Caves',
      region: 'west',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 31000,
      duration: '5 Days',
      rating: 4.5,
      reviews: 420,
      highlights: ['Aurangabad', 'Ajanta Caves', 'Ellora Caves', 'Daulatabad Fort', 'Panchakki'],
      description: 'Discover the ancient rock-cut caves of Ajanta and Ellora with their magnificent sculptures.',
      itinerary: ['Aurangabad Arrival', 'Ajanta Caves', 'Ellora Temples', 'Daulatabad Fort', 'Panchakki Water System'],
      includes: ['Heritage Hotel', 'Transportation', 'Guide', 'Meals', 'Cave Entry'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    },
    {
      id: 30,
      name: 'Konark Sun Temple',
      region: 'east',
      type: 'holidays',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
      price: 27000,
      duration: '4 Days',
      rating: 4.3,
      reviews: 310,
      highlights: ['Konark', 'Puri', 'Bhubaneswar', 'Sun Temple', 'Chilika Lake', 'Jagannath Temple'],
      description: 'Explore Odisha\'s architectural marvels and coastal beauty.',
      itinerary: ['Bhubaneswar Arrival', 'Konark Sun Temple', 'Puri Beach', 'Jagannath Temple', 'Chilika Lake'],
      includes: ['Beach Resort', 'Transportation', 'Guide', 'Meals', 'Temple Entry'],
      bestTime: 'October - May',
      difficulty: 'Easy',
      maxAltitude: 'N/A'
    }
  ];

  const regions = [
    { id: 'all', name: 'All Regions', icon: MapPin },
    { id: 'north', name: 'North India', icon: Mountain },
    { id: 'south', name: 'South India', icon: Waves },
    { id: 'east', name: 'East India', icon: TreePine },
    { id: 'west', name: 'West India', icon: Camera },
    { id: 'central', name: 'Central India', icon: Tent }
  ];

  const packageTypes = [
    { id: 'all', name: 'All Packages', icon: Star },
    { id: 'holidays', name: 'Holiday Packages', icon: Calendar },
    { id: 'hill-station', name: 'Hill Stations', icon: Mountain },
    { id: 'trekking', name: 'Trekking', icon: Tent }
  ];

  // Filter packages based on search and filters
  const filteredPackages = useMemo(() => {
    return travelPackages.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === 'all' || pkg.region === selectedRegion;
      const matchesType = selectedType === 'all' || pkg.type === selectedType;

      return matchesSearch && matchesRegion && matchesType;
    });
  }, [searchTerm, selectedRegion, selectedType]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="destinations" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden py-24">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/20 to-[#43E0F8]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/20 to-[#5DFDCB]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0056D2]/10 to-[#43E0F8]/10 rounded-full filter blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Modern Badge */}
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
              EXPLORE INDIA'S DIVERSITY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}
          >
            Travel <span className="bg-gradient-to-r from-[#0056D2] via-[#43E0F8] to-[#5DFDCB] bg-clip-text text-transparent">Packages</span> Across India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Discover India's breathtaking landscapes, rich culture, and adventure opportunities with our curated travel packages across all regions.
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations, activities, or places..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent text-gray-900 placeholder-gray-500"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="space-y-6">
              {/* Region Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <MapPin size={16} />
                  Filter by Region
                </h3>
                <div className="flex flex-wrap gap-3">
                  {regions.map((region) => {
                    const IconComponent = region.icon;
                    return (
                      <motion.button
                        key={region.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedRegion(region.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                          selectedRegion === region.id
                            ? 'bg-[#0056D2] text-white border-[#0056D2] shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#0056D2] hover:text-[#0056D2]'
                        }`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        <IconComponent size={16} />
                        {region.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Package Type Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <Star size={16} />
                  Filter by Package Type
                </h3>
                <div className="flex flex-wrap gap-3">
                  {packageTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <motion.button
                        key={type.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                          selectedType === type.id
                            ? 'bg-[#43E0F8] text-white border-[#43E0F8] shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#43E0F8] hover:text-[#43E0F8]'
                        }`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        <IconComponent size={16} />
                        {type.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Showing {filteredPackages.length} of {travelPackages.length} packages
              </p>
            </div>
          </div>
        </motion.div>

        {/* Travel Packages Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedRegion}-${selectedType}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(pkg.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Dynamic Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                    hoveredCard === pkg.id
                      ? 'from-[#0056D2]/95 via-[#43E0F8]/80 to-transparent'
                      : 'from-black/70 via-black/40 to-transparent'
                  }`} />

                  {/* Package Type Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30"
                  >
                    <div className="flex items-center gap-1">
                      {pkg.type === 'holidays' && <Calendar className="text-white" size={12} />}
                      {pkg.type === 'hill-station' && <Mountain className="text-white" size={12} />}
                      {pkg.type === 'trekking' && <Tent className="text-white" size={12} />}
                      <span className="text-white text-xs font-medium capitalize" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {pkg.type.replace('-', ' ')}
                      </span>
                    </div>
                  </motion.div>

                  {/* Region Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 bg-[#0056D2]/80 backdrop-blur-md rounded-full px-3 py-1"
                  >
                    <span className="text-white text-xs font-medium capitalize" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {pkg.region} India
                    </span>
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1"
                  >
                    <Star className="text-yellow-400 fill-current" size={12} />
                    <span className="text-gray-900 text-xs font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {pkg.rating}
                    </span>
                    <span className="text-gray-600 text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      ({pkg.reviews})
                    </span>
                  </motion.div>

                  {/* Price Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 right-4 bg-[#43E0F8] text-white rounded-full px-4 py-2 font-bold shadow-lg"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    ₹{pkg.price.toLocaleString()}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-3"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {pkg.description}
                    </p>

                    {/* Package Details */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>2-12 people</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Key Highlights:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-xs font-medium"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                          >
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{pkg.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Best Time:</span>
                        <p>{pkg.bestTime}</p>
                      </div>
                      <div>
                        <span className="font-medium">Difficulty:</span>
                        <p>{pkg.difficulty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    <Link to={`/package/${pkg.id}`} className="flex items-center justify-center gap-2 w-full">
                      <span>View Details</span>
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                    </Link>
                  </motion.button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#43E0F8]/60 rounded-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-xl max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Search className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                No packages found
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Try adjusting your search terms or filters
              </p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0056D2]/5 via-[#43E0F8]/5 to-[#0056D2]/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#43E0F8]/20">
            <h3
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to Start Your Indian Adventure?
            </h3>
            <p
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Choose from our curated collection of travel packages and create unforgettable memories across India's diverse landscapes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Explore All Packages
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
