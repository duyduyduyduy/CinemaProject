import React from "react";
import "./Seat.scss";

export default function Seat() {
  return (
    <div className="SeatContainer">
      <div className="SeatMainSize">
        <div className="leftSeatBorder">
          <h2 style={{ color: "white" }}>CHỌN GHẾ:</h2>
          <div className="seatTable">
            <div className="seatGridContainer">
              {" "}
              <div className="seatGrid">
                {Array(10)
                  .fill(0)
                  .map((item: number, index: number) => {
                    return (
                      <div className="columnContainer">
                        <span
                          className="seatLetter"
                          style={{ marginRight: "40px" }}
                        >
                          {String.fromCharCode(65 + 10 - 1 - index)}
                        </span>
                        {Array(27)
                          .fill(0)
                          .map((n: number, m: number) => {
                            return <div className="seatNumber">{m}</div>;
                          })}
                        <span
                          className="seatLetter"
                          style={{ marginLeft: "40px" }}
                        >
                          {String.fromCharCode(65 + 10 - 1 - index)}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="ScreenCon">
              {" "}
              <p className="Screen">Màn hình</p>
            </div>
            <div className="SeatInfoContainer">
              <div>
                <span className="greensquare">Ghế đang chọn</span>
                <span className="redsquare">Ghế đang chọn</span>
                <span className="graysquare">Ghế đang chọn</span>
                <span className="bluesquare">Ghế đang chọn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSeatBorder"></div>
      </div>
    </div>
  );
}
