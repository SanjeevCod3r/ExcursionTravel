import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag, Bookmark, Share2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Travel Tips', 'Destinations', 'Vehicle Reviews', 'Safety', 'Technology'];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Hidden Gems in India for Luxury Travel',
      excerpt: 'Discover the most exquisite and lesser-known destinations that offer world-class luxury experiences...',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Destinations',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop',
      featured: true,
      views: 2450,
      tags: ['luxury', 'india', 'hidden gems']
    },
    {
      id: 2,
      title: 'Ultimate Guide to Airport Transfers: What You Need to Know',
      excerpt: 'Everything you need to know about airport transfers, from timing to vehicle selection...',
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
      featured: false,
      views: 1820,
      tags: ['airport', 'transfers', 'guide']
    },
    {
      id: 3,
      title: 'Mercedes-Benz S-Class vs BMW 7 Series: Which is Better?',
      excerpt: 'A comprehensive comparison of two luxury sedans for your executive travel needs...',
      author: 'Amit Patel',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Vehicle Reviews',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
      featured: false,
      views: 3200,
      tags: ['luxury', 'comparison', 'sedans']
    },
    {
      id: 4,
      title: 'Travel Safety During Monsoon Season: Essential Tips',
      excerpt: 'Stay safe and comfortable while traveling during the rainy season with these expert tips...',
      author: 'Dr. Sunita Rao',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Safety',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      featured: false,
      views: 1650,
      tags: ['safety', 'monsoon', 'tips']
    },
    {
      id: 5,
      title: 'The Future of Transportation: Electric Vehicles in Travel',
      excerpt: 'How electric vehicles are revolutionizing the luxury travel industry...',
      author: 'Vikram Singh',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop',
      featured: false,
      views: 2100,
      tags: ['electric', 'future', 'technology']
    },
    {
      id: 6,
      title: 'Corporate Travel: Making Business Journeys Comfortable',
      excerpt: 'Essential tips for arranging perfect corporate transportation solutions...',
      author: 'Meera Joshi',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      featured: false,
      views: 1380,
      tags: ['corporate', 'business', 'travel']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/5 to-[#43E0F8]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/5 to-[#5DFDCB]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative pt-24 pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Travel
                <span className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Discover expert tips, destination guides, and the latest in luxury travel from our experienced team
              </p>

              {/* Search and Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="relative">
                      <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="pl-12 pr-8 py-3 rounded-xl border border-gray-200 focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 transition-all duration-300 appearance-none"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Article */}
        {featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pb-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {featuredPost.author}
                          </p>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {new Date(featuredPost.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {featuredPost.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye size={14} />
                              {featuredPost.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="self-start px-6 py-3 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight size={16} />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Articles Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Stay informed with our expert travel insights and tips
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-[#0056D2] transition-colors"
                      >
                        <Bookmark size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-[#0056D2] transition-colors"
                      >
                        <Share2 size={16} />
                      </motion.button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0056D2] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full flex items-center justify-center">
                          <User size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {post.views}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-[#0056D2] font-semibold hover:text-[#0056D2]/80 transition-colors"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        <Link to={`/blog/${post.id}`} className="flex items-center gap-2">
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  No articles found
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Try adjusting your search terms or category filter
                </p>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="py-16 bg-gradient-to-r from-[#0056D2] to-[#43E0F8]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Stay Updated
              </h2>
              <p className="text-lg text-white/90 mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Get the latest travel insights and exclusive tips delivered to your inbox
              </p>

              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-4 focus:ring-white/20 transition-all duration-300 text-gray-900"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#0056D2] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
