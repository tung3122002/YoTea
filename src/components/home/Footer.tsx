import { faChevronUp, faCodeMerge, faEnvelope, faFaceAngry, faHome, faLayerGroup, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    
    <footer style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1642602939/fpoly/asm-js/bg_footer_r0omu5.jpg)'}} className="bg-cover bg-center bg-no-repeat py-14">
                <div className="container max-w-6xl mx-auto px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">KẾT NỐI VỚI CHÚNG TÔI</h3>
                            <p className="text-gray-300 text-justify"> Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee </p>
                            <ul className="flex text-white">
                                <li className="mr-3 mt-3">
                                    <a href="https://www.facebook.com/LeVanTuan.Info/" target="_blank">
                                        <FontAwesomeIcon icon={faCodeMerge} />
                                    </a>
                                </li>
                                <li className="mr-3 mt-3">
                                    <a href="https://www.youtube.com/c/L%C3%AAV%C4%83nTu%C3%A2n02/" target="_blank">
                                        <FontAwesomeIcon icon={faLayerGroup} />
                                    </a>
                                </li>
                                <li className="mr-3 mt-3">
                                    <a href="https://www.instagram.com/_tuan02/" target="_blank">
                                        <FontAwesomeIcon icon={faLayerGroup} />
                                    </a>
                                </li>
                                <li className="mr-3 mt-3">
                                    <a href="https://www.tiktok.com/@tuandemo" target="_blank">
                                        <FontAwesomeIcon icon={faLayerGroup} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">Liên hệ</h3>
                            <ul className="text-white leading-relaxed">
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div> Nga Sơn ,Thanh Hóa
                                </li>
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </div> Hotline: <a className="no-underline text-white" href="tel:0347247244">&nbsp; 0978564220</a>
                                </li>
                                <li className="flex ">
                                    <div className="min-w-[25px] no-underline">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div> Email: <a className="no-underline text-white" href="mailto:tung3122002@gmail.com">&nbsp; tung3122002@gmail.com</a>
                                </li>
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faFaceAngry} />
                                    </div> Facebook: <a className="no-underline text-white" href="https://www.facebook.com/tung3122002.Info/" target="_blank">&nbsp; Trần Ngọc Tùng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">Kết nối với chúng tôi</h3>

                            <div className="fb-page" data-href="https://www.facebook.com/fpt.poly" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/fpt.poly" className="fb-xfbml-parse-ignore">
                                    <a className="no-underline text-white" href="https://www.facebook.com/fpt.poly">Cao đẳng FPT Polytechnic</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-300 mt-9"> Copyright 2022 © <strong> Bản quyền thuộc về <a className="no-underline text-white" href="https://www.facebook.com/tung3122002.Info/" target="_blank">Trần Ngọc Tùng</a>
                        </strong>
                    </div>
                </div>

                <button
                    // onClick={handleScrollTop}
                    // className={`${visible && "active" } btn__scroll-top invisible w-9 h-9 rounded-full border-2 border-gray-400 text-gray-400 fixed right-5 bottom-3 transition-all ease-linear duration-400 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]`}
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </footer>
    </>
  )
}

export default Footer