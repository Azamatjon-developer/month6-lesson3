import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutUS from "./components/aboutUS/AboutUS";
import OurServises from "./components/ourServises/Services";
import Services from "./components/ourServises/Services";
import Follow from "./components/Follow/Follow";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUS />
      <Services />
      <Follow />
      <Articles />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
