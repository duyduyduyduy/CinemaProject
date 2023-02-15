import React from 'react'
import './InfoTicker.scss'

export default function InfoTicker() {
  return (
    <div className='InfoTicker'>
        <div className='mainSize'>
            <div className="subheader">
                <i style={{color: 'black'}} className="fa-solid fa-house"></i>
                <i className="fa-solid fa-angle-right"></i>
                <span>Thành viên</span>
                <i className="fa-solid fa-angle-right"></i>
                <span>Giao dịch</span>
            </div>

            <div className='menuInfo'>
                {/* <span>THÔNG TIN THÀNH VIÊN</span> */}
                <span>GIAO DỊCH CỦA TÔI</span>
                {/* <span>GIAO DỊCH ĐỔI VUI</span> */}
            </div>
        </div>



        <div className="mainSizeMini">
            <div className='TickerContainer'>
                <div className="TickerItem">
                    <div className='infLeft'>
                        <h3>Ant-Man And The Wasp: Quantumania</h3>
                        <h4>CinemaName: Galaxy Nguyễn Du</h4>
                        <h4>ExpireDate: 04-2023</h4>
                        <h4>ShowTime: 2023-02-16 19:00</h4>
                        <h4>Combo: iCombo Friends 1 Big 1 BẮP + 3 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</h4>
                        <h5><i className="fa-solid fa-ticket"></i> 1001-185582</h5>
                    </div>
                    <div className='infRight'>
                        <span><i className="fa-solid fa-sack-dollar"></i> 70.000VNĐ</span>
                    </div>
                </div>
                <div className="TickerItem">
                    <div className='infLeft'>
                        <h3>Ant-Man And The Wasp: Quantumania</h3>
                        <h4>CinemaName: Galaxy Nguyễn Du</h4>
                        <h4>ExpireDate: 04-2023</h4>
                        <h4>ShowTime: 2023-02-16 19:00</h4>
                        <h4>Combo: iCombo Friends 1 Big 1 BẮP + 3 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</h4>
                        <h5><i className="fa-solid fa-ticket"></i> 1001-185582</h5>
                    </div>
                    <div className='infRight'>
                        <span><i className="fa-solid fa-sack-dollar"></i> 70.000VNĐ</span>
                    </div>
                </div>
                <div className="TickerItem">
                    <div className='infLeft'>
                        <h3>Ant-Man And The Wasp: Quantumania</h3>
                        <h4>CinemaName: Galaxy Nguyễn Du</h4>
                        <h4>ExpireDate: 04-2023</h4>
                        <h4>ShowTime: 2023-02-16 19:00</h4>
                        <h4>Combo: iCombo Friends 1 Big 1 BẮP + 3 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</h4>
                        <h5><i className="fa-solid fa-ticket"></i> 1001-185582</h5>
                    </div>
                    <div className='infRight'>
                        <span><i className="fa-solid fa-sack-dollar"></i> 70.000VNĐ</span>
                    </div>
                </div>
                <div className="TickerItem">
                    <div className='infLeft'>
                        <h3>Ant-Man And The Wasp: Quantumania</h3>
                        <h4>CinemaName: Galaxy Nguyễn Du</h4>
                        <h4>ExpireDate: 04-2023</h4>
                        <h4>ShowTime: 2023-02-16 19:00</h4>
                        <h4>Combo: iCombo Friends 1 Big 1 BẮP + 3 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK</h4>
                        <h5><i className="fa-solid fa-ticket"></i> 1001-185582</h5>
                    </div>
                    <div className='infRight'>
                        <span><i className="fa-solid fa-sack-dollar"></i> 70.000VNĐ</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
