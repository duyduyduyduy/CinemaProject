import React, { useEffect, useState } from "react";
import InfoFilm from "../InfoFilm/InfoFilm";
import "./Seat.scss";
import { connect } from "react-redux";
function Seat(props: any) {
  const [seatStandard, SetSeatStandard] = useState<any>();
  const [seatVIP, SetSeatVIP] = useState<any>();
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [StandardSeat, setStandardSeat] = useState<any>([]);
  const [VIPSeat, setVIPSeat] = useState<any>([]);

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
  const handleBookingVIP = (data: string) => {
    if (VIPSeat.includes(data) === true) {
      setVIPSeat(VIPSeat.filter((n: string) => n !== data));
      setNum2(num2 - 1);
    } else {
      if (num2 < props.FilmSummaryState.nVIPSeat) {
        if (VIPSeat.includes(data) === false) {
          setVIPSeat([...VIPSeat, data]);
          setNum2(num2 + 1);
        }
      }
    }
  };
  //Function booking standard seat
  const HandleBookingStandard = (data: string) => {
    if (StandardSeat.includes(data) === true) {
      setStandardSeat(StandardSeat.filter((n: string) => n !== data));
      setNum1(num1 - 1);
    } else {
      if (num1 < props.FilmSummaryState.nStandardSeat) {
        if (StandardSeat.includes(data) === false) {
          setStandardSeat([...StandardSeat, data]);
          setNum1(num1 + 1);
        }
      }
    }
  };
  useEffect(() => {
    let result = "";
    StandardSeat?.map((item: any) => {
      result += item + ",";
    });
    VIPSeat?.map((item: any) => {
      result += "[ " + item + " ]" + ",";
    });
    props.getDetailSeat(result.slice(0, -1));
  }, [StandardSeat, VIPSeat]);

  return (
    <div className="leftSeatBorder">
      <h2 style={{ color: "white" }}>CHỌN GHẾ:</h2>
      <div className="seatTable">
        <div className="seatGridContainer">
          <div className="LeftLetterContainer">
            {seatVIP?.map((item: any) => {
              return (
                item.physicalName &&
                item.seats && (
                  <p className="seatLetter" style={{ marginBottom: "30px" }}>
                    {item.physicalName}
                  </p>
                )
              );
            })}
            {seatStandard?.map((item: any) => {
              return (
                item.physicalName &&
                item.seats && <p className="seatLetter">{item.physicalName}</p>
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
                    {item?.seats.map((n: any, index: number) => {
                      return (
                        index % 2 === 0 && (
                          <div
                            style={{ display: "flex", marginRight: "10px" }}
                            onClick={() =>
                              props.FilmSummaryState.nVIPSeat !== 0 &&
                              handleBookingVIP(
                                String(item.physicalName) +
                                  String(n.id) +
                                  "," +
                                  String(item.physicalName) +
                                  String(n.id * 1 + 1)
                              )
                            }
                          >
                            <div
                              className={`seatNumberVIP ${
                                props.FilmSummaryState.nVIPSeat === 0
                                  ? "blockSeat"
                                  : ""
                              } ${
                                VIPSeat.includes(
                                  String(item.physicalName) +
                                    String(n.id) +
                                    "," +
                                    String(item.physicalName) +
                                    String(n.id * 1 + 1)
                                ) === true
                                  ? "activeSeatNumber"
                                  : ""
                              }`}
                              style={{ marginRight: "2px" }}
                            >
                              {n.id}
                            </div>
                            <div
                              className={`seatNumberVIP ${
                                props.FilmSummaryState.nVIPSeat === 0
                                  ? "blockSeat"
                                  : ""
                              } ${
                                VIPSeat.includes(
                                  String(item.physicalName) +
                                    String(n.id) +
                                    "," +
                                    String(item.physicalName) +
                                    String(n.id * 1 + 1)
                                ) === true
                                  ? "activeSeatNumber"
                                  : ""
                              }`}
                            >
                              {n.id * 1 + 1}
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
                            props.FilmSummaryState.nStandardSeat === 0
                              ? "blockSeat"
                              : ""
                          }  ${
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
                  <p className="seatLetter" style={{ marginBottom: "30px" }}>
                    {item.physicalName}
                  </p>
                )
              );
            })}
            {seatStandard?.map((item: any) => {
              return (
                item.physicalName &&
                item.seats && <p className="seatLetter">{item.physicalName}</p>
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
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
    FilmSummaryState: state.FilmSummaryState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    getDetailSeat: (data: any) => {
      dispatch({
        type: "GET_SEAT",
        payload: data,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seat);
