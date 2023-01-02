import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import eFilm from "../Model/eFilm";
import Promotion from "./Promotion/Promotion";
export default function Home() {
  const [isClick, setIsClick] = useState<number>(1);
  const [lsfilm, setLsFilm] = useState<Array<eFilm>>([]);
  const [tmp, setTmp] = useState<number>(1);
  let a = 0,
    b = 0;
  useEffect(() => {
    fetch("https://teachingserver.onrender.com/cinema/nowAndSoon")
      .then((res) => res.json())
      .then((data) => {
        setLsFilm(isClick === 1 ? data.movieShowing : data.movieCommingSoon);
      });
    setTmp(1);
  }, [isClick]);
  const consoleLog = (data: number) => {
    console.log("Data:", data);
    return false;
  };
  const assignVar = () => {
    a = Math.floor(lsfilm.length / 5);
    b = lsfilm.length - 5 * Math.floor(lsfilm.length / 5);
    return false;
  };
  const nav = useNavigate();
  const handleOnclickMuaVe = (id: string) => {
    nav("/Film/" + id);
  };
  return (
    <div>
      <Carousel />
      <div className="FilmContainer" id="section1Home">
        {assignVar()}
        <div className="titleContainer">
          <span
            onClick={() => setIsClick(1)}
            className={isClick === 1 ? "Active" : ""}
          >
            PHIM ĐANG CHIẾU
          </span>
          <span
            onClick={() => setIsClick(2)}
            className={isClick === 2 ? "Active" : ""}
          >
            PHIM SẮP CHIẾU
          </span>
        </div>
        <div className="lsFilmContainer">
          {lsfilm?.map((item, index) => {
            if (index < (tmp > a ? tmp * 5 + b : tmp * 5)) {
              return (
                <div className="Film">
                  <div className="imageContainer shine">
                    <img alt="Bùi Thanh Duy" src={item.imagePortrait} />
                  </div>
                  <p>
                    {item.name.length > 30
                      ? item.name.slice(0, 30) + " ..."
                      : item.name}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button onClick={() => handleOnclickMuaVe(item.id)}>
                      MUA VÉ
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div
          style={{
            width: "1499px",
            display: "flex",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            paddingRight: "80px",
            paddingTop: "20px",
            height: "auto",
          }}
        >
          {tmp <= a && a !== 0 && (
            <a className="buttonAddmore" onClick={() => setTmp(tmp + 1)}>
              XEM THÊM <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
          {tmp > a && (
            <a
              className="buttonAddmore"
              onClick={() => setTmp(1)}
              href="/HomePage#section1Home"
            >
              THU GỌN <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
      <Promotion />
    </div>
  );
}
