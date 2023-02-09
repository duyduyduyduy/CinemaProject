import React, { useEffect, useState } from "react";
import eConcessionItems from "../Model/eConcessionItems";
import "./Ticker.scss";
import handleDisplayPrice from "../FunctionHandle/HandleDisPlayPrice";
import eTicket from "../Model/eTicket";
import InfoFilm from "../InfoFilm/InfoFilm";
export default function Ticker() {
  const [ConcessionItems, setConcessionitem] = useState<
    Array<eConcessionItems>
  >([]);
  const [TicketItems, setTicketItems] = useState<Array<eTicket>>([]);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/booking/detail"
    )
      .then((res) => res.json())
      .then((data) => {
        setConcessionitem(data.consession[0].concessionItems);
        setTicketItems(data.ticket);
      });
  }, []);
  return (
    <div className="Ticker">
      <div className="mainSize">
        <div className="TickerContainer">
          <h1>CHỌN VÉ/THỨC ĂN</h1>
          <div className="FullTable">
            <table className="tableTop">
              <thead>
                <tr>
                  <th className="tbth1">Loại vé</th>
                  <th className="tbth2">Số lượng</th>
                  <th className="tbth3">Giá(VNĐ)</th>
                  <th className="tbth4">Tổng(VNĐ)</th>
                </tr>
              </thead>

              <tbody>
                {TicketItems?.map((item) => {
                  return (
                    <tr>
                      <td>
                        <b>{item?.name}</b>
                        <p>{item?.description}</p>
                      </td>
                      <td className="tdSoLuong">
                        <div>
                          <span>
                            <button>
                              <i className="fa-solid fa-circle-minus"></i>
                            </button>
                          </span>
                          <input type="text" />
                          <span>
                            <button>
                              <i className="fa-solid fa-circle-plus"></i>
                            </button>
                          </span>
                        </div>
                      </td>

                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(item?.displayPrice)}
                      </td>
                      <td style={{ textAlign: "end" }}>0</td>
                    </tr>
                  );
                })}

                <tr
                  className="total"
                  style={{
                    color: "orangered",
                    fontSize: "18px",
                    fontWeight: "bolder",
                  }}
                >
                  <td colSpan={3}>Tổng</td>
                  <td style={{ textAlign: "end" }}>0</td>
                </tr>
              </tbody>
            </table>

            {/* ----------------------------------------------------------------- */}
            <table className="tableTop">
              <thead>
                <tr>
                  <th className="tbth1">Combo</th>
                  <th className="tbth2">Số lượng</th>
                  <th className="tbth3">Giá(VNĐ)</th>
                  <th className="tbth4">Tổng(VNĐ)</th>
                </tr>
              </thead>

              <tbody>
                {ConcessionItems?.map((item) => {
                  return (
                    <tr>
                      <td style={{ display: "flex" }}>
                        <img src={item?.imageUrl} width={"100px"} alt="" />
                        <div className="comboContainer">
                          <b>{item?.description}</b>
                          <p>{item?.extendedDescription}</p>
                        </div>
                      </td>
                      <td className="tdSoLuong">
                        <div>
                          <span>
                            <button>
                              <i className="fa-solid fa-circle-minus"></i>
                            </button>
                          </span>
                          <input type="text" value={"0"} />
                          <span>
                            <button>
                              <i className="fa-solid fa-circle-plus"></i>
                            </button>
                          </span>
                        </div>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(item?.displayPrice)}
                      </td>
                      <td style={{ textAlign: "end" }}>0</td>
                    </tr>
                  );
                })}

                <tr
                  className="total"
                  style={{
                    color: "orangered",
                    fontSize: "18px",
                    fontWeight: "bolder",
                  }}
                >
                  <td colSpan={3}>Tổng</td>
                  <td style={{ textAlign: "end" }}>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <InfoFilm />
      </div>
    </div>
  );
}
