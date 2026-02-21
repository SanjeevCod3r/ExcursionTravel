import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Blog } from "../components/Blog";

export const BlogPage = () => {
  return (
    <div className="BlogPage">
      <Navbar />
      <div className="pt-20">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};
