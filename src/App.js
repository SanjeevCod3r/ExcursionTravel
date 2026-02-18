import React from "react";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyChoose />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
