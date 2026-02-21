import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, Tag, Facebook, Twitter, Instagram, Link2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Hidden Gems in India for Luxury Travel',
      excerpt: 'Discover the most exquisite and lesser-known destinations that offer world-class luxury experiences...',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Destinations',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=500&fit=crop',
      featured: true,
      views: 2450,
      tags: ['luxury', 'india', 'hidden gems'],
      content: `
        <h2>The Allure of Hidden Luxury Destinations</h2>
        <p>India is a tapestry of diverse landscapes, cultures, and experiences. While popular destinations like Goa, Kerala, and Rajasthan draw millions of tourists annually, there are countless hidden gems that offer unparalleled luxury experiences away from the crowds. These destinations provide authentic, personalized luxury that goes beyond the typical tourist trail.</p>

        <h3>1. The Backwaters of Alleppey, Kerala</h3>
        <p>Beyond the famous houseboat stays in Kumarakom, Alleppey's private backwater retreats offer intimate experiences with personal chefs and dedicated guides. Experience authentic Kerala cuisine prepared with locally sourced ingredients and navigate through serene waterways in traditional kettuvallams.</p>

        <h3>2. Coorg's Coffee Plantations</h3>
        <p>Known as the Scotland of India, Coorg offers luxury homestays amidst coffee plantations. Experience the misty mornings, fresh coffee beans, and traditional Kodava culture in privately owned estates that have been in families for generations.</p>

        <h3>3. Spiti Valley's Ancient Monasteries</h3>
        <p>Located in Himachal Pradesh, Spiti Valley offers a spiritual luxury experience. Stay in monastery guesthouses or luxury camps that provide access to ancient Tibetan Buddhist traditions, meditation sessions, and breathtaking Himalayan landscapes.</p>

        <h3>Why Choose Hidden Gems?</h3>
        <ul>
          <li><strong>Authentic Experiences:</strong> Interact with local communities on a personal level</li>
          <li><strong>Personalized Service:</strong> Luxury accommodations with dedicated staff</li>
          <li><strong>Cultural Immersion:</strong> Deep dive into local traditions and customs</li>
          <li><strong>Sustainable Tourism:</strong> Support local economies directly</li>
        </ul>

        <h3>Planning Your Luxury Journey</h3>
        <p>When planning your visit to these hidden gems, consider the best time to visit, transportation options, and accommodation preferences. Our luxury travel consultants can help you create a customized itinerary that combines multiple destinations for an unforgettable experience.</p>

        <blockquote>
          "The true essence of luxury travel lies not in the amenities, but in the authenticity and personal connections you forge along the way."
          <cite>- Rajesh Kumar, Luxury Travel Expert</cite>
        </blockquote>
      `,
      relatedPosts: [2, 3, 4]
    },
    {
      id: 2,
      title: 'Ultimate Guide to Airport Transfers: What You Need to Know',
      excerpt: 'Everything you need to know about airport transfers, from timing to vehicle selection...',
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
      featured: false,
      views: 1820,
      tags: ['airport', 'transfers', 'guide'],
      content: `
        <h2>Mastering Airport Transfers</h2>
        <p>Airport transfers are the first and last impression of your journey. A smooth, comfortable transfer sets the tone for your entire travel experience. Here's your comprehensive guide to making airport transfers effortless and luxurious.</p>

        <h3>Timing is Everything</h3>
        <p>Plan your airport transfer timing carefully. For international arrivals, allow at least 3-4 hours from landing to hotel check-in. Domestic flights require 2-3 hours. Always account for potential delays and customs procedures.</p>

        <h3>Vehicle Selection Guide</h3>
        <p>Choose your vehicle based on group size and luggage:</p>
        <ul>
          <li><strong>Sedan (1-3 passengers):</strong> Perfect for solo travelers or couples</li>
          <li><strong>SUV (4-6 passengers):</strong> Ideal for families with children</li>
          <li><strong>Van/Minibus (7+ passengers):</strong> Best for groups and corporate travel</li>
          <li><strong>Luxury vehicles:</strong> Mercedes, BMW, Audi for premium experiences</li>
        </ul>

        <h3>Professional Transfer Services</h3>
        <p>Opt for professional transfer services that offer:</p>
        <ul>
          <li>24/7 customer support</li>
          <li>GPS tracking of your vehicle</li>
          <li>Professional, uniformed drivers</li>
          <li>Complimentary water and refreshments</li>
          <li>Flexible cancellation policies</li>
        </ul>

        <h3>Cost-Saving Tips</h3>
        <p>While luxury transfers are worth the investment, here are ways to optimize costs:</p>
        <ul>
          <li>Book in advance for better rates</li>
          <li>Consider shared transfers for shorter distances</li>
          <li>Look for package deals with hotels</li>
          <li>Check for corporate discounts if applicable</li>
        </ul>
      `,
      relatedPosts: [1, 5, 6]
    },
    {
      id: 3,
      title: 'Mercedes-Benz S-Class vs BMW 7 Series: Which is Better?',
      excerpt: 'A comprehensive comparison of two luxury sedans for your executive travel needs...',
      author: 'Amit Patel',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Vehicle Reviews',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop',
      featured: false,
      views: 3200,
      tags: ['luxury', 'comparison', 'sedans'],
      content: `
        <h2>The Battle of Luxury Sedans</h2>
        <p>When it comes to executive transportation, two names dominate the conversation: Mercedes-Benz S-Class and BMW 7 Series. Both offer unparalleled luxury, cutting-edge technology, and prestige. But which one should you choose for your next business trip or special occasion?</p>

        <h3>Design Philosophy</h3>
        <p>The Mercedes-Benz S-Class embodies elegance and comfort. Its design prioritizes passenger comfort with generous legroom, plush seating, and a serene cabin environment. The BMW 7 Series, on the other hand, emphasizes sporty dynamics and driver engagement while maintaining luxury standards.</p>

        <h3>Interior Comfort & Technology</h3>
        <p>Both vehicles feature state-of-the-art technology, but with different emphases:</p>
        <ul>
          <li><strong>Mercedes-Benz S-Class:</strong> Focuses on relaxation with massage seats, ambient lighting, and Burmester sound system</li>
          <li><strong>BMW 7 Series:</strong> Emphasizes connectivity with iDrive system, gesture control, and augmented reality features</li>
        </ul>

        <h3>Ride Quality & Performance</h3>
        <p>The S-Class offers a pillow-soft ride that's perfect for long journeys, while the 7 Series provides more engaging dynamics for those who want to feel connected to the road. Both can be optioned with air suspension for optimal comfort.</p>

        <h3>Making the Right Choice</h3>
        <p>Your choice depends on your priorities:</p>
        <ul>
          <li><strong>Choose Mercedes-Benz S-Class if:</strong> Maximum comfort and luxury are your top priorities</li>
          <li><strong>Choose BMW 7 Series if:</strong> You want luxury with a sportier driving experience</li>
        </ul>

        <p>Both vehicles represent the pinnacle of automotive luxury and will provide an exceptional travel experience. The final decision often comes down to personal preference and specific requirements.</p>
      `,
      relatedPosts: [1, 2, 5]
    },
    {
      id: 4,
      title: 'Travel Safety During Monsoon Season: Essential Tips',
      excerpt: 'Stay safe and comfortable while traveling during the rainy season with these expert tips...',
      author: 'Dr. Sunita Rao',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Safety',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
      featured: false,
      views: 1650,
      tags: ['safety', 'monsoon', 'tips'],
      content: `
        <h2>Monsoon Travel: Safety First</h2>
        <p>Monsoon season brings beautiful landscapes and fewer crowds, but it also presents unique challenges for travelers. With proper preparation and the right precautions, you can enjoy a safe and memorable journey.</p>

        <h3>Weather Monitoring</h3>
        <p>Stay informed about weather conditions:</p>
        <ul>
          <li>Check weather forecasts regularly</li>
          <li>Use reliable weather apps</li>
          <li>Monitor local news for flood warnings</li>
          <li>Have contingency plans for sudden weather changes</li>
        </ul>

        <h3>Vehicle Safety Considerations</h3>
        <p>Your transportation choice is crucial during monsoon:</p>
        <ul>
          <li><strong>4x4 vehicles:</strong> Better traction on wet roads</li>
          <li><strong>Experienced drivers:</strong> Local knowledge is invaluable</li>
          <li><strong>Regular maintenance:</strong> Ensure brakes and tires are in top condition</li>
          <li><strong>Emergency kit:</strong> Include rain gear, first aid, and communication devices</li>
        </ul>

        <h3>Road Safety Tips</h3>
        <p>Drive safely during monsoon season:</p>
        <ul>
          <li>Reduce speed and maintain safe distances</li>
          <li>Use headlights even during the day</li>
          <li>Avoid flooded areas and low-lying roads</li>
          <li>Carry emergency contact numbers</li>
        </ul>

        <h3>Health Precautions</h3>
        <p>Protect yourself from monsoon-related illnesses:</p>
        <ul>
          <li>Stay hydrated and maintain hygiene</li>
          <li>Use mosquito repellents</li>
          <li>Carry basic medicines</li>
          <li>Eat freshly cooked, hot food</li>
        </ul>

        <p>Monsoon travel can be incredibly rewarding with proper planning and safety measures. Choose experienced transportation providers who understand local conditions and prioritize passenger safety.</p>
      `,
      relatedPosts: [1, 5, 6]
    },
    {
      id: 5,
      title: 'The Future of Transportation: Electric Vehicles in Travel',
      excerpt: 'How electric vehicles are revolutionizing the luxury travel industry...',
      author: 'Vikram Singh',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=500&fit=crop',
      featured: false,
      views: 2100,
      tags: ['electric', 'future', 'technology'],
      content: `
        <h2>The Electric Revolution in Luxury Travel</h2>
        <p>The luxury travel industry is undergoing a transformation with the rise of electric vehicles. These silent, powerful machines are redefining what luxury transportation means in the 21st century.</p>

        <h3>Advantages of Electric Luxury Vehicles</h3>
        <p>Electric vehicles offer unique benefits for luxury travel:</p>
        <ul>
          <li><strong>Silent operation:</strong> Peaceful journeys without engine noise</li>
          <li><strong>Smooth acceleration:</strong> Instant torque for superior ride quality</li>
          <li><strong>Zero emissions:</strong> Environmentally conscious luxury travel</li>
          <li><strong>Lower maintenance:</strong> Fewer moving parts mean less maintenance</li>
          <li><strong>Advanced technology:</strong> Cutting-edge infotainment and safety features</li>
        </ul>

        <h3>Range and Infrastructure</h3>
        <p>Modern electric luxury vehicles offer impressive ranges (300-500+ km) that make them suitable for various travel scenarios. Charging infrastructure is rapidly expanding, with luxury resorts and hotels installing high-speed chargers.</p>

        <h3>Luxury EV Models</h3>
        <p>Several luxury brands are leading the electric revolution:</p>
        <ul>
          <li><strong>Tesla Model S:</strong> Pioneer in electric luxury sedans</li>
          <li><strong>Polestar 2:</strong> Scandinavian luxury meets electric performance</li>
          <li><strong>Lucid Air:</strong> American luxury with incredible range</li>
          <li><strong>NIO ET7:</strong> Chinese innovation in electric luxury</li>
        </ul>

        <h3>The Future Outlook</h3>
        <p>As battery technology advances and charging infrastructure improves, electric vehicles will become the standard for luxury travel. Their combination of performance, comfort, and sustainability makes them the perfect choice for discerning travelers who want to minimize their environmental impact while maximizing luxury.</p>

        <p>The transition to electric luxury vehicles represents not just a technological advancement, but a fundamental shift in how we think about sustainable luxury travel.</p>
      `,
      relatedPosts: [2, 3, 4]
    },
    {
      id: 6,
      title: 'Corporate Travel: Making Business Journeys Comfortable',
      excerpt: 'Essential tips for arranging perfect corporate transportation solutions...',
      author: 'Meera Joshi',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
      featured: false,
      views: 1380,
      tags: ['corporate', 'business', 'travel'],
      content: `
        <h2>Elevating Corporate Travel Experiences</h2>
        <p>In today's competitive business environment, corporate travel is more than just transportation—it's an opportunity to impress clients, maintain productivity, and demonstrate company values. Here's how to make every business journey exceptional.</p>

        <h3>Choosing the Right Vehicle</h3>
        <p>The vehicle you select sends a message about your company's standards:</p>
        <ul>
          <li><strong>Executive sedans:</strong> For client meetings and important presentations</li>
          <li><strong>SUVs:</strong> For team travel and comfort during long journeys</li>
          <li><strong>Vans:</strong> For larger corporate groups and events</li>
          <li><strong>Luxury brands:</strong> Mercedes, BMW, Audi for premium corporate image</li>
        </ul>

        <h3>Professional Service Standards</h3>
        <p>Corporate clients expect professional service:</p>
        <ul>
          <li>Professional, uniformed drivers</li>
          <li>On-time service guaranteed</li>
          <li>Clean, well-maintained vehicles</li>
          <li>Flexible booking and changes</li>
          <li>24/7 support and tracking</li>
        </ul>

        <h3>Productivity Features</h3>
        <p>Modern corporate travel should support work on the go:</p>
        <ul>
          <li>Wi-Fi connectivity for meetings</li>
          <li>Charging ports for devices</li>
          <li>Privacy partitions for confidential calls</li>
          <li>Reading lights and adjustable seating</li>
          <li>Refreshment options</li>
        </ul>

        <h3>Cost Management</h3>
        <p>Balance luxury with cost efficiency:</p>
        <ul>
          <li>Negotiate corporate rates</li>
          <li>Use preferred vendor programs</li>
          <li>Track and analyze travel expenses</li>
          <li>Implement approval workflows</li>
        </ul>

        <h3>Corporate Travel Best Practices</h3>
        <p>Make every corporate journey count:</p>
        <ul>
          <li>Book through approved providers</li>
          <li>Communicate clear expectations</li>
          <li>Maintain detailed travel records</li>
          <li>Gather feedback for continuous improvement</li>
        </ul>

        <p>Corporate travel is an investment in your business relationships and productivity. Choose transportation partners who understand the unique demands of business travel and deliver consistently exceptional service.</p>
      `,
      relatedPosts: [2, 4, 5]
    }
  ];

  useEffect(() => {
    const post = blogPosts.find(p => p.id === parseInt(id));
    if (post) {
      setBlogPost(post);
      // Get related posts
      const related = blogPosts.filter(p => post.relatedPosts.includes(p.id));
      setRelatedPosts(related);
    }
  }, [id]);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Loading article...
          </h2>
        </div>
      </div>
    );
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
      default:
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0056D2]/5 to-[#43E0F8]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#43E0F8]/5 to-[#5DFDCB]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-24 pb-8"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#0056D2] hover:text-[#0056D2]/80 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span style={{ fontFamily: 'Manrope, sans-serif' }}>Back to Blog</span>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] text-white text-sm font-semibold rounded-full">
                {blogPost.category}
              </span>
              {blogPost.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {blogPost.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {blogPost.author}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(blogPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blogPost.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {blogPost.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBookmark}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isBookmarked
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                </motion.button>

                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-3 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-all duration-300"
                  >
                    <Share2 size={16} />
                  </motion.button>

                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-10"
                    >
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Facebook size={16} className="text-blue-600" />
                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Twitter size={16} className="text-sky-500" />
                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      >
                        <Link2 size={16} className="text-gray-600" />
                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Copy Link</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pb-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>
          </div>
        </motion.div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pb-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Related Articles
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-[#0056D2] font-semibold hover:text-[#0056D2]/80 transition-colors text-sm"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};
