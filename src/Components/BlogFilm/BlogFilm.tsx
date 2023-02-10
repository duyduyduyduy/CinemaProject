import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import eBlog from '../Model/eBlog'
import eFilm from '../Model/eFilm'
import eListBlogs from '../Model/eListBlogs'
import eListBlogTopView from '../Model/eListBlogTopView'
import './BlogFilm.scss'
import { useNavigate } from 'react-router-dom'

function BlogFilm(props: any) {
    const [blogData, setBlogData] = useState<Array<eBlog>>([])
    const [listBlogs, setListBlogs] = useState<Array<eListBlogs>>([])
    const [listBlogTopView, setListBlogTopView] = useState<Array<eListBlogTopView>>([])

    const [lsFilm, setLsFilm] = useState<Array<eFilm>>([])

    useEffect(() => {
        setLsFilm(props.CurrentFilmState.lsCurFilm)
    }, [props])

    const nav = useNavigate();
    const HandleClick = (id: string) => {
        nav("/Film/" + id);
    }

    // Handle Xem Thêm
    const [tmp, setTmp] = useState<number>(1);
    let a = 0, b = 0;
    // a là số lượng render ra mỗi lần nhấn Xem thêm, phần dư còn lại render lần cuối


    const assignVar = () => {
        a = Math.floor(listBlogs.length / 3);
        b = listBlogs.length - (3*Math.floor(listBlogs.length / 3));
        return false;
    }
    
    useEffect(() => {
        fetch('https://mocki.io/v1/9f78daae-b0b3-4e80-90e0-ff3472bbb055?fbclid=IwAR0P010WN0LeqCPU8cHHTXH3GadDuW3vt6cj_wH8XNT_ICc3TVWsZ_WcaDI')
            .then(res => res.json())
            .then((data) => {
                setBlogData(data.pageProps.dataBlog.Data.ListBlogFeatured.Items);
                setListBlogs(data.pageProps.dataBlog.Data.ListBlogs.Items);
                setListBlogTopView(data.pageProps.dataBlog.Data.ListBlogTopView.Items);
                }
            );
    }, [])
        
        
  return (
    <div className='BlogFilm'>
        <div className='mainSize'>
            <div className='titleContainer'>
                <h1>Blog Điện Ảnh</h1>
                <p>Theo dõi các bộ sưu tập bao gồm Review phim - Top phim hay của Ví MoMo 
                    luôn được cập nhật tại đây!</p>
            </div>

            
            <div className="ListBlogFeatured">
                <div className='top'>
                    {blogData?.map((item, index) => {
                        return (
                            index <= 1 && (
                                <div style={{backgroundImage: `url(${item.Avatar})`}}>
                                    <div className='viewPoint'>
                                        <span className='viewCont'>
                                            <i className="fa-sharp fa-solid fa-eye"></i>
                                            <span>{item.TotalViewsFormat}</span>
                                        </span>
                                    </div>
                                    <div className='content'>
                                        <h1>{item.Title}</h1>
                                        <p>{item.ShortContent.length > 100 ? item.ShortContent.slice(0, 200) + '...' : item.ShortContent}</p>
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
                <div className='bottom'>
                    {blogData?.map((item, index) => {
                        return (
                            index >=1 && (
                                <div style={{backgroundSize: 'cover', backgroundPosition: 'center',backgroundImage: `url(${item.Avatar})`}}>
                                    <div className='viewPointBot'>
                                        <span className='viewCont'>
                                            <i className="fa-sharp fa-solid fa-eye"></i>
                                            <span>{item.TotalViewsFormat}</span>
                                        </span>
                                    </div>
                                    <div className='content'>
                                        <h1>{item.Title}</h1>
                                        <p>{item.ShortContent.length > 100 ? item.ShortContent.slice(0, 200) + '...' : item.ShortContent}</p>
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>


            <div className='BodyContent'>
                {assignVar()}
                <div className='ListBlogs'>
                    {listBlogs?.map((item, index) => {
                        if (index < (tmp > a ? tmp*3 + b : tmp *3)) {
                            return (
                                <div className='BlogItem'>
                                    <div>
                                        <img src={item.Avatar} alt="Anh Vũ"/>
                                    </div>
                                    <div className='ItemInfo'>
                                        <h3>{item.CategoryChildName}</h3>
                                        <h4>{item.Title}</h4>
                                        <span className='viewCont'>
                                            <i className="fa-sharp fa-solid fa-eye"></i>
                                            <span>{item.TotalViewsFormat} lượt xem</span>
                                        </span>
                                        <p>{item.ShortContent.length > 200 ? item.ShortContent.slice(0, 150) + "..." : item.ShortContent}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div className='MoreContainer'>
                        {tmp <= a && a !== 0 && (
                            // <a onClick={() => setTmp(tmp + 1)}>Xem Thêm</a>
                            <button onClick={() => setTmp(tmp + 1)} className="btn-donate">
                                Xem Thêm
                            </button>
                        )}
                        {tmp > a && (
                            // <a onClick={() => setTmp(1)}>Thu Gọn</a>
                            <button onClick={() => setTmp(1)} className="btn-donate">
                                Thu Gọn
                            </button>
                        )}
                    </div>
                </div>

                <div className='ListBlogTopView'>
                    <h3>Xem nhiều nhất</h3>
                    <div className="TopViewContainer">
                        {listBlogTopView?.map((n, i) => {
                            return (
                                <div key={i} className="TopViewItem">
                                    <img src={n.Avatar} alt="Anh Vũ" />
                                    <div className='ItemInfo'>
                                        <h4>{n.CategoryChildName}</h4>
                                        <p>{n.Title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            

            <div className='FilmReContainer'>
                <div className='FilmReTitle'>
                    <h1>Top phim hay</h1>
                </div>
                <div className='Film1Container'>
                    {lsFilm?.map((item, index) => {
                        return (
                            index <= 4 && (
                                <div className='FilmReItem' style={{backgroundImage: `url(${item.imagePortrait})`}}>
                                    <div>
                                        <h2>
                                            <a onClick={() => HandleClick(item.id)} href="#">
                                                {item.name}
                                            </a>
                                        </h2>    
                                        {/* <a href={`/Film/${item.id}#FilmBanner`}></a> */}
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>

        </div>
        <div>
            
        </div>
        
        {/* <div className='BlackPopup'>
            <div className='PopupBlogFilm'>
                <h3>BlogFilm</h3>
            </div>
        </div> */}
    </div>
  )
}

const mapStateToProps = (state: any) => {
    return {
        CurrentFilmState: state.CurrentFilmState
    }
}




export default connect(mapStateToProps, null)(BlogFilm)