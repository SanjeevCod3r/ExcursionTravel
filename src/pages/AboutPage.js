import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};
