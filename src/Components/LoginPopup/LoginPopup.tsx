import React, { useState, useEffect } from "react";
import "./LoginPopup.scss";
import { connect } from "react-redux";
import Cookies from "js-cookie";
function LoginPopup(props: any) {
  const [signinModal, setSignInModal] = useState<boolean>(true);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const handleOnChangeEmail = (event: any) => {
    setUserName(event.target.value);
  };
  const handleOnChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleOnchangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleOnClickSingup = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: username,
        Name: name,
        Password: password,
        Role: "0",
      }),
    };
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/user",
      requestOptions
    ).then((response) => {
      Cookies.set("Email", username);
      Cookies.set("Password", password);
      Cookies.set("Name", name);
      response.status === 200 && props.successlogin();
      response.status === 200 && props.closeSignIn();
    });
  };
  const handleOnClickLogin = () => {
    Cookies.set("Email", username, { expires: 1 });
    Cookies.set("Password", password, { expires: 1 });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: username,
        Password: password,
      }),
    };
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/Login",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        Cookies.set("Name", data.Name, { expires: 1 });
      });
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/Login",
      requestOptions
    ).then((response) => {
      response.status === 200 && props.successlogin();
      response.status === 200 && props.closeSignIn();
    });
  };
  return (
    <div className="LoginPopupContainer">
      <div className="LoginPopupMainsize">
        <i
          className="fa-solid fa-x x-signinup"
          onClick={() => props.closeSignIn()}
        ></i>
        <span
          className={`singin ${signinModal === true && "activesignin"}`}
          onClick={() => setSignInModal(true)}
        >
          ????NG NH???P
        </span>
        <span className="xett">/</span>
        <span
          className={`singup ${signinModal === false && "activesignin"}`}
          onClick={() => setSignInModal(false)}
        >
          ????NG K??
        </span>

        {signinModal && (
          <div>
            {" "}
            <p className="subdescription">
              Vui l??ng ????ng nh???p tr?????c khi mua v?? ????? t??ch lu??? ??i???m, c?? h???i nh???n
              th??m nhi???u ??u ????i t??? ch????ng tr??nh th??nh vi??n Galaxy Cinema.
            </p>
            <input placeholder="Email" onChange={handleOnChangeEmail} />
            <input
              type={"password"}
              placeholder="M???t kh???u"
              onChange={handleOnChangePassword}
            />
            <p className="ForgetPass">Qu??n m???t kh???u ?</p>
            <button
              type="button"
              className="signinButton"
              onClick={handleOnClickLogin}
            >
              ????NG NH???P
            </button>
          </div>
        )}
        {!signinModal && (
          <div>
            {" "}
            <p className="subdescription">
              Vui l??ng ????ng nh???p tr?????c khi mua v?? ????? t??ch lu??? ??i???m, c?? h???i nh???n
              th??m nhi???u ??u ????i t??? ch????ng tr??nh th??nh vi??n Galaxy Cinema.
            </p>
            <input placeholder="H??? v?? t??n" onChange={handleOnchangeName} />
            <input placeholder="Email" onChange={handleOnChangeEmail} />
            <div className="passContainer">
              <input
                placeholder="M???t kh???u"
                type={"password"}
                onChange={handleOnChangePassword}
              />
              <input
                placeholder="X??c nh???n m???t kh???u"
                type={"password"}
                onChange={handleOnChangePassword}
              />
            </div>
            <p style={{ marginBottom: "20px" }}>
              T??i ???? ?????c v?? ?????ng ?? v???i{" "}
              <span
                style={{
                  color: "#f26b38",
                  fontWeight: "bolder",
                }}
              >
                CH??NH S??CH
              </span>{" "}
              c???a ch????ng tr??nh.
            </p>
            <button
              type="button"
              className="signinButton"
              onClick={handleOnClickSingup}
            >
              ????NG K??
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    closeSignIn: () => {
      dispatch({
        type: "CLOSE_SIGN_IN_MODAL",
      });
    },
    successlogin: () => {
      dispatch({
        type: "ALREADY_LOGIN",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
