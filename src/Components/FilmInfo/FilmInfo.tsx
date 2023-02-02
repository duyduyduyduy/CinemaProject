import React, { useEffect, useState } from "react";
import "./FilmInfo.scss";
import { useNavigate, useParams } from "react-router-dom";
import eFilm from "../Model/eFilm";
import eSchedule from "../Model/eSchedule";
import { connect } from "react-redux";
import eCity from "../Model/eCity";
import { url } from "inspector";
function FilmInfo(props: any) {
  const { id } = useParams();
  const [FilmInfo, setFilmInfo] = useState<Array<eFilm>>([]);
  const [FilmRe, setFilmRe] = useState<Array<eFilm>>([]);
  const [detaiSchedule, setSchedule] = useState<Array<eSchedule>>([]);
  const [IndexDate, setIndexDate] = useState<number>(0);
  const [city, setCity] = useState<Array<eCity>>([]);
  const [cinema, setCinema] = useState<Array<any>>([]);
  const [valueInut, setValueinput] = useState<string>("");
  const [popupCity, setPopUpCity] = useState<boolean>(false);
  const [popupCinema, setPopupCinema] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const [numTime, setNumTime] = useState<number>(0);
  const [lengthActor, setLengthActor] = useState<number>(0);
  const [lengthTime, setLengthTime] = useState<number>(0);
  const [lsActor, setLsActor] = useState<any>([]);
  const [CityObject, setCityObject] = useState<any>({
    cityID: "",
    name: "Cả Nước",
  });
  const [CinemaObject, setCinemaObject] = useState<any>({
    slug: "",
    name: "Tất cả các rạp",
  });
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/city"
    )
      .then((res) => res.json())
      .then((data) => setCity(data));
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/cinemas"
    )
      .then((res) => res.json())
      .then((data) => setCinema(data));
    fetch("https://mocki.io/v1/2603f90d-c4e7-4866-be66-3144003ca032")
      .then((res) => res.json())
      .then((data) => {
        setLengthActor(data.length);
        setLsActor(data);
      });
  }, []);
  useEffect(() => {
    setCinemaObject({
      slug: "",
      name: "Tất cả các rạp",
    });
  }, [CityObject]);
  useEffect(() => {
    setFilmRe(props.CurrentFilmState.lsCurFilm);
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/movie/" +
        id
    )
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
        setLengthTime(data[0]?.dates.length);
        setNum(0);
        setNumTime(0);
        setCityObject({ cityID: "", name: "Cả Nước" });
        setCinemaObject({ slug: "", name: "Tất cả các rạp" });
      });
  }, [id, props]);

  const ageClassName = (age: number) => {
    let result = "";
    if (age === 0) {
      result = "age_1";
    } else if (age === 13) {
      result = "age";
    } else if (age === 16) {
      result = "age_3";
    } else {
      result = "age_2";
    }
    return result;
  };

  useEffect(() => {
    console.log("Current data: ", props.CurrentFilmState);
    if (props.CurrentFilmState && props.NextFilmState) {
      let ObjectFilmInfo = props.CurrentFilmState.lsCurFilm?.filter(
        (n: eFilm) => n.id === id
      );
      if (!ObjectFilmInfo[0]) {
        ObjectFilmInfo = props.NextFilmState.lsNextFilm?.filter(
          (n: eFilm) => n.id === id
        );
      }
      if (ObjectFilmInfo) {
        setFilmInfo(ObjectFilmInfo);
      }
    }
  }, [id, props]);
  const nav = useNavigate();

  const handleOnclickMuaVe = (id: string) => {
    nav("/Film/" + id);
  };
  const SetCloseCity = () => {
    setPopUpCity(false);
    setValueinput("");
  };
  const handleOnClickActor = (a: number) => {
    let number =
      lengthActor % 6 === 0
        ? Math.floor(lengthActor / 6 - 1)
        : Math.floor(lengthActor / 6);
    if (num + a > number) {
      setNum(0);
    } else if (num + a < 0) {
      setNum(number);
    } else {
      setNum(num + a);
    }
  };
  const handleOnClickCity = (ObjectCity: any) => {
    setCityObject(ObjectCity);
    setPopUpCity(false);
  };
  const HandleOnClickCinema = (ObjectCinema: any) => {
    setCinemaObject(ObjectCinema);
    setPopupCinema(false);
  };
  const handleOnClickTime = (a: number) => {
    let number =
      lengthTime % 3 === 0
        ? Math.floor(lengthTime / 3 - 1)
        : Math.floor(lengthTime / 3);
    if (numTime + a > number) {
      setNumTime(0);
    } else if (numTime + a < 0) {
      setNumTime(number);
    } else {
      setNumTime(numTime + a);
    }
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      {/* Subhead */}
      <div className="subheadContainer">
        <div className="subheadMainSize">
          <i className="fa-solid fa-house" onClick={() => nav("/")}></i>
          <i className="fa-solid fa-angle-right"></i>
          <a
            href="/#section1Home"
            onClick={() => nav("/#section1Home")}
            className="phimchieusubhead"
          >
            <b>Phim chiếu</b>
          </a>
          <i className="fa-solid fa-angle-right"></i>
          <span style={{ color: "#737373", fontSize: "15px" }}>
            {FilmInfo[0]?.name}
          </span>
        </div>
      </div>

      {/* ---------------------------- */}
      {/* Phần banner của anh Vũ */}
      <div
        className="bannerContainer"
        id="FilmBanner"
        style={{
          backgroundImage: `url(${FilmInfo[0]?.imageLandscapeMobile})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlapbanner">
          <div>
            <img src={FilmInfo[0]?.imagePortrait} alt="" />
          </div>

          <div>
            <span className="age_3">16+</span>
            <h1 className="title">{FilmInfo[0]?.name}</h1>
            <h3>
              {FilmInfo[0]?.name} · 2002 · {FilmInfo[0]?.duration} phút
            </h3>

            <h2 className="nd-h2">Nội dung</h2>

            <p>
              Lấy bối cảnh sau hơn một thập kỷ kể từ phần phim đầu tiên, Avatar:
              Dòng Chảy Của Nước kể về câu chuyện của gia đình Sully (Jake,
              Neytiri, và con của họ), những vấn đề xung quanh họ, những nỗ lực
              để bảo vệ sự an toàn của gia đình, những cuộc chiến sinh tồn, và
              những hiểm họa mà họ phải đối mặt.
            </p>

            <div className="infoFilm">
              <p>
                <span className="nd-h2">Ngày chiếu</span>
                <span>
                  {FilmInfo[0]?.startdate.replace("T00:00:00.000Z", "")}
                </span>
              </p>

              <p>
                <span className="nd-h2">Thể loại</span>
                <span>Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động</span>
              </p>

              <p>
                <span className="nd-h2">Quốc gia</span>
                <span>Mỹ</span>
              </p>
            </div>

            <button className="btn-trailer">Xem trailer</button>
          </div>
        </div>
      </div>

      {/* ------------------------------ */}
      {/* Pop Up Cinema */}
      {popupCinema && (
        <div className="PopUpCinemaBg">
          <div className="PopUpCinemaBorder">
            <div className="buttonClose" onClick={() => setPopupCinema(false)}>
              <i className="fa-solid fa-x"></i>
            </div>
            <div className="popupcinemaMainsize">
              <div className="headerPopup">
                <h3>Chọn Rạp</h3>
              </div>
              <div className="contentofCinema">
                <div className="Cinema">
                  <span>{CinemaObject.name}</span>
                </div>
                {cinema &&
                  cinema
                    .filter((n) => n.cityId.includes(CityObject.cityID))
                    .map((item) => {
                      return (
                        <div
                          className="Cinema"
                          onClick={() =>
                            HandleOnClickCinema({
                              slug: item.slug,
                              name: item.name,
                            })
                          }
                        >
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* --------------------- */}

      {/* Pop Up City */}
      {popupCity && (
        <div className="popUpCityBg">
          <div className="PopupCityBorder">
            <div className="buttonClose">
              <i className="fa-solid fa-x" onClick={() => SetCloseCity()}></i>
            </div>
            <div className="popupcityMainsize">
              {" "}
              <div className="headerPopup">
                <h3>Chọn địa điểm</h3>
                <div className="InputContainerCity">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    placeholder="Tìm địa điểm"
                    onChange={(event) => setValueinput(event?.target.value)}
                  ></input>
                </div>
              </div>
              <div className="contentofCity">
                <div
                  className="City"
                  onClick={() =>
                    handleOnClickCity({ cityID: "", name: "Cả Nước" })
                  }
                >
                  <span>Cả Nước</span>
                </div>
                {city &&
                  city
                    .filter((n) =>
                      n.name.toLowerCase().includes(valueInut.toLowerCase())
                    )
                    .map((item) => {
                      return (
                        <div
                          className="City"
                          onClick={() =>
                            handleOnClickCity({
                              cityID: item.id,
                              name: item.name,
                            })
                          }
                        >
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="scheduleMainsize">
        <div className="titleandlocation" id="titleandschedule">
          <div className="Duy">
            <div className="titleFilm">
              <p>
                Lịch chiếu{" "}
                {FilmInfo[0]?.name.length > 35
                  ? FilmInfo[0]?.name.slice(0, 35) + " ... "
                  : FilmInfo[0]?.name}
              </p>
            </div>
            <div>
              <div className="locationCity">
                <p onClick={() => setPopUpCity(true)}>
                  <i className="fa-solid fa-location-dot"></i> {CityObject.name}
                  <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div
                className="cinemalocation"
                onClick={() => setPopupCinema(true)}
              >
                <p>
                  {CinemaObject.name}
                  <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="dateInfoContainer">
            <a className="prevbuttonTime" onClick={() => handleOnClickTime(-1)}>
              ❮
            </a>
            <a className="nextbuttonTime" onClick={() => handleOnClickTime(1)}>
              ❯
            </a>
            <div
              className="dateInfo"
              style={{ marginLeft: `${numTime * 3 * 250 * -1}px` }}
            >
              {detaiSchedule[0]?.dates?.map((item, index) => {
                return (
                  <div
                    className={index === IndexDate ? "Date active" : "Date"}
                    onClick={() => setIndexDate(index)}
                  >
                    <span>{item?.dayOfWeekLabel}</span>
                    <span>{item?.showDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="scheduleInfo">
            <div className="scheduleDetail">
              {detaiSchedule
                ?.filter((n) => n.slug.includes(CinemaObject.slug))
                .filter((n) => n.cityId.includes(CityObject.cityID))
                .map((item) => {
                  return (
                    <div className="duycontainer">
                      <div className="lefthand">
                        <h3>{item?.name}</h3>
                        <p>{item?.address}</p>
                      </div>
                      <div className="righthand">
                        {item?.dates[IndexDate]?.bundles[0]?.version && (
                          <div className="D2">
                            <span className="version2D">
                              {item?.dates[
                                IndexDate
                              ]?.bundles[0]?.version.toUpperCase()}
                            </span>
                            {item?.dates[IndexDate]?.bundles[0]?.sessions.map(
                              (d) => {
                                return (
                                  <span className="time">{d.showTime}</span>
                                );
                              }
                            )}
                          </div>
                        )}
                        {item?.dates[IndexDate]?.bundles[1] && (
                          <div className="D3">
                            <span className="version3D">
                              {item?.dates[
                                IndexDate
                              ]?.bundles[1]?.version.toUpperCase()}
                            </span>
                            {item?.dates[IndexDate]?.bundles[1]?.sessions.map(
                              (d) => {
                                return (
                                  <span className="time">{d.showTime}</span>
                                );
                              }
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <h3
            style={{ marginTop: "30px", fontSize: "20px" }}
            className="ActorFilmTitle"
          >
            Diễn viên
          </h3>
          <div className="ActorFilmContainer">
            <a
              className="prevbuttonActor"
              onClick={() => handleOnClickActor(-1)}
            >
              ❮
            </a>
            <a
              className="nextbuttonActor"
              onClick={() => handleOnClickActor(1)}
            >
              ❯
            </a>
            <div
              className={`slideActor`}
              style={{ marginLeft: `${num * 6 * 130 * -1}px` }}
            >
              {lsActor?.map((item: any, index: any) => {
                return (
                  <div>
                    <img src={item.imgsrc}></img>
                    <p style={{ fontSize: "14px" }}>{item.name}</p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgb(66, 66, 66)",
                        textAlign: "center",
                      }}
                    >
                      Cady
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <h3
            style={{ marginTop: "30px", fontSize: "20px" }}
            className="BlogFilmTitle"
          >
            Blog phim
          </h3>
          <div className="BlogFilmContainer">
            <div className="Blog">
              <img
                alt="Bùi Thanh Duy"
                src="https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg"
              />
              <p className="titleBlog">
                One Piece: RED - Siêu phẩm anime không thể bỏ lỡ năm 2022
              </p>
              <p className="blogView">9.2k lượt xem</p>
            </div>
            <div className="Blog">
              <img
                alt="Bùi Thanh Duy"
                src="https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg"
              />
              <p className="titleBlog">
                One Piece: RED - Siêu phẩm anime không thể bỏ lỡ năm 2022
              </p>
              <p className="blogView">9.2k lượt xem</p>
            </div>
            <div className="Blog">
              <img
                alt="Bùi Thanh Duy"
                src="https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg"
              />
              <p className="titleBlog">
                One Piece: RED - Siêu phẩm anime không thể bỏ lỡ năm 2022
              </p>
              <p className="blogView">9.2k lượt xem</p>
            </div>
            <div className="Blog">
              <img
                alt="Bùi Thanh Duy"
                src="https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg"
              />
              <p className="titleBlog">
                One Piece: RED - Siêu phẩm anime không thể bỏ lỡ năm 2022
              </p>
              <p className="blogView">9.2k lượt xem</p>
            </div>
          </div>
        </div>
        <div className="FilmRecommend">
          <h3 className="titleFilmNow" style={{ marginBottom: "20px" }}>
            Phim đang chiếu
          </h3>
          {FilmRe?.map((item, index) => {
            return (
              index <= 4 && (
                <div className="FilmContainerRe">
                  <a
                    href={`/Film/${item.id}#FilmBanner`}
                    onClick={() => handleOnclickMuaVe(item.id)}
                  >
                    <img src={item.imagePortrait} alt="fjdlkjfkl"></img>
                  </a>
                  <div>
                    <span className={ageClassName(parseInt(item.age))}>
                      {item.age === "0" ? "P" : item.age + " +"}
                    </span>
                    <p style={{ fontWeight: "bolder" }}>
                      {item.name?.length > 25
                        ? item.name.slice(0, 25) + " ..."
                        : item.name}
                    </p>
                    <p
                      style={{
                        color: "rgb(134, 134, 134)",
                        fontWeight: "bolder",
                      }}
                    >
                      {item.subName?.length > 25
                        ? item.subName.slice(0, 25) + " ..."
                        : item.subName}
                    </p>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <img
                        className="star"
                        style={{ width: "20px", marginRight: "4px" }}
                        alt="fhjkdshfjkshjk"
                        src="https://www.galaxycine.vn/website/images/ic_star_yellow.png"
                      />
                      {parseFloat(item.point.toString()).toFixed(1)}/10
                    </p>
                  </div>
                </div>
              )
            );
          })}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="/#section1Home"
              onClick={() => nav("/#section1Home")}
              className="moreButtoninRe"
              style={{
                padding: "5px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Xem thêm<i className="fa-solid fa-arrow-right"></i>
            </a>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
