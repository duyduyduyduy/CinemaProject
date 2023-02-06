import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import FilmInfo from "./Components/FilmInfo/FilmInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Header1 from "./Components/Header1/Header1";
import BlogFilm from "./Components/BlogFilm/BlogFilm";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Cookies from "js-cookie";
import UserEdit from "./Components/UserEdit/UserEdit";
function App(props: any) {
  useEffect(() => {
    props.fetchdatafromfirstapi();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: Cookies.get("Email"),
        Password: Cookies.get("Password"),
      }),
    };
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/Login",
      requestOptions
    ).then((response) => {
      response.status === 200 && props.successlogin();
    });
  }, []);
  console.log(props.ModalPopupState.signinmodal);
  return (
    <div>
      {props.ModalPopupState.signinmodal === true && <LoginPopup />}
      <BrowserRouter>
        <div className="Header">
          <Header1 />
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
          <Route path="/BlogFilm" element={<BlogFilm />}></Route>
          <Route path="/edit-user" element={<UserEdit />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ModalPopupState: state.ModalPopupState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchdatafromfirstapi: () => {
      dispatch({
        type: "FECTH_DATA_FROM_FIRST_API",
      });
    },
    successlogin: () => {
      dispatch({
        type: "ALREADY_LOGIN",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
