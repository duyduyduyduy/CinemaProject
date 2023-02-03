import React from 'react'
import './Header1.scss'

export default function Header1() {
  return (
    <div className='Header'>
        <div className='mainSide'>
            <img src={require('./Header1IMG/CinemaLogo.png')} alt="" />
            <div className="menu">
                <ul>
                    <li><a href="#">MUA VÉ</a></li>
                    <li>
                        <a href="#">PHIM</a>
                        <i className="fa-solid fa-angle-down"></i>
                    </li>
                    <li><a href="#">BLOG ĐIỆN ẢNH</a></li>
                    <li>
                        <a href="#">SỰ KIỆN</a>
                        <i className="fa-solid fa-angle-down"></i>
                    </li>
                </ul>
            </div>

            <div className="sign">
                
            </div>
        </div>
    </div>
  )
}
