import React from "react";
import "./FilmInfo.scss";
import { useParams } from "react-router-dom";
export default function FilmInfo() {
  const { id } = useParams();
  const consoleLog = () => {
    console.log("ID:", id);
    return false;
  };
  return (
    <>
      <div className="bannerContainer">
        {consoleLog()}
        <div className="overlapbanner">
          <div>
            <img
              alt="Bùi Thanh Duy"
              src="https://cdn.galaxycine.vn/media/2022/12/7/1200x1800_1670397246643.jpg"
            />
          </div>
          <div>
            <h1>Puss In Boots: The Last Wish</h1>
            <h3
              style={{
                color: "#bdbdbd",
                marginBottom: "20px",
                fontWeight: "bolder",
              }}
            >
              Avatar: The Way of Water · 2022 · 190 phút
            </h3>
            <p
              style={{
                color: "#bdbdbd",
                marginBottom: "20px",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "bolder",
              }}
            >
              Kẻ thù trở lại trong hình dạng mới!
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                marginBottom: "20px",
              }}
            >
              Nội dung
            </p>
            <p
              style={{
                color: "#bdbdbd",
                fontWeight: "bolder",
                marginBottom: "20px",
              }}
            >
              Lấy bối cảnh sau hơn một thập kỷ kể từ phần phim đầu tiên, Avatar:
              Dòng Chảy Của Nước kể về câu chuyện của gia đình Sully (Jake,
              Neytiri, và con của họ), những vấn đề xung quanh họ, những nỗ lực
              để bảo vệ sự an toàn của gia đình, những cuộc chiến sinh tồn, và
              những hiểm họa mà họ phải đối mặt.
            </p>
            <div>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#bdbdbd" }}>Ngày chiếu</span>
                <span>15/12/2022</span>
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#bdbdbd" }}>Thể loại</span>
                <span>Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động</span>
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#bdbdbd" }}>Quốc gia</span>
                <span>Mỹ</span>
              </p>
            </div>
            <button className="trailerButton">Xem trailer</button>
          </div>
        </div>
      </div>
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
              <p style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}>
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
              <p style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}>
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
              <p style={{ color: "rgb(134, 134, 134)", fontWeight: "bolder" }}>
                Puss in Boots: The Last Wish
              </p>
              <p>8.5/10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
