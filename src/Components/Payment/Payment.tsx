import Cookies from "js-cookie";
import React from "react";
import "./Payment.scss";
export default function Payment() {


  return (
    <div className="PaymentContainer">
      <div className="title">
        <h1>VUI LÒNG THANH TOÁN</h1>
        <span>18:20</span>
      </div>

      <div className="contentContainer">
        <div className="LeftHandPayment">   
          <div className="ATMContainer" style={{
            backgroundImage: `url(${require('./1.png')})`
          }}>
            <div className="NameATM">
              <img src='https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-TPBank.png' alt="" />
              <h1>TP Bank</h1>
            </div>

            <div className="NumCard">
              <h3>XXXX-XXXX-XXXX-XXXX</h3>
              <p>2717</p>
            </div>

            <div className="UserInfo">
              <h3>NGUYEN HOANG VU</h3>
              <div>
                <span className="nameDay">VALID FROM</span>
                <span className="day">04/22</span>
                <span className="nameDay">GOOD THRU</span>
                <span className="day">04/28</span>
              </div>
            </div>
          </div>
        </div>



        <div className="RightHandPayment">
          {" "}
          <div className="intContainer">
            <select name="Chọn Loại Thẻ">
              <option value="#">Chọn thẻ</option>
              <option value="0">TP Bank</option>
              <option value="1">Agribank</option>
            </select>
          </div>
          <div className="intContainer">
            <input type="text" placeholder="Nhập số thẻ" />
          </div>
          <div className="intContainer">
            <input type="text" placeholder="Tên chủ thẻ" />
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
            <input type="text" className="expireday" placeholder="Expire day" />
            <input type="text" className="CVV" placeholder="CVV / CVC" />
          </div>
          <div className="intContainer">
            <input type="text" placeholder="Mã giảm giá" />
          </div>
          <div className="intContainer">
            <span>
              (*) Bằng việc click/chạm vào <b>THANH TOÁN</b>, bạn đã xác nhận hiểu rõ
              các <b>Quy Định Giao Dịch Trực Tuyến</b> của Galaxy Cinema.
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
