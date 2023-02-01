import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FilmInfo from "./Components/FilmInfo/FilmInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
function App(props: any) {
  useEffect(() => {
    props.fetchdatafromfirstapi();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <div className="Header">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
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
const mapStateToProps = (state: any, ownProps: any) => {};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchdatafromfirstapi: () => {
      dispatch({
        type: "FECTH_DATA_FROM_FIRST_API",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
