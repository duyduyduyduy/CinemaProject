import React, { useEffect, useState } from "react";
import "./FilmInfo.scss";
import { useParams } from "react-router-dom";
import eSchedule from "../Model/eSchedule";
import { connect } from "react-redux";
function FilmInfo(props: any) {
  const { id } = useParams();
  const [detaiSchedule, setSchedule] = useState<Array<eSchedule>>([]);
  useEffect(() => {
    fetch("https://teachingserver.onrender.com/cinema/movie/" + id)
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
        console.log(data);
      });
  }, [id, props]);
  return (
    <>
      {/* Phần banner của anh Vũ */}
      <div className="bannerContainer" id="FilmBanner"></div>
      {/* ------------------------------ */}
      <div className="scheduleContainer">
        <div className="scheduleMainsize">
          <div className="titleandlocation">
            <div className="Duy">
              <div className="titleFilm">
                <p>Lịch chiếu Quyết Tâm Cua Em</p>
              </div>
              <div>
                <div className="locationCity">
                  <p>
                    <i className="fa-solid fa-location-dot"></i> TPHCM
                    <i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
                <div className="cinemalocation">
                  <p>
                    Tất cả các rạp<i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="scheduleInfo">
              <div className="dateInfo">
                <div className="Date active">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
                <div className="Date">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
                <div className="Date">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
                <div className="Date">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
                <div className="Date">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
                <div className="Date">
                  <span>Thứ 2</span>
                  <span>02-01</span>
                </div>
              </div>
              <div className="scheduleDetail">
                <div className="duycontainer">
                  <div className="lefthand">
                    <h3>BHD Star 3.2</h3>
                    <p>
                      Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM
                    </p>
                  </div>
                  <div className="righthand">
                    <div className="D2">
                      <span className="version2D">2D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                    <div className="D3">
                      <span className="version3D">3D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                  </div>
                </div>
                <div className="duycontainer">
                  <div className="lefthand">
                    <h3>BHD Star 3.2</h3>
                    <p>
                      Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM
                    </p>
                  </div>
                  <div className="righthand">
                    <div className="D2">
                      <span className="version2D">2D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                    <div className="D3">
                      <span className="version3D">3D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                  </div>
                </div>
                <div className="duycontainer">
                  <div className="lefthand">
                    <h3>BHD Star 3.2</h3>
                    <p>
                      Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM
                    </p>
                  </div>
                  <div className="righthand">
                    <div className="D2">
                      <span className="version2D">2D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                    <div className="D3">
                      <span className="version3D">3D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                  </div>
                </div>
                <div className="duycontainer">
                  <div className="lefthand">
                    <h3>BHD Star 3.2</h3>
                    <p>
                      Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM
                    </p>
                  </div>
                  <div className="righthand">
                    <div className="D2">
                      <span className="version2D">2D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                    <div className="D3">
                      <span className="version3D">3D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                  </div>
                </div>
                <div className="duycontainer">
                  <div className="lefthand">
                    <h3>BHD Star 3.2</h3>
                    <p>
                      Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM
                    </p>
                  </div>
                  <div className="righthand">
                    <div className="D2">
                      <span className="version2D">2D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                    <div className="D3">
                      <span className="version3D">3D</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                      <span className="time">13:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="FilmRecommend">
            <h3 style={{ marginBottom: "20px" }}>Phim đang chiếu</h3>
            <div className="FilmContainerRe">
              <img src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131831-637908959110796170.jpg"></img>
              <div>
                <span className="age">13+</span>
                <p style={{ fontWeight: "bolder" }}>
                  Mèo Đi Hia: Điều Ước Cuối Cùng
                </p>
                <p
                  style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}
                >
                  Puss in Boots: The Last Wish
                </p>
                <p>8.5/10</p>
              </div>
            </div>
            <div className="FilmContainerRe">
              <img src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131831-637908959110796170.jpg"></img>
              <div>
                <span className="age">13+</span>
                <p style={{ fontWeight: "bolder" }}>
                  Mèo Đi Hia: Điều Ước Cuối Cùng
                </p>
                <p
                  style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}
                >
                  Puss in Boots: The Last Wish
                </p>
                <p>8.5/10</p>
              </div>
            </div>
            <div className="FilmContainerRe">
              <img src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131831-637908959110796170.jpg"></img>
              <div>
                <span className="age">13+</span>
                <p style={{ fontWeight: "bolder" }}>
                  Mèo Đi Hia: Điều Ước Cuối Cùng
                </p>
                <p
                  style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}
                >
                  Puss in Boots: The Last Wish
                </p>
                <p>8.5/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
