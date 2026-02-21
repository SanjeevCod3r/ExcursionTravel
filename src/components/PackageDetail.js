import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  IndianRupee,
  CheckCircle,
  X,
  Phone,
  Mail,
  ArrowLeft,
  Heart,
  Share2,
  Download,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Tent,
  Car,
  Utensils,
  Home,
  Shield,
  MessageCircle
} from 'lucide-react';

// Travel packages data (same as in Destinations.js)
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

export const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    travelDate: '',
    specialRequests: ''
  });

  const handleBackClick = () => {
    navigate(-1); // Go back in browser history
  };

  useEffect(() => {
    const pkg = travelPackages.find(p => p.id === parseInt(id));
    setPackageData(pkg);
  }, [id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted! We will contact you soon.');
  };

  const getRegionIcon = (region) => {
    switch(region) {
      case 'north': return <Mountain size={20} />;
      case 'south': return <Waves size={20} />;
      case 'east': return <TreePine size={20} />;
      case 'west': return <Camera size={20} />;
      case 'central': return <Tent size={20} />;
      default: return <MapPin size={20} />;
    }
  };

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#0056D2] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading package details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="hidden md:block absolute top-6 left-6 z-50 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/40 transition-all duration-200 cursor-pointer border border-white/30"
          aria-label="Go back"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <ArrowLeft size={24} />
        </button>

        {/* Package Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#0056D2]/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                {getRegionIcon(packageData.region)}
                {packageData.region.charAt(0).toUpperCase() + packageData.region.slice(1)} India
              </span>
              <span className="bg-[#43E0F8]/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                {packageData.type.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {packageData.name}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{packageData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400 fill-current" />
                <span>{packageData.rating} ({packageData.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={20} />
                <span className="text-2xl font-bold">{packageData.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {['overview', 'itinerary', 'includes', 'policies'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-[#0056D2] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Package Overview
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {packageData.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Key Highlights</h4>
                        <div className="space-y-2">
                          {packageData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Trip Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium">{packageData.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Difficulty:</span>
                            <span className="font-medium">{packageData.difficulty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Best Time:</span>
                            <span className="font-medium">{packageData.bestTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Max Altitude:</span>
                            <span className="font-medium">{packageData.maxAltitude}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Detailed Itinerary
                    </h3>
                    <div className="space-y-4">
                      {packageData.itinerary.map((day, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-[#0056D2] text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Day {index + 1}</h4>
                            <p className="text-gray-700">{day}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'includes' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      What's Included
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-green-700">✓ Included in Package</h4>
                        <div className="space-y-3">
                          {packageData.includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-orange-700">✗ Not Included</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <X size={16} className="text-orange-500" />
                            <span className="text-gray-700">Personal Expenses</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <X size={16} className="text-orange-500" />
                            <span className="text-gray-700">Travel Insurance</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <X size={16} className="text-orange-700" />
                            <span className="text-gray-700">Visa Fees</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <X size={16} className="text-orange-700" />
                            <span className="text-gray-700">Additional Meals</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'policies' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Booking Policies
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Cancellation Policy</h4>
                        <div className="space-y-2 text-gray-700">
                          <p>• 30+ days before travel: 25% cancellation charges</p>
                          <p>• 15-30 days before travel: 50% cancellation charges</p>
                          <p>• 7-14 days before travel: 75% cancellation charges</p>
                          <p>• Less than 7 days: 100% cancellation charges</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Payment Terms</h4>
                        <div className="space-y-2 text-gray-700">
                          <p>• Booking confirmation: 30% advance payment</p>
                          <p>• 30 days before travel: 70% balance payment</p>
                          <p>• Payment methods: Bank transfer, UPI, Credit/Debit cards</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Important Notes</h4>
                        <div className="space-y-2 text-gray-700">
                          <p>• Valid ID proof required for all travelers</p>
                          <p>• Itinerary may change due to weather conditions</p>
                          <p>• Medical certificate required for adventure activities</p>
                          <p>• All permits and entry fees included as mentioned</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Customer Reviews
              </h3>
              <div className="space-y-6">
                {/* Sample Reviews */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#0056D2] rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div>
                      <h4 className="font-semibold">Rajesh Kumar</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Amazing experience! The guides were knowledgeable and the itinerary was perfectly planned."</p>
                </div>

                <div className="border-b pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#43E0F8] rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya Sharma</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Best vacation ever! The attention to detail and customer service was outstanding."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Book This Package
                </h3>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-[#0056D2]">₹{packageData.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Duration: {packageData.duration} | Group Size: 2-12 people
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                      <select
                        value={bookingForm.travelers}
                        onChange={(e) => setBookingForm({...bookingForm, travelers: parseInt(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent"
                      >
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <input
                        type="date"
                        value={bookingForm.travelDate}
                        onChange={(e) => setBookingForm({...bookingForm, travelDate: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                    <textarea
                      rows={3}
                      value={bookingForm.specialRequests}
                      onChange={(e) => setBookingForm({...bookingForm, specialRequests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0056D2] focus:border-transparent resize-none"
                      placeholder="Any special requirements or preferences..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Book Now - ₹{(packageData.price * bookingForm.travelers).toLocaleString()}
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[#0056D2]" />
                      <span className="text-sm">+91 9990-817-615</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[#0056D2]" />
                      <span className="text-sm">bookings@excursiontravel.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle size={16} className="text-[#0056D2]" />
                      <span className="text-sm">WhatsApp us for instant booking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
