import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from "react";
import "./Header1.scss";
import eFilm from "../Model/eFilm";

function Header1(props: any) {
  const [filmModal, setFilmModal] = useState<Boolean>(false);
  const [eventModal, setEventModal] = useState<Boolean>(false)
  const [lsCurrentFilm, setLsCurrentFilm] = useState<Array<eFilm>>([]);
  const [lsSoonFilm, setLsSoonFilm] = useState<Array<eFilm>>([]);


  useEffect(() => {    
    setLsCurrentFilm(props.CurrentFilmState.lsCurFilm);
    setLsSoonFilm(props.NextFilmState.lsNextFilm);
  }, [props]);

  const nav = useNavigate();
  const HandleClickBuy = (id: string) => {
    nav("Film/" + id)
  }
  return (
    <div className="Header">
      <div className="mainSide">
        <img src={require("./Header1IMG/logo4.png")} alt="" />
        <div className="menu">
          <ul>
            <li>
              <a href="#">MUA VÉ</a>
            </li>
            <li className="film-li"
              onMouseEnter={() => setFilmModal(true)}
              onMouseLeave={() => setFilmModal(false)}
            >
              <a href="#"
                // onMouseEnter={() => setFilmModal(true)}
                // onMouseLeave={() => setFilmModal(false)}
              >PHIM</a>
              <i className="fa-solid fa-angle-down"></i>
              {/* FilmDropdown */}
              {
                filmModal && (
                  <div className="FilmDropdown">
                        {/* currentFilm */}
                    <div className="currentFilm">
                      <span>Phim đang chiếu</span>
                      <div className="currentFilmcontainer">
                        {lsCurrentFilm?.map((item, index) => {
                          return (
                            index <= 3 && (
                              <div onClick={() => HandleClickBuy(item.id)}>
                                <div>
                                  <img src={item.imageLandscape} alt="something" />
                                </div>
                                <p>
                                  {" "}
                                  {item.name.length > 35
                                    ? item.name.slice(0, 30) + "..." : item.name
                                  }
                                </p>
                              </div>                    
                            )
                          )
                        })}

                      </div>
                    </div>
                        {/* upcomingFilm */}
                    <div className="upcomingFilm currentFilm">
                      <span>Phim đang chiếu</span>
                      <div className="currentFilmcontainer">
                        {lsSoonFilm?.map((item, index) => {
                          return (
                            index <= 3 && (
                              <div onClick={() => HandleClickBuy(item.id)}>
                                <div>
                                  <img src={item.imageLandscape} alt="something" />
                                </div>
                                <p>
                                  {item.name.length > 35 ? item.name.slice(0, 30) + "...": item.name}
                                </p>
                              </div>
                            )
                          )
                        })}
                      </div>
                    </div>
                  </div>

                )
              }

            </li>
            <li>
              <a href="#">BLOG ĐIỆN ẢNH</a>
            </li>
            <li className="event-li"
              onMouseEnter={() => setEventModal(true)}
              onMouseLeave={() => setEventModal(false)}
            >
              <a href="#">SỰ KIỆN</a>
              <i className="fa-solid fa-angle-down"></i>
              {eventModal && (
                <div className="event">
                  <p>Ưu đãi</p>
                  <p>Phim hay tháng</p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="sign"></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState
  }
}

export default connect(mapStateToProps, null)(Header1)