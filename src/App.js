import React from "react";
import Destination from "./Components/Destination";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
