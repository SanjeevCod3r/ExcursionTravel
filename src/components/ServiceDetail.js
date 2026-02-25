import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, CheckCircle, Star, Clock, Car } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    'corporate-car-rental': {
      title: 'Corporate Car Rental',
      heroImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      iconColor: 'from-[#0056D2] to-[#43E0F8]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        subtitle: 'Sit back and enjoy – Let our chauffeurs drive you',
        description: 'Excursion Travel Car rental promises a seamless and comfortable journey, be it for client meetings, corporate events, site visits, or airport pick and drops. Our Corporate car rental service in Pan India meets a wide range of business requirements, providing a combination of flexibility, convenience, and professionalism that meets the high standards of contemporary businesses.',
        details: 'Intended to fit the ever-changing pace of business life, our services offer chauffeur-driven cars that ensure timely arrival and hassle-free travel. Elegant interiors make the journey a work area, enabling professionals to prepare for conferences or make calls while on the move. Further, we can uphold a sophisticated and professional reputation by utilizing top-notch vehicles coupled with well-trained and polite drivers.',
        benefits: [
          {
            title: 'Diverse Fleet Options',
            description: 'A Diverse Fleet of economy cars, luxury sedans, SUVs, among others, is bound to leave you spoilt for choice. Our trained chauffeurs, are certain to take you on a journey that is as smooth as it is enjoyable. Luxury cars for the officious, stately sedans for those on important duties, and large coaches and SUVs for large groups of family or friends, Excursion Travel can arrange for the vehicle that suits all your needs and ticks all boxes.'
          },
          {
            title: 'Professional Chauffeurs',
            description: 'Chauffeurs will not only look to getting you to your destination but take care to see that you are not inconvenienced in any way throughout your journey with Excursion Travel. Our trained chauffeurs are everything that Excursion Travel stands for – reliability, safety, comfort, and professionalism.'
          },
          {
            title: 'Hassle-Free Service',
            description: 'Hassle-Free Service assured from the moment you choose the corporate car rental option. We are committed to securing your comfort, convenience, and safety throughout your journey. Our team can be reached at any time of the day, and our customers can rest assured of having their inquiries answered.'
          },
          {
            title: 'Customized Solutions',
            description: 'While our operational models are standardized as are our administrative processes, there is no template that we fall back on to offer our clients a customized. The requirements and demands of each of our customers is heeded, and our approach, ranging from the choice of the car to the selection of the driver, is guided by our determination to achieve optimum customer satisfaction. We take pride in our ability to organising your journey bearing in mind all your requirements and your preferences.'
          }
        ],
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Starting from ₹3,500/day',
        availability: 'Available 24/7'
      }
    },
    'employee-transport': {
      title: 'Employee Transport Services',
      heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200',
      iconColor: 'from-[#43E0F8] to-[#5DFDCB]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        subtitle: 'A smooth ride for your workforce',
        description: 'Looking for safe, comfortable and reliable employee transportation services for your team? Then you have come to the right place. At Excursion Travel, we understand that assurance of reliable transportation services boosts employee morale, and drives productivity at the workplace by increasing punctuality and eliminating anxiety over finding rides.',
        details: 'Our large fleet of cars and experienced chauffeurs, Excursion Travel can help businesses put in place systems that can effectively save time and energy for the employees, and prevent wastage of valuable resources in mobility planning. Regardless of the size of the workforce, Excursion Travel can ensure a seamless transition to a more efficient and easy transportation system that is beneficial to both employees and businesses. Get all your doubts soundly answered with a presentation. Call us to arrange a presentation for you as per your convenience.',
        benefits: [
          {
            title: '24/7 Availability',
            description: 'Irregular shift is no hurdle to us. Excursion Travel ensures availability of cars to ferry employees regardless of their shift – early morning hours or late-night. Arrangements to pick-up or drop employees at irregular hours are made such that businesses can rest assured of the workforce arriving at the office on time or reaching home comfortable and safe. Excursion Travel expert team is available round-the-clock to assist clients, and answer any queries you may have.'
          },
          {
            title: 'Digital Platform',
            description: 'Say goodbye to manual duty slips with our digitized usage authorization platform. Users can now sign on to a digital platform for usage authorization, streamlining the approval process and reducing paperwork. This not only saves time but also improves accuracy and accountability.'
          },
          {
            title: 'Optimal Resource Utilization',
            description: 'Optimal utilisation of resources ensures efficiency of operations on the one hand, while trimming the number of variable parameters involved in the management equation. Streamlining of operations through use of technology and expert personnel has enabled Excursion Travel to ensure quality service, while preventing incidence of unforeseen disruptions.'
          },
          {
            title: 'Tailored Solutions',
            description: 'Tailored solution best describes Excursion Travel employee transport service. We handle end-to-end solutions, and flexibility in back-end operations has allowed us to adopt a technology-agnostic approach to management, thereby enabling us to tailor our model to meet the specific requirements of each client.'
          }
        ],
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Custom pricing based on routes',
        availability: 'Fixed schedule operations'
      }
    },
    'event-transportation': {
      title: 'Event Transportation',
      heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200',
      iconColor: 'from-[#FE805A] to-[#FE6B47]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
        subtitle: 'Let us steer the wheels on your Big Days!',
        description: 'Events, personal or corporate, big or small, entail logistics that require expert hands to handle them, with arranging transport being one of the major tasks that requires meticulous planning and execution. Be it a high-profile wedding, corporate celebrations, an intra-office celebration, arranging vehicles for all invitees to arrive at the venue on time, or ensuring that they return home safely, is a task that may consume a very large portion of time and your energies. That is precisely why it is best to leave this task in the hands of experienced mobility managers.',
        details: 'Excursion Travel has not only the technical expertise to handle the mandate for ceremonial events, but our people are also acutely sensitive to the cultural sensibilities involved in many such celebratory events. While our trained drivers, with their acute knowledge of the roads try to ensure that you are never late for any of the events or rituals, those working tirelessly at the back-end, arranging trips, finalizing routes and schedules, try to ensure that all contingencies are accounted for. Entrusting the mobility mandate of your events to Excursion Travel will relieve you of all the attendant stress, while leaving you with a bundle of joyous memories.',
        benefits: [
          {
            title: 'Event-Specific Arrangements',
            description: 'Event-Specific Transportation arrangements guaranteed by Excursion Travel. Once you enlist our assistance for the event, and furnish all the required information about the event, and the number of guests to be expected, you can rid your mind of all worry about the guests arriving at the venue on time. It could be a wedding or a corporate event, our solutions are specific, and tailored to meet the unique demands and necessities of that situation.'
          },
          {
            title: 'Extensive Fleet Options',
            description: 'Our Extensive Fleet offers you significant choice for the cars you want that best suits the event. SUVs that can ferry a larger number of people in just the one trip or luxury sedans for some of the more important guests at the event – you will certainly have plenty to choose from.'
          },
          {
            title: 'Vendor Coordination',
            description: 'Liaising With Other Vendors is also within our scope of operations. We work in tandem with the event planners you have chosen to manage the event so we are aware of every last detail of the itinerary of your guests.'
          },
          {
            title: 'Professional Service',
            description: 'Professional Drivers will secure your comfort, while being punctual, courteous, and thoroughly professional. Our managers will ensure that you and your guests are assigned the cars of your choice, while our drivers will take care to ensure that, regardless of the chaos on the streets, your journeys are peaceful and comfortable.'
          }
        ],
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Custom event packages',
        availability: 'Event-based services'
      }
    },
    'conferences-delegation': {
      title: 'Conferences & Delegation',
      heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
      iconColor: 'from-[#5DFDCB] to-[#43E0F8]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600',
        subtitle: 'Conferences & Delegations Transportation Services',
        description: 'Conferences and delegations are quite common in this corporate world. Many corporate organizations arrange these conferences for their firm to promote it. In these conferences, they not only discuss things but also interact or even join in the debate with many other different businesses. So we all can understand how important these conferences and delegations can be for any business. That is why Excursion Travel, one of the best providers of car rental services for conferences and delegations offers the best vehicles at your doorstep at an affordable price.',
        details: 'Attentive and Experienced Personnel at Excursion Travel will liaise with conference organizers to understand their requirements, and suitably deploy the required number of cars and coaches for ferrying delegates and participants to and from the event venue. Similarly, delegates attending any big conference from outside the town can reserve either one or multiple cars – depending on the side of their group – so they can focus entirely on the event, and not worry about getting to the venue on time. Our experienced personnel are adept at tailoring solutions to suit your requirements.',
        benefits: [
          {
            title: 'Expert Coordination',
            description: 'Attentive and Experienced Personnel at Excursion Travel will liaise with conference organizers to understand their requirements, and suitably deploy the required number of cars and coaches for ferrying delegates and participants to and from the event venue. Similarly, delegates attending any big conference from outside the town can reserve either one or multiple cars – depending on the side of their group – so they can focus entirely on the event, and not worry about getting to the venue on time. Our experienced personnel are adept at tailoring solutions to suit your requirements.'
          },
          {
            title: 'Professional Chauffeurs',
            description: 'Professional Chauffeurs are on stand-by to ferry delegates to the conference, and meetings. Our chauffeurs reflect our ethos rooted in punctuality, professionalism, and sophistication. Cognizant of the value of time where such high-profile events are concerned, our chauffeurs, supported by back-end personnel, meticulously plan and map journeys such that there is maximum convenience and comfort.'
          },
          {
            title: 'Diverse Fleet Options',
            description: 'A Diverse Fleet of Cars to choose from. Excursion Travel fleet of more than 9,000 cars has in its ranks a number of premium luxury sedans, and SUVs, which can be reserved. Delegates, organisers and VIPs, all of them can rest assured of a comfortable ride on board our well-maintained cars.'
          },
          {
            title: '24/7 Support',
            description: 'Assistance Guaranteed round-the-clock. Stakeholders can reach out to Excursion Travel personnel at any time of day or night seeking assistance, and rest assured of being lent a patient ear. You may be seeking clarity on billing or you may wish to reschedule your trip or make a fresh reservation besides an existing one, our co-operation is guaranteed.'
          }
        ],
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Custom pricing based on requirements',
        availability: 'On-demand and scheduled'
      }
    },
    'wedding-car-rental': {
      title: 'Wedding Car Rental',
      heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200',
      iconColor: 'from-[#0056D2] to-[#5DFDCB]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600',
        subtitle: 'Make the special day, extra special with Excursion Travel relax Wedding Car Rentals',
        description: 'Weddings are amongst the most special and memorable occasions in people\'s lives. The entire planning and execution are a huge event in itself, regardless of the size of the weddings. In India, weddings hold a special place in the lives of the bride and groom as well as their families and guests. Knowing how important, intimate, and eventful the wedding ceremonies can be, Excursion Travel prides itself in providing exclusive and effortless car rental services that will take a huge part of the planning off the hands of the already occupied family members.',
        details: 'From the bride and groom arriving in style, to organizing airport to venue to airport pick-up and drop, to arranging dream wedding transport for the entire bride and groom gang, the team at Excursion Travel will effortlessly handle the planning, logistics and management. Stylish Cars, well maintained and, decked up as suits the occasion, will be at your disposal throughout the duration of the wedding ceremony, including the many events leading up to the big day. You can reserve any number of cars of varying size – sedans, SUVs among others – depending on the preferences of your guest list.',
        benefits: [
          {
            title: 'Stylish Wedding Cars',
            description: 'Stylish Cars, well maintained and, decked up as suits the occasion, will be at your disposal throughout the duration of the wedding ceremony, including the many events leading up to the big day. You can reserve any number of cars of varying size – sedans, SUVs among others – depending on the preferences of your guest list.'
          },
          {
            title: 'Courteous Chauffeurs',
            description: 'Courteous Chauffeurs will ensure that there is no dampening of the celebratory spirit even on the most congested streets leading up to the venue. Excursion Travel trained chauffeurs, with their knowledge of the streets, coupled with their thoroughly professional approach to their jobs, will take care not only to secure your comfort but ensure that you arrive in time for all the auspicious events well ahead of time.'
          },
          {
            title: 'Bespoke Packages',
            description: 'Bespoke Packages will fit your needs as well as your tailored suit, for sure. Clients can reserve as many cars as they want, and not necessarily requisition each of them for all the days. Instead, clients can reserve more cars for those days when the number of guests expected is significantly higher while requisitioning fewer cars on other days. This flexibility will ensure that the entire exercise is economical. Our team working tirelessly at the back-end will always be on hand or available on the phone or WhatsApp to accommodate any last-minute changes to the original order.'
          },
          {
            title: 'Signature Touches',
            description: 'Signature Touches that we add to the cars rented for the big day, even while you are on the move, leave a touch of festivity to the occasion. From complimentary decorations to the car to any special requests, our experts go above and beyond to make it special.'
          }
        ],
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Custom wedding packages',
        availability: 'Event-based services'
      }
    },
    'hotel-travel-desk': {
      title: 'Hotel Travel Desk Service',
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
      iconColor: 'from-[#FE805A] to-[#0056D2]',
      content: {
        galleryImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
        subtitle: 'HOTEL TRAVEL DESK SERVICE',
        description: 'Comprehensive travel desk services for hotels. We provide complete mobility solutions for hotel guests, ensuring seamless transportation from airports, railway stations, and bus stands to your hotel and vice versa.',
        details: 'Our hotel travel desk service is designed to enhance the guest experience by providing reliable, comfortable, and punctual transportation solutions. Whether it\'s airport transfers, city tours, or local transportation needs, we ensure that your guests have a hassle-free stay at your hotel. Professional chauffeurs and well-maintained vehicles ensure that your guests arrive at their destinations safely and on time. Our services are available 24/7, catering to early morning flights, late-night arrivals, and emergency transportation needs. We understand the importance of first impressions and the role transportation plays in shaping the overall guest experience. Our commitment to excellence ensures that your hotel guests receive the premium service they deserve. Flexible booking options, competitive pricing, and dedicated support make us the preferred choice for hotels looking to provide exceptional transportation services to their guests. Contact us today to learn more about our comprehensive hotel travel desk solutions.',
        features: ['Spacious Interiors', 'Tailored for Business', 'Modern Features', 'Professional Chauffeurs', 'Impeccable Maintenance', 'Flexible Scheduling'],
        pricing: 'Custom pricing for hotels',
        availability: '24/7 service'
      }
    }
  };

  const service = servicesData[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#0056D2] hover:underline">Return to Services</Link>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-96 lg:h-[500px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
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

        {/* Service Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2 sm:mb-4">
              <span className={`bg-gradient-to-r ${service.iconColor} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2`}>
                Premium Service
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight px-1 sm:px-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {service.title}
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl px-1 sm:px-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {service.content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.content.subtitle}
                </h2>

                {/* Hero Description */}
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl sm:rounded-2xl border-l-4 border-[#0056D2]">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {service.content.description}
                  </p>
                </div>

                {/* Service Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
                  >
                    <img
                      src={service.heroImage}
                      alt={`${service.title} service`}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Premium Service
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
                  >
                    <img
                      src={service.content.galleryImage || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'}
                      alt={`${service.title} transportation`}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Professional Fleet
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Key Benefits Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-6 sm:mb-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0056D2] rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm sm:text-lg font-bold">✓</span>
                    </div>
                    Key Benefits & Features
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {service.content.benefits ? service.content.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg sm:rounded-xl border border-blue-100">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>{benefit.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    )) : (
                      <>
                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg sm:rounded-xl border border-blue-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Spacious Interiors</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Comfortable seating with ample legroom for a pleasant journey experience.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-white rounded-lg sm:rounded-xl border border-green-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Professional Chauffeurs</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Experienced, courteous drivers ensuring safe and timely transportation.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg sm:rounded-xl border border-purple-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Modern Features</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Latest technology including GPS tracking, Wi-Fi, and climate control.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg sm:rounded-xl border border-orange-100">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Flexible Scheduling</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Customizable booking options to fit your specific schedule and requirements.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Service Details Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-6 sm:mb-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#43E0F8] rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm sm:text-lg font-bold">📖</span>
                    </div>
                    Service Overview
                  </h3>

                  <div className="prose prose-lg max-w-none space-y-4 sm:space-y-6">
                    {service.content.details.split('\n\n').map((paragraph, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-[#43E0F8]"
                      >
                        <p className="text-gray-700 leading-relaxed m-0 text-sm sm:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {paragraph}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-br from-[#0056D2]/5 to-[#43E0F8]/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Why Choose Excursion Travel?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0056D2] to-[#43E0F8] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white text-lg sm:text-2xl">🚗</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Premium Fleet</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Well-maintained, luxury vehicles for every occasion</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#43E0F8] to-[#5DFDCB] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white text-lg sm:text-2xl">👨‍✈️</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Expert Drivers</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Professional, experienced chauffeurs you can trust</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#5DFDCB] to-[#43E0F8] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white text-lg sm:text-2xl">🛡️</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Safety First</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Your safety and comfort are our top priorities</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <CheckCircle className="text-[#0056D2] sm:w-5 sm:h-5" size={18} />
                  Key Features
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {service.content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0056D2] rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`bg-gradient-to-br ${service.iconColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <Star className="text-white sm:w-5 sm:h-5" size={18} />
                  Pricing
                </h3>
                <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.content.pricing}
                </p>
                <p className="text-white/90 text-sm sm:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Custom packages available
                </p>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <Clock className="text-[#0056D2] sm:w-5 sm:h-5" size={18} />
                  Availability
                </h3>
                <p className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {service.content.availability}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Ready to Book?
                </h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Get a custom quote for your requirements
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[#0056D2] font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  <Phone size={16} className="sm:w-5 sm:h-5" />
                  <span>Call Now: +91 9990-817-615</span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-[#0056D2] to-[#43E0F8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white mx-4 sm:mx-0"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Experience Premium Service Today
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Contact our experts to customize the perfect transportation solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0056D2] font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Get Free Consultation
              </motion.button>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
