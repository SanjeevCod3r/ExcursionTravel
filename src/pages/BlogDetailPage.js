import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogDetail } from "../components/BlogDetail";

export const BlogDetailPage = () => {
  return (
    <div className="BlogDetailPage">
      <Navbar />
      <div className="pt-20">
        <BlogDetail />
      </div>
      <Footer />
    </div>
  );
};
