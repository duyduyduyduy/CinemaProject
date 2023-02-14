import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import "./Payment.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
function Payment(props: any) {
  const [numBank, setNumBank] = useState<number>(0);
  const { CinemaID, FilmID, SessionID } = useParams();
  const [cardNumber, setcardNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");
  const [expire, setExpire] = useState<string>("");
  const handleOnChangeBank = (event: any) => {
    setNumBank(event.target.value);
  };
  const handleOnChangeCardName = (event: any) => {
    setcardNumber(event.target.value);
  };
  const handleOnChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleOnExpire = (event: any) => {
    setExpire(event.target.value);
  };
  const handleOnChangeCVV = (event: any) => {
    setCVV(event.target.value);
  };
  const handleSplitString = (tmp: string) => {
    return {
      month: tmp.slice(tmp.length - 7, tmp.length - 5),
      day: tmp.slice(tmp.length - 10, tmp.length - 8),
      year: tmp.slice(-4),
    };
  };
  const handleSplitCinema = (tmp: string) => {
    return {
      cinema: tmp.slice(0, tmp.indexOf("|") - 1),
      theater: tmp.slice(tmp.indexOf("|") + 2, tmp.length),
    };
  };
  useEffect(() => {
    numBank !== 0 &&
      console.log("Info: ", {
        BankId: numBank,
        CardNumber: cardNumber,
        CardName: name,
        ExpireDate: expire,
        CVV: CVV,
        Price: props.FilmSummaryState?.Sum,
        ShowCode: `${CinemaID}-${SessionID}`,
        Email: Cookies.get("Email"),
        CinemaName: handleSplitCinema(props.FilmSummaryState?.Cinema).cinema,
        TheaterName: handleSplitCinema(props.FilmSummaryState?.Cinema).theater,
        FilmName: props.FilmSummaryState?.nameFilm,
        Combo: props.FilmSummaryState?.Combo,
        SeatCode: props.FilmSummaryState?.Seat,
        ShowTime: `${
          handleSplitString(props.FilmSummaryState?.showTime).year
        }-${handleSplitString(props.FilmSummaryState?.showTime).month}-${
          handleSplitString(props.FilmSummaryState?.showTime).day
        } ${props.FilmSummaryState?.showTime.slice(0, 5)}`,
      });
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     BankId: numBank,
    //     CardNumber: cardNumber,
    //     CardName: name,
    //     ExpireDate: expire,
    //     CVV: CVV,
    //     Price: 0,
    //     ShowCode: `${CinemaID}-${SessionID}`,
    //     Email: Cookies.get("Email"),
    //     CinemaName: "Galaxy Nguyen Du",
    //     TheaterName: "RAP 1",
    //     FilmName: props.FilmSummaryState.nameFilm,
    //     Combo: props.FilmSummaryState.Combo,
    //     SeatCode: props.FilmSummaryState.Seat,
    //     ShowTime: "2023-02-14 21:15",
    //   }),
    // };
    // fetch(
    //   "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/Ticket",
    //   requestOptions
    // ).then((response) => {});
  }, [props.buy]);
  return (
    <div className="PaymentContainer">
      <div className="title">
        <h1>VUI LÒNG THANH TOÁN</h1>
        <span>18:20</span>
      </div>

      <div className="contentContainer">
        <div className="">dfadsa</div>
        <div className="RightHandPayment">
          {" "}
          <div className="intContainer">
            <select name="Chọn Loại Thẻ" onChange={handleOnChangeBank}>
              <option value="#">Chọn thẻ</option>
              <option value="1">TP Bank</option>
              <option value="2">Agribank</option>
            </select>
          </div>
          <div className="intContainer">
            <input
              type="text"
              placeholder="Nhập số thẻ"
              onChange={handleOnChangeCardName}
            />
          </div>
          <div className="intContainer">
            <input
              type="text"
              placeholder="Tên chủ thẻ"
              onChange={handleOnChangeName}
            />
          </div>
          <div className="intContainer">
            <input
              type="text"
              disabled
              value={Cookies.get("Email")}
              className="gender"
            />
          </div>
          <div className="intContainerexpire">
            <input
              type="text"
              className="expireday"
              placeholder="Expire day"
              onChange={handleOnExpire}
            />
            <input
              type="text"
              className="CVV"
              placeholder="CVV / CVC"
              onChange={handleOnChangeCVV}
            />
          </div>
          <div className="intContainer">
            <input type="text" placeholder="Mã giảm giá" />
          </div>
          <div className="intContainer">
            <span>
              (*) Bằng việc click/chạm vào THANH TOÁN, bạn đã xác nhận hiểu rõ
              các Quy Định Giao Dịch Trực Tuyến của Galaxy Cinema.
            </span>
          </div>
          <div className="intContainer">
            <button>ÁP DỤNG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { FilmSummaryState: state.FilmSummaryState };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
