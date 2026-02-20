import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export const ContactPage = () => {
  return (
    <div className="ContactPage">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
