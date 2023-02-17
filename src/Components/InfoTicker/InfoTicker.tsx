import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./InfoTicker.scss";

export default function InfoTicker() {
  const [tmp, setTmp] = useState<any>([]);
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
  console.log(new Date(tmp[0]?.ShowTime).getMonth());
  return (
    <div className="InfoTicker">
      <div className="mainSize">
        <div className="subheader">
          <i style={{ color: "black" }} className="fa-solid fa-house"></i>
          <i className="fa-solid fa-angle-right"></i>
          <span>Thành viên</span>
          <i className="fa-solid fa-angle-right"></i>
          <span>Giao dịch</span>
        </div>

        <div className="menuInfo">
          <span>PHIM ĐÃ XEM</span>
          <span>/</span>
          <span>PHIM SẮP XEM</span>
        </div>
      </div>

      <div className="mainSizeMini">
        <div className="TickerContainer">
          {tmp?.map((item: any, index: number) => {
            return (
              <div className="TickerItem" key={index}>
                <div className="infLeft">
                  <h3>{item.FilmName}</h3>
                  <h4>CinemaName: {item.CinemaName}</h4>
                  <h4>TheaterName: {item.TheaterName}</h4>
                  <h4>
                    ShowTime:{" "}
                    {new Date(item.ShowTime).getDate() +
                      "-" +
                      month[new Date(item.ShowTime).getMonth()] +
                      "-" +
                      new Date(item.ShowTime).getFullYear()}
                  </h4>
                  <h4>Combo: {item.Combo}</h4>
                  <h4>SeatCode: {item.SeatCode}</h4>
                  <h5>
                    <i className="fa-solid fa-ticket"></i> {item.ShowCode}
                  </h5>
                </div>
                <div className="infRight"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
