import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const HomeNews = (props: Props) => {
    return (
        <>
            <section className="bg-[#EFE8DE] py-9">
                <div className="container max-w-6xl mx-auto px-3">
                    <h3>
                        <a href="" className="uppercase text-center block text-[#D9A953] text-2xl font-semibold">TIN TỨC - KHUYẾN MÃI</a>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                        <div className=" bg-white rounded-xl shadow px-3 py-2 border-solid border-2">
                            <img src="https://yotea.vn/wp-content/uploads/2020/01/91cc0626388ec1d0989f-300x225.jpg" alt="" />
                            <p className="text-sm text-gray-500">3 Tháng 4, 2022</p>
                            <p>
                                YoTea Tưng Bừng Chào Đón 2 Cơ Sở Mới Tại VinCom Thái Hòa và Big C Nam Định vào ngày cuối năm 2019
                            </p>
                            <Link to={`/bai-viet/`}>
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                        <div className=" bg-white rounded-xl shadow px-3 py-2 border-solid border-2">
                            <img src="https://yotea.vn/wp-content/uploads/2020/01/91cc0626388ec1d0989f-300x225.jpg" alt="" />
                            <p className="text-sm text-gray-500">3 Tháng 4, 2022</p>
                            <p>
                                YoTea Tưng Bừng Chào Đón 2 Cơ Sở Mới Tại VinCom Thái Hòa và Big C Nam Định vào ngày cuối năm 2019
                            </p>
                            <Link to={`/bai-viet/`}>
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                        <div className=" bg-white rounded-xl shadow px-3 py-2 border-solid border-2">
                            <img src="https://yotea.vn/wp-content/uploads/2020/01/91cc0626388ec1d0989f-300x225.jpg" alt="" />
                            <p className="text-sm text-gray-500">3 Tháng 4, 2022</p>
                            <p>
                                YoTea Tưng Bừng Chào Đón 2 Cơ Sở Mới Tại VinCom Thái Hòa và Big C Nam Định vào ngày cuối năm 2019
                            </p>
                            <Link to={`/bai-viet/`}>
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                        <div className=" bg-white rounded-xl shadow px-3 py-2 border-solid border-2">
                            <img src="https://yotea.vn/wp-content/uploads/2020/01/91cc0626388ec1d0989f-300x225.jpg" alt="" />
                            <p className="text-sm text-gray-500">3 Tháng 4, 2022</p>
                            <p>
                                YoTea Tưng Bừng Chào Đón 2 Cơ Sở Mới Tại VinCom Thái Hòa và Big C Nam Định vào ngày cuối năm 2019
                            </p>
                            <Link to={`/bai-viet/`}>
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeNews