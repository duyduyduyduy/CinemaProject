import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import eFilm from '../Model/eFilm'
import './PromotionHeader.scss'
import { useNavigate } from 'react-router-dom'

function PromotionHeader(props: any) {
    const [lsfilm, setLsFilm] = useState<Array<eFilm>>([])

    useEffect(() => {
        setLsFilm(props.CurrentFilmState.lsCurFilm)
    }, [props])

    const nav = useNavigate();
    const HandleClick = (id: string) => {
        nav("/Film/" + id);
    }




  return (
    <div className='PromotionHeader'>
        <div className="mainSize">
            <div className="PromotionContainer">
                <h2>KHUYẾN MÃI MỚI</h2>
                <div className='PromoCont'>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/d/o/doc.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/2019/1/4/300-x-450_1546584007533.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300x450_43.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300x450_132.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300_25.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/2/0/200_12.jpg  )', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a href="#">Chi Tiết</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className='FilmRecomment'>
                <h3>Phim đang chiếu</h3>
                <div className='FilmReContainer'>
                    {lsfilm?.map((item, index) => {
                        return (
                            index <= 3 && (
                                <div className='FilmReOver'>
                                    <div className='FilmReItem' style={{backgroundImage: `url(${item.imageLandscape})`}}>
                                        <div onClick={() => HandleClick(item.id)} className='TitleCon'>
                                            <h4>Muốn Gặp Anh</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })}
                    
                </div>
                <div className='More'>
                    <a  onClick={() => nav("/#Homepage1")} hrefLang="/#Homepage1">
                        Xem Thêm
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}


const mapStateToProps = (state: any) => {
    return {
        CurrentFilmState: state.CurrentFilmState
    }
}



export default connect(mapStateToProps, null)(PromotionHeader)
