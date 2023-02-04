import React, { useState, useEffect } from "react";
import "./LoginPopup.scss";
import { connect } from "react-redux";
import Cookies from "js-cookie";
function LoginPopup(props: any) {
  const [signinModal, setSignInModal] = useState<boolean>(true);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleOnChangeEmail = (event: any) => {
    setUserName(event.target.value);
  };
  const handleOnChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleOnClickLogin = () => {
    Cookies.set("Email", username);
    Cookies.set("Password", password);
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
        Cookies.set("Name", data.Name);
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
          ĐĂNG NHẬP
        </span>
        <span className="xett">/</span>
        <span
          className={`singup ${signinModal === false && "activesignin"}`}
          onClick={() => setSignInModal(false)}
        >
          ĐĂNG KÝ
        </span>

        {signinModal && (
          <div>
            {" "}
            <p className="subdescription">
              Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận
              thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
            </p>
            <input placeholder="Email" onChange={handleOnChangeEmail} />
            <input placeholder="Mật khẩu" onChange={handleOnChangePassword} />
            <p className="ForgetPass">Quên mật khẩu ?</p>
            <button
              type="button"
              className="signinButton"
              onClick={handleOnClickLogin}
            >
              ĐĂNG NHẬP
            </button>
          </div>
        )}
        {!signinModal && (
          <div>
            {" "}
            <p className="subdescription">
              Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận
              thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
            </p>
            <input placeholder="Họ và tên" />
            <input placeholder="Email" />
            <div className="passContainer">
              <input placeholder="Mật khẩu" />
              <input placeholder="Xác nhận mật khẩu" />
            </div>
            <p style={{ marginBottom: "20px" }}>
              Tôi đã đọc và đồng ý với{" "}
              <span
                style={{
                  color: "#f26b38",
                  fontWeight: "bolder",
                }}
              >
                CHÍNH SÁCH
              </span>{" "}
              của chương trình.
            </p>
            <button type="button" className="signinButton">
              ĐĂNG KÝ
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
