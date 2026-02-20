import React, { useState, useEffect } from "react";
import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Fleet } from "./components/Fleet";
import { WhyChoose } from "./components/WhyChoose";
import { Destinations } from "./components/Destinations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Fleet />
          <WhyChoose />
          <Destinations />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
