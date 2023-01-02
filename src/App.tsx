import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FilmInfo from "./Components/FilmInfo/FilmInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="Header">
          <Header />
        </div>
        <Routes>
          <Route
            path="/HomePage"
            element={
              <div className="Home">
                <Home />
              </div>
            }
          ></Route>
          <Route path="/Film/:id" element={<FilmInfo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
