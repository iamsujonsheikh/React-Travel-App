import React from "react";
import Destination from "./Components/Destination";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Selects from "./Components/Selects";
import Carousel from "./Components/Carousel";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
