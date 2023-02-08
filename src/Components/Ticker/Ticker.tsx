import React from 'react'
import './Ticker.scss'

export default function Ticker() {
    const num = 90000;
  return (
    <div className='Ticker'> 
        <div className='mainSize'>
            <div className="TickerContainer">
                <h1>CHỌN VÉ/THỨC ĂN</h1>
                <div className='FullTable'>
                    <table  className='tableTop'>
                        <thead>
                            <tr>
                                <th className='tbth1'>Loại vé</th>
                                <th className='tbth2'>Số lượng</th>
                                <th className='tbth3'>Giá(VNĐ)</th>
                                <th className='tbth4'>Tổng(VNĐ)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <b>Người Lợn</b>
                                    <p>Vé 2D</p>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" />
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>80000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Người Lợn - Member</b>
                                    <p>Vé 2D-áp dụng khách hàng thành viên</p>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" />
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>80000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>GHE DOI</b>
                                    <p>Vé ghế đôi (bao gồm 2 vé)</p>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" />
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>170,000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>

                            <tr className='total' style={{color: 'orangered', fontSize: '18px', fontWeight: 'bolder'}}>
                                <td colSpan={3}>Tổng</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* ----------------------------------------------------------------- */}
                    <table  className='tableTop'>
                        <thead>
                            <tr>
                                <th className='tbth1'>Combo</th>
                                <th className='tbth2'>Số lượng</th>
                                <th className='tbth3'>Giá(VNĐ)</th>
                                <th className='tbth4'>Tổng(VNĐ)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td style={{display: 'flex'}}>
                                    <img src="https://www.galaxycine.vn/media/2023/2/1/combo1-1617790472299_1675215607802.jpg" width={'100px'} alt="" />
                                    <div className='comboContainer'>
                                        <b>iCombo 1 Big HB Standard</b>
                                        <p>1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</p>
                                    </div>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" value={'0'}/>
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>80,000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                            <tr>
                                <td style={{display: 'flex'}}>
                                    <img src="https://www.galaxycine.vn/media/2023/2/1/combo1-1617790472299_1675215607802.jpg" width={'100px'} alt="" />
                                    <div className='comboContainer'>
                                        <b>iCombo 1 Big HB Standard</b>
                                        <p>1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</p>
                                    </div>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" value={'0'}/>
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>80,000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                            <tr>
                                <td style={{display: 'flex'}}>
                                    <img src="https://www.galaxycine.vn/media/2023/2/1/combo1-1617790472299_1675215607802.jpg" width={'100px'} alt="" />
                                    <div className='comboContainer'>
                                        <b>iCombo 1 Big HB Standard</b>
                                        <p>1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</p>
                                    </div>
                                </td>
                                <td className='tdSoLuong'>
                                    <div>
                                        <span>
                                            <button>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </button>
                                        </span>
                                        <input type="text" value={'0'}/>
                                        <span>
                                            <button>
                                            <i className="fa-solid fa-circle-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>

                                <td style={{textAlign: 'end'}}>170,000</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>

                            <tr className='total' style={{color: 'orangered', fontSize: '18px', fontWeight: 'bolder'}}>
                                <td colSpan={3}>Tổng</td>
                                <td style={{textAlign: 'end'}}>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='infoFilm'>
                <div className='ImgContainer'>
                    <img src="https://cdn.galaxycine.vn/media/2023/1/14/nha-ba-nu-2_1673711236093.jpg" alt="" />
                    <h3>NHÀ BÀ NỮ</h3>

                </div>
                <div className='infoContainer'>
                    <div className='warning'>
                        <span className='spanWar'>C16</span>
                        <span> (*) Phim chỉ dành cho khán giả từ 16 tuổi trở lên</span>
                    </div>
                </div>
                <div className='RapInfo'>
                    <div>
                        <b>Rạp:</b>
                        <span>Galaxy Nguyễn Du |RAP 1</span>
                    </div>
                    <div>
                        <b>Suất chiếu:</b>
                        <span>19:15 | Thứ tư, 08/02/2023</span>
                    </div>
                    <div>
                        <b>Combo:</b>
                        <span></span>
                    </div>
                    <div>
                        <b>Ghế:</b>
                        <span></span>
                    </div>
                </div>
                <div className='TotalRender'>
                    <b>Tổng:</b>
                    <span>0 VNĐ</span>
                </div>
                <div className='totalEnd'>
                    <button>TIẾP TỤC <i className="fa-solid fa-arrow-right-long"></i>
</button>
                </div>  
            </div>
        </div>
    </div>
  )
}
