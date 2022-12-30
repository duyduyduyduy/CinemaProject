import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className='Header'>
        <div className="mainSide">
            <div className="menuLeft">
                <ul>
                    <li><a href='#'>MUA VÉ</a></li>
                    <li><a href='#'>PHIM</a></li>
                    <li><a href='#'>SỰ KIỆN</a></li>
                    <li><a href='#'>RẠP/GIÁ VÉ</a></li>
                    <li><a href='#'>HỖ TRỢ</a></li>
                    <li><a href='#'>THÀNH VIÊN</a></li>
                </ul>
            </div>






            <div className="logo">
                <p><img src={require('./HeaderIMG/6.png')} alt="" /></p>
            </div>

            <div className="menuRight">
                <div className="menuCon">
                    <div className="Social">
                        <img src={require('./HeaderIMG/icon_in.png')} alt="" />
                        <img src={require('./HeaderIMG/icon_tiktok.png')} alt="" />
                        <img src={require('./HeaderIMG/icon_YT.png')} alt="" />
                        <img src={require('./HeaderIMG/icon_fb.png')} alt="" />
                    </div>
                    <div className="Log">
                        <h3>Đăng Nhập</h3>
                        <h3>Đăng Ký</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
