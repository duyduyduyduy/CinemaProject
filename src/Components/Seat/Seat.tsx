import React, { useEffect, useState } from "react";
import InfoFilm from "../InfoFilm/InfoFilm";
import "./Seat.scss";

export default function Seat() {
  const [seatStandard, SetSeatStandard] = useState<any>();
  const [seatVIP, SetSeatVIP] = useState<any>();
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [StandardSeat, setStandardSeat] = useState<any>([]);
  let Standard = 6;
  let Vip = 0;
  //------------------- 3 ghế thường ( Standard ) -------------------
  //------------------- 1 ghế couple ( Standard ) -------------------
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/booking/detail"
    )
      .then((res) => res.json())
      .then((data) => {
        SetSeatStandard(data.seatPlan.seatLayoutData.areas[0]?.rows);
        SetSeatVIP(data.seatPlan.seatLayoutData.areas[1]?.rows);
      });
  }, []);
  useEffect(() => {
    console.log(StandardSeat);
  }, [StandardSeat]);
  //Function booking standard seat
  const HandleBookingStandard = (data: string) => {
    if (StandardSeat.includes(data) === true) {
      setStandardSeat(StandardSeat.filter((n: string) => n !== data));
      setNum1(num1 - 1);
    } else {
      if (num1 < Standard) {
        if (StandardSeat.includes(data) === false) {
          setStandardSeat([...StandardSeat, data]);
          setNum1(num1 + 1);
        }
      }
    }
  };
  return (
    <div className="SeatContainer">
      <div className="SeatMainSize">
        <div className="leftSeatBorder">
          <h2 style={{ color: "white" }}>CHỌN GHẾ:</h2>
          <div className="seatTable">
            <div className="seatGridContainer">
              <div className="LeftLetterContainer">
                {seatVIP?.map((item: any) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <p
                        className="seatLetter"
                        style={{ marginBottom: "30px" }}
                      >
                        {item.physicalName}
                      </p>
                    )
                  );
                })}
                {seatStandard?.map((item: any) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <p className="seatLetter">{item.physicalName}</p>
                    )
                  );
                })}
              </div>
              <div className="seatGrid">
                {seatVIP?.map((item: any) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <div
                        className="columnContainer"
                        style={{ marginBottom: "30px" }}
                      >
                        {item?.seats.map((item: any, index: number) => {
                          return (
                            index % 2 === 0 && (
                              <div>
                                <div
                                  className={`seatNumberVIP ${
                                    Vip === 0 ? "blockSeat" : ""
                                  }`}
                                  style={{ marginRight: "2px" }}
                                >
                                  {item.id}
                                </div>
                                <div
                                  className={`seatNumberVIP ${
                                    Vip === 0 ? "blockSeat" : ""
                                  }`}
                                  style={{ marginRight: "10px" }}
                                >
                                  {item.id * 1 + 1}
                                </div>
                              </div>
                            )
                          );
                        })}
                      </div>
                    )
                  );
                })}
                {seatStandard?.map((item: any, index: number) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <div className="columnContainer">
                        {item?.seats.map((m: any) => {
                          return (
                            <div
                              className={`seatNumber ${
                                StandardSeat.includes(
                                  String(item.physicalName) + String(m.id)
                                ) === true
                                  ? "activeSeatNumber"
                                  : ""
                              }`}
                              onClick={() =>
                                HandleBookingStandard(
                                  String(item.physicalName) + String(m.id)
                                )
                              }
                            >
                              {m.id}
                            </div>
                          );
                        })}
                      </div>
                    )
                  );
                })}
              </div>
              <div className="LeftLetterContainer">
                {" "}
                {seatVIP?.map((item: any) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <p
                        className="seatLetter"
                        style={{ marginBottom: "30px" }}
                      >
                        {item.physicalName}
                      </p>
                    )
                  );
                })}
                {seatStandard?.map((item: any) => {
                  return (
                    item.physicalName &&
                    item.seats && (
                      <p className="seatLetter">{item.physicalName}</p>
                    )
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
                <span className="redsquare">Ghế đã bán</span>
                <span className="graysquare">Có thể chọn</span>
                <span className="bluesquare">Khổng thể chọn</span>
                <span className="purplequare">Ghế COUPLE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSeatBorder"><InfoFilm /></div>
      </div>
    </div>
  );
}
