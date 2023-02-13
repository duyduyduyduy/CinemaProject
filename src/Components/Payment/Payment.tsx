import React from 'react'
import './Payment.scss'

export default function Payment() {
  return (
    <div className='Payment'>
        <div className="mainSize">
            <div className='PaymentContainer'>
                <div className='title'>
                    <h1>VUI LÒNG THANH TOÁN</h1>
                    <span>18:20</span>
                </div>

                <div className='contentContainer'>
                    
                    <div className='intContainer'>
                        <span>Hình thức thanh toán</span>
                        <select name="Chọn Loại Thẻ">
                            <option value="#">Ví Điện Tử Momo</option>
                            <option value="#">ZaloPay: Bạn mới 9k/vé</option>
                            <option value="#">VNPay</option>
                            <option value="#">HSBC/Payoo - ATM/VISA/MASTER/JCB/QRCODE</option>
                            <option value="#">Ví ShopeePay (Nhập SPPCINEEU trên ví giảm 30k)</option>
                        </select>
                    </div>

                    <div className='intContainer'>
                        <span>Họ và Tên</span>
                        <input type="text" value={'Hoàng Anh Vũ'}/>
                    </div>
                    <div className='intContainer'>
                        <span>Email</span>
                        <input type="text" value={'hoanganhvu999444@gmail.com'}/>
                    </div>
                    <div className='intContainer'>
                        <span>Số điện thoại</span>
                        <input type="text" value={'0586788115'}/>
                    </div>
                    <div className='intContainer'>
                        <span>Mã giảm giá</span>
                        <input type="text" placeholder='Mã giảm giá'/>
                    </div>

                    <div className='FooterPayment'>
                        <div className='mainSizeFooter'>
                            <a className='apdung' href="#">ÁP DỤNG</a>
                            <span>(*) Bằng việc click/chạm vào THANH TOÁN, bạn đã xác 
                                nhận hiểu rõ các <b>Quy Định Giao Dịch Trực Tuyến </b> 
                                 của Galaxy Cinema.
                            </span>
                            <div>
                                <a href="#">Quay Lại</a>
                                <a href="#">Thanh Toán</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>











            <div className='InfoFilmContainer'></div>
        </div>
    </div>
  )
}
