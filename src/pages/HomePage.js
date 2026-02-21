import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { WhyChoose } from "../components/WhyChoose";
import { FeaturedPackages } from "../components/FeaturedPackages";
import { PhotoGallery } from "../components/PhotoGallery";
import { SpecialOffers } from "../components/SpecialOffers";
import { TravelTips } from "../components/TravelTips";
import { Footer } from "../components/Footer";
import { Booking } from "../components/Booking";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState(null);

  const handleBookNow = (data) => {
    setBookingData(data);
    setCurrentPage('booking');
  };

  const handleBackFromBooking = () => {
    setCurrentPage('home');
    setBookingData(null);
  };

  if (currentPage === 'booking') {
    return <Booking onBack={handleBackFromBooking} {...bookingData} />;
  }

  return (
    <div className="HomePage">
      <Navbar />
      <Hero />
      <About />
      <Services onBookNow={handleBookNow} />
      <WhyChoose />
      <FeaturedPackages />
      <PhotoGallery />
      <SpecialOffers />
      <TravelTips />
      <Footer />
    </div>
  );
};
