import React from "react";
import "./App.css";
import Navbar from "./compound/Navbar";
import Maincontent from "./compound/Maincontent";
import Footer from "./compound/Footer";
import Podcast from "./compound/Podcast";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Maincontent />
      <Podcast />
      <Footer />
    </div>
  );
}

export default App;
