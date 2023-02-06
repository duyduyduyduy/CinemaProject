import React, { useEffect, useState } from 'react'
import eBlog from '../Model/eBlog'
import eListBlogs from '../Model/eListBlogs'
import './BlogFilm.scss'

export default function BlogFilm() {
    const [blogData, setBlogData] = useState<Array<eBlog>>([])
    const [listBlogs, setListBlogs] = useState<Array<eListBlogs>>([])

    useEffect(() => {
        fetch('https://mocki.io/v1/9f78daae-b0b3-4e80-90e0-ff3472bbb055?fbclid=IwAR0P010WN0LeqCPU8cHHTXH3GadDuW3vt6cj_wH8XNT_ICc3TVWsZ_WcaDI')
            .then(res => res.json())
            .then((data) => 
                setBlogData(data.pageProps.dataBlog.Data.ListBlogFeatured.Items)
            );
        fetch('https://mocki.io/v1/9f78daae-b0b3-4e80-90e0-ff3472bbb055?fbclid=IwAR0P010WN0LeqCPU8cHHTXH3GadDuW3vt6cj_wH8XNT_ICc3TVWsZ_WcaDI')
            .then(res => res.json())
            .then((data) => 
                setListBlogs(data.pageProps.dataBlog.Data.ListBlogs.Items)
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
                                        <p>{item.ShortContent}</p>
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
                                        <p>{item.ShortContent}</p>
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>



            <div className='BodyContent'>
                <div className='ListBlogs'>
                    {listBlogs?.map((item, index) => {
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
                    })}
                </div>

                <div className='FilmReContainer'>

                </div>
            </div>

        </div>
    </div>
  )
}
