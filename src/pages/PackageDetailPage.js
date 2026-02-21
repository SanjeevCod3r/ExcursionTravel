import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PackageDetail } from '../components/PackageDetail';

export const PackageDetailPage = () => {
  return (
    <div>
      <Navbar />
      <PackageDetail />
      <Footer />
    </div>
  );
};
