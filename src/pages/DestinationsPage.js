import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Destinations } from "../components/Destinations";

export const DestinationsPage = () => {
  return (
    <div className="DestinationsPage">
      <Navbar />
      <div className="pt-20">
        <Destinations />
      </div>
      <Footer />
    </div>
  );
};
