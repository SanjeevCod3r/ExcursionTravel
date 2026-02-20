import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { Booking } from "../components/Booking";

export const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState('services');
  const [bookingData, setBookingData] = useState(null);

  const handleBookNow = (data) => {
    setBookingData(data);
    setCurrentPage('booking');
  };

  const handleBackFromBooking = () => {
    setCurrentPage('services');
    setBookingData(null);
  };

  if (currentPage === 'booking') {
    return <Booking onBack={handleBackFromBooking} {...bookingData} />;
  }

  return (
    <div className="ServicesPage">
      <Navbar />
      <div className="pt-20">
        <Services onBookNow={handleBookNow} />
      </div>
      <Footer />
    </div>
  );
};
