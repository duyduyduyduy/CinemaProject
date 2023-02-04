// import { url } from 'inspector'
import React from 'react'
import './BlogFilm.scss'

export default function BlogFilm() {
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
                    <div style={{backgroundImage: `url("https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg")`}}>
                        <div className='viewPoint'>
                            <span className='viewCont'>
                                <i className="fa-sharp fa-solid fa-eye"></i>
                                <span>182.2K</span>
                            </span>
                        </div>
                        <div className='content'>

                        </div>
                    </div>

                    <div style={{backgroundImage: `url("https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg")`}}>

                    </div>



                </div>

                <div className='bottom'>

                </div>
            </div>


        </div>
    </div>
  )
}
