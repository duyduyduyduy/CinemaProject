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
        <div className="">dfadsa</div>
        <div className="RightHandPayment">
          {" "}
          <div className="intContainer">
            <select name="Chọn Loại Thẻ">
              <option value="#">Chọn thẻ</option>
              <option value="#">TP Bank</option>
              <option value="#">Agribank</option>
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
