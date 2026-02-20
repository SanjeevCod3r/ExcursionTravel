import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Fleet } from "../components/Fleet";
import { Booking } from "../components/Booking";

export const FleetPage = () => {
  const [currentPage, setCurrentPage] = useState('fleet');
  const [bookingData, setBookingData] = useState(null);

  const handleBookNow = (data) => {
    setBookingData(data);
    setCurrentPage('booking');
  };

  const handleBackFromBooking = () => {
    setCurrentPage('fleet');
    setBookingData(null);
  };

  if (currentPage === 'booking') {
    return <Booking onBack={handleBackFromBooking} {...bookingData} />;
  }

  return (
    <div className="FleetPage">
      <Navbar />
      <div className="pt-20">
        <Fleet onBookNow={handleBookNow} />
      </div>
      <Footer />
    </div>
  );
};
