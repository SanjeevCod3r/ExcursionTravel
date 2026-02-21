import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, MapPin } from 'lucide-react';

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1464822759844-d150f38e8cf2?w=600',
      alt: 'Kashmir Mountains',
      location: 'Kashmir, India',
      category: 'Nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600',
      alt: 'Goa Beach',
      location: 'Goa, India',
      category: 'Beach'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
      alt: 'Rajasthan Palace',
      location: 'Jaipur, India',
      category: 'Heritage'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      alt: 'Tea Gardens',
      location: 'Assam, India',
      category: 'Nature'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600',
      alt: 'Ancient Temple',
      location: 'Hampi, India',
      category: 'Heritage'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      alt: 'Island Paradise',
      location: 'Andaman, India',
      category: 'Beach'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      alt: 'Mountain Lake',
      location: 'Spiti, India',
      category: 'Adventure'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600',
      alt: 'Wildlife Safari',
      location: 'Periyar, India',
      category: 'Wildlife'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#43E0F8]/10 rounded-full mb-4">
            <span className="text-[#43E0F8] font-semibold text-sm flex items-center gap-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <Camera size={16} />
              Travel Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Capturing India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Explore breathtaking destinations through our lens. Every journey tells a story, every moment captures a memory.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} />
                  <span className="text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {image.location}
                  </span>
                </div>
                <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-[#0056D2]/25" style={{ fontFamily: 'Manrope, sans-serif' }}>
            View Full Gallery
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md text-white p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} />
                  <span className="font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {selectedImage.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">{selectedImage.alt}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
