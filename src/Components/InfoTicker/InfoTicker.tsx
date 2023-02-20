import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./InfoTicker.scss";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import TickkerItem from "./TickkerItem/TickkerItem";
import eFilm from "../Model/eFilm";
function InfoTicker(props: any) {
  const [tmp, setTmp] = useState<any>([]);
  const [soon, setSoon] = useState<any>([]);
  const [FilmRe, setFilmRe] = useState<Array<eFilm>>([]);
  const [already, setAlready] = useState<any>([]);
  const [info, setInfo] = useState<any>();
  const [appear, setAppear] = useState<any>(false);
  const [navigate, setNavigate] = useState<boolean>(true);
  //1----> phim sắp xem
  //2----> phim đã xem
  const month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "7",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const nav = useNavigate();
  useEffect(() => {
    setFilmRe(props.CurrentFilmState.lsCurFilm);
  }, [props]);
  useEffect(() => {
    if (props.ModalPopupState.login === false) {
      nav("/");
    }
  }, [props.ModalPopupState.login]);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/TicketByEmail/" +
        Cookies.get("Email")
    )
      .then((res) => res.json())
      .then((data) => {
        setTmp(data);
      });
  }, []);
  useEffect(() => {
    setSoon(
      tmp?.filter(
        (item: any) =>
          Number(new Date(item.ShowTime).getTime()) -
            Number(new Date().getTime()) >
          0
      )
    );
    setAlready(
      tmp?.filter(
        (item: any) =>
          Number(new Date(item.ShowTime).getTime()) -
            Number(new Date().getTime()) <=
          0
      )
    );
  }, [tmp]);
  const handleOnclickMuaVe = (id: string) => {
    nav("/Film/" + id);
  };
  const ageClassName = (age: number) => {
    let result = "";
    if (age === 0) {
      result = "age_1";
    } else if (age === 13) {
      result = "age";
    } else if (age === 16) {
      result = "age_3";
    } else {
      result = "age_2";
    }
    return result;
  };
  const handleOnClickAppear = (data: any) => {
    setInfo(data);
    setAppear(true);
  };
  return (
    <div>
      {" "}
      <div className="subheadContainer">
        <div className="subheadMainSize">
          <i className="fa-solid fa-house" onClick={() => nav("/")}></i>
          <i className="fa-solid fa-angle-right"></i>
          <a
            href="/#section1Home"
            onClick={() => nav("/#section1Home")}
            className="phimchieusubhead"
          >
            <b>Tài khoản</b>
          </a>
          <i className="fa-solid fa-angle-right"></i>
          <span style={{ color: "#737373", fontSize: "15px" }}>Vé đã đặt</span>
        </div>
      </div>{" "}
      <div className="InfoTickerContainer">
        <div className="InfoTickerMainsize">
          <div className="TickkerItemSliderContainer">
            <div className="BookedTicker">
              <h3>Vé đã đặt</h3>
              <div>
                <h4
                  onClick={() => setNavigate(false)}
                  className={`ExpiredFilm ${
                    navigate === false ? "activeButtonFilm" : ""
                  }`}
                >
                  Phim đã xem<i className="fa-solid fa-caret-down"></i>
                </h4>
                <h4
                  onClick={() => setNavigate(true)}
                  className={`SoonFilm ${
                    navigate === true ? "activeButtonFilm" : ""
                  }`}
                >
                  Phim sắp xem<i className="fa-solid fa-caret-down"></i>
                </h4>
              </div>
            </div>
            <div className="TableContainer">
              <table className="TableContent">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên Phim</th>
                    <th>Ghế</th>
                    <th>Combo</th>
                  </tr>
                </thead>
                <tbody>
                  {navigate === true &&
                    soon.map((item: any) => {
                      return (
                        <tr onClick={() => handleOnClickAppear(item)}>
                          <td>{item.Id}</td>
                          <td>{item.FilmName}</td>
                          <td>
                            {item.SeatCode.length > 11
                              ? item.SeatCode.slice(0, 11) + "..."
                              : item.SeatCode}
                          </td>
                          <td>
                            {item.Combo.length > 23
                              ? item.Combo.slice(0, 23) + "..."
                              : item.Combo}
                          </td>
                        </tr>
                      );
                    })}
                  {navigate === false &&
                    already.map((item: any) => {
                      return (
                        <tr onClick={() => handleOnClickAppear(item)}>
                          <td>{item.Id}</td>
                          <td>{item.FilmName}</td>
                          <td>
                            {item.SeatCode.length > 11
                              ? item.SeatCode.slice(0, 11) + "..."
                              : item.SeatCode}
                          </td>
                          <td>
                            {item.Combo.length > 23
                              ? item.Combo.slice(0, 23) + "..."
                              : item.Combo}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          {appear && info && (
            <div className="overlayInfoticket" onClick={() => setAppear(false)}>
              <div onClick={(Event) => Event.stopPropagation()}>
                {" "}
                <TickkerItem data={info} />
              </div>
            </div>
          )}
          <div className="FilmRecommend">
            <h3 className="titleFilmNow" style={{ marginBottom: "20px" }}>
              Phim đang chiếu
            </h3>
            {FilmRe?.map((item, index) => {
              return (
                index <= 4 && (
                  <div className="FilmContainerRe" key={index}>
                    <a
                      href={`/Film/${item.id}#FilmBanner`}
                      onClick={() => handleOnclickMuaVe(item.id)}
                    >
                      <img src={item.imagePortrait} alt="fjdlkjfkl"></img>
                    </a>
                    <div>
                      <span className={ageClassName(parseInt(item.age))}>
                        {item.age === "0" ? "P" : item.age + " +"}
                      </span>
                      <p style={{ fontWeight: "bolder" }}>
                        {item.name?.length > 25
                          ? item.name.slice(0, 25) + " ..."
                          : item.name}
                      </p>
                      <p
                        style={{
                          color: "rgb(134, 134, 134)",
                          fontWeight: "bolder",
                        }}
                      >
                        {item.subName?.length > 25
                          ? item.subName.slice(0, 25) + " ..."
                          : item.subName}
                      </p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <img
                          className="star"
                          style={{ width: "20px", marginRight: "4px" }}
                          alt="fhjkdshfjkshjk"
                          src="https://www.galaxycine.vn/website/images/ic_star_yellow.png"
                        />
                        {parseFloat(item.point.toString()).toFixed(1)}/10
                      </p>
                    </div>
                  </div>
                )
              );
            })}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <a
                // href="/#section1Home"
                hrefLang="/#Homepage1"
                // onClick={() => nav("/#section1Home")}
                onClick={() => nav("/#Homepage1")}
                className="moreButtoninRe"
                style={{
                  padding: "5px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Xem thêm<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    FilmSummaryState: state.FilmSummaryState,
    ModalPopupState: state.ModalPopupState,
    CurrentFilmState: state.CurrentFilmState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoTicker);
