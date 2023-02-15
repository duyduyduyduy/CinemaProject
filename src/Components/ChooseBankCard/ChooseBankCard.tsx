import React, { useEffect, useState } from "react";
import Payment from "../Payment/Payment";

import "./ChooseBankCard.scss";
export default function ChooseBankCard() {
  const [navigate, setnavigate] = useState(1);
  return navigate === 0 ? (
    <div className="choosebankMainSize">
      <div style={{ display: "flex" }}>
        <h1 className="title activeBankCard">
          Thanh toán bằng tài khoản ngân hàng có sẵn
        </h1>
        <h1
          className="title"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          /
        </h1>
        <h1 className="title">Thanh toán bằng tài khoản ngân hàng mới</h1>
      </div>

      <div className="subMainSizeChooseBank"></div>
    </div>
  ) : (
    <Payment />
  );
}
