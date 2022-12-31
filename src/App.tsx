import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>

      <div className="Home">
        <Home />
      </div>

      <Footer />
    </div>
  );
}
