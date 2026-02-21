import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Camera, Play, X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
      alt: 'Mountain Landscape',
      location: 'Himachal Pradesh',
      type: 'Nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
      alt: 'Beach Paradise',
      location: 'Goa',
      type: 'Beach'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
      alt: 'City Skyline',
      location: 'Mumbai',
      type: 'Urban'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
      alt: 'Desert Dunes',
      location: 'Rajasthan',
      type: 'Desert'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
      alt: 'Forest Adventure',
      location: 'Kerala',
      type: 'Forest'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
      alt: 'Heritage Site',
      location: 'Delhi',
      type: 'Heritage'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-24 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMEZGRiIgZmlsbC1vcGFjaXR5PSIwLjA0Ij4KPHBhdGggZD0iTTM2IDE0YzAuNTUyIDAgMSAwLjQ0OCAxIDFzLTAuNDQ4IDEtMSAxLTEtMC40NDgtMS0xIDAtLjQ0OC0xLTFMMzYgMTR6TTMwIDJjMS4xMDQgMCAyIC44OTYgMiAycy0uODk2IDItMiAyLTIgMC44OTYtMi0yIDAtLjg5Ni0yLTJWNFoiLz4KPC9nPgo8L2c+Cg==')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#0056D2]/10 text-[#0056D2] px-6 py-3 rounded-full mb-6 font-medium"
            >
              <Camera size={20} />
              <span>Our Destinations</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Explore <span className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] bg-clip-text text-transparent">Beautiful India</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Discover the diverse landscapes and rich culture that make India a traveler's paradise
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{image.location}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {image.alt}
                  </h3>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {image.type}
                  </span>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="text-white ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <Camera size={20} />
              <span>Explore More Destinations</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-white" size={16} />
                  <span className="text-white font-medium">{selectedImage.location}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {selectedImage.alt}
                </h3>
                <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                  {selectedImage.type}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
