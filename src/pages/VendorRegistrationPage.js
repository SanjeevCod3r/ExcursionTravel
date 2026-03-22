import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { VendorRegistration } from "../components/VendorRegistration";

export const VendorRegistrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="VendorRegistrationPage">
      <Navbar />
      <div className="pt-20">
        <VendorRegistration />
      </div>
      <Footer />
    </div>
  );
};
