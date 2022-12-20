import React from "react";
import EventShedul from "../components/landingPage/EventShedul";
import HeroSection from "../components/landingPage/HeroSection";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

const Landing = () => {
  return (
    <NavBar>
      <HeroSection />
      <EventShedul />
      <Footer />
    </NavBar>
  );
};

export default Landing;
