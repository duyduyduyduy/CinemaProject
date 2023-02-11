import React, { useEffect, useState } from "react";
import eConcessionItems from "../Model/eConcessionItems";
import "./Ticker.scss";
import handleDisplayPrice from "../FunctionHandle/HandleDisPlayPrice";
import eTicket from "../Model/eTicket";
import InfoFilm from "../InfoFilm/InfoFilm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Ticker(props: any) {
  const [ConcessionItems, setConcessionitem] = useState<
    Array<eConcessionItems>
  >([]);
  const nav = useNavigate();
  const [TicketItems, setTicketItems] = useState<Array<eTicket>>([]);
  const [arrayTicket, setArray] = useState<any>([]);
  const [arrayCombo, setCombo] = useState<any>([]);
  const handleOnClickTicket = (num: number, name: string) => {
    const newArray = arrayTicket.map((item: any) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + num };
      }
      return item;
    });
    setArray(newArray);
  };
  const handleOnClickCombo = (num: number, id: string) => {
    const newArray = arrayCombo.map((item: any) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + num };
      }
      return item;
    });
    setCombo(newArray);
  };
  const FunctionCalculateFinalSum = () => {
    let result1 = 0;
    let result2 = 0;
    arrayTicket.map((item: any) => {
      result1 += item.quantity * item.price;
    });
    arrayCombo.map((item: any) => {
      result2 += item.quantity * item.price;
    });
    return result1 + result2;
  };
  const FunctionMergeString = () => {
    let result = "";
    arrayCombo.map((item: any) => {
      if (item.quantity !== 0) {
        result += item.name + "(" + item.quantity + ")" + ", ";
      }
    });
    return result;
  };
  const SumSeat = () => {
    let result1 = 0;
    let result2 = 0;
    arrayTicket.map((item: any) => {
      if (item.areaCategoryCode === "0000000002") {
        result1 += item.quantity;
      } else if (item.areaCategoryCode === "0000000004") {
        result2 += item.quantity;
      }
    });
    return { Standard: result1, VIP: result2 };
  };
  const handleOnClickContinue = () => {
    nav("/booking-seat");
    props.UpdateNumSeat(SumSeat());
  };
  useEffect(() => {
    props.CalculateFinalSum(FunctionCalculateFinalSum());
    props.GetCombo(FunctionMergeString());
  }, [arrayTicket, arrayCombo]);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/booking/detail"
    )
      .then((res) => res.json())
      .then((data) => {
        setConcessionitem(data.consession[0].concessionItems);
        setTicketItems(data.ticket);
        setCombo(
          data.consession[0].concessionItems.map((item: any, index: number) => {
            return {
              quantity: 0,
              id: item.id,
              price: item.displayPrice,
              name: item.description,
            };
          })
        );
        setArray(
          data.ticket.map((item: any, index: number) => {
            return {
              quantity: 0,
              name: item.name,
              price: item.displayPrice,
              areaCategoryCode: item.areaCategoryCode,
            };
          })
        );
      });
  }, []);
  const handleCalculateSumCombo = () => {
    let result = 0;
    arrayCombo.map((item: any) => {
      result += item.quantity * item.price;
    });
    return result;
  };
  const handleCalculateSumTicket = () => {
    let result = 0;
    arrayTicket.map((item: any) => {
      result += item.quantity * item.price;
    });
    return result;
  };
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
                {TicketItems?.map((item, index) => {
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
                              <i
                                className={`fa-solid fa-circle-minus ${
                                  arrayTicket[index].quantity === 0
                                    ? "disableButton"
                                    : ""
                                }`}
                                onClick={() =>
                                  arrayTicket[index].quantity !== 0 &&
                                  handleOnClickTicket(-1, item.name)
                                }
                              ></i>
                            </button>
                          </span>
                          <input
                            type="text"
                            value={arrayTicket[index].quantity}
                          />
                          <span>
                            <button>
                              <i
                                className="fa-solid fa-circle-plus"
                                onClick={() =>
                                  handleOnClickTicket(1, item.name)
                                }
                              ></i>
                            </button>
                          </span>
                        </div>
                      </td>

                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(item?.displayPrice)}
                      </td>
                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(
                          arrayTicket[index].quantity * arrayTicket[index].price
                        )}
                      </td>
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
                  <td style={{ textAlign: "end" }}>
                    {handleDisplayPrice(handleCalculateSumTicket())}
                  </td>
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
                {ConcessionItems?.map((item: any, index: number) => {
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
                              <i
                                className={`fa-solid fa-circle-minus ${
                                  arrayCombo[index].quantity === 0
                                    ? "disableButton"
                                    : ""
                                }`}
                                onClick={() =>
                                  arrayCombo[index].quantity !== 0 &&
                                  handleOnClickCombo(-1, item.id)
                                }
                              ></i>
                            </button>
                          </span>
                          <input
                            type="text"
                            value={arrayCombo[index].quantity}
                          />
                          <span>
                            <button>
                              <i
                                className="fa-solid fa-circle-plus"
                                onClick={() => handleOnClickCombo(1, item.id)}
                              ></i>
                            </button>
                          </span>
                        </div>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(item?.displayPrice)}
                      </td>
                      <td style={{ textAlign: "end" }}>
                        {handleDisplayPrice(
                          arrayCombo[index]?.quantity * arrayCombo[index]?.price
                        )}
                      </td>
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
                  <td style={{ textAlign: "end" }}>
                    {handleDisplayPrice(handleCalculateSumCombo())}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {" "}
          <InfoFilm />
          <div className="totalEnd">
            <button onClick={() => handleOnClickContinue()}>
              TIẾP TỤC <i className="fa-solid fa-arrow-right-long"></i>
            </button>
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
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    CalculateFinalSum: (data: any) => {
      dispatch({
        type: "CALCULATE_FINAL_SUM",
        payload: data,
      });
    },
    GetCombo: (data: any) => {
      dispatch({
        type: "GET_COMBO",
        payload: data,
      });
    },
    UpdateNumSeat: (data: any) => {
      dispatch({
        type: "UPDATE_NUM_SEAT",
        payload: data,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
