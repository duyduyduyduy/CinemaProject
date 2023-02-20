import React from "react";
import "./TickkerItem.scss";

export default function TickkerItem(props: any) {
  return (
    <div className="TickkerItem">
      <div className="topContainer">
        <span className="topLeft"></span>
        <span className="topMid"></span>
        <span className="topRight"></span>
        <span className="bottomLeft"></span>
        <span className="bottomRight"></span>

        <div className="Title">
          <h3>{props?.data.CinemaName}</h3>
          <h1>{props?.data.FilmName}</h1>
        </div>

        <div className="BannerFilm">
          <img src={props?.data.ImageLandscape} alt="" />
        </div>

        <div className="seatInfo">
          <div className="screen">
            <h5>RẠP</h5>
            <h4>{props?.data.TheaterName}</h4>
          </div>
          <div className="row">
            <h5>GHẾ</h5>
            <h4>
              {props?.data.SeatCode.length > 11
                ? props?.data.SeatCode.slice(0, 11) + "..."
                : props?.data.SeatCode}
            </h4>
          </div>
        </div>

        <div className="seatInfo">
          <div className="date">
            <h5 className="dateTime">Ngày</h5>
            <h4>{props?.data.ShowTime.slice(0, 10)}</h4>
          </div>
          <div className="Time">
            <h5 className="dateTime">Giờ</h5>
            <h4>{props?.data.ShowTime.slice(11, 16)}</h4>
          </div>
        </div>
      </div>
      <div className="botContainer">
        <img src={require("./core.png")} alt="Hoàng Anh Vũ" />
      </div>
    </div>
  );
}
