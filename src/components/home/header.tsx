import React from 'react'
import { faBars, faCartArrowDown, faChevronRight, faClock, faEnvelope, faHeart, faMagnifyingGlass, faPhone, faShoppingCart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <section className="bg-[hsl(39,64%,59%)] w-full text-white">
        <div className="container  flex max-w-6xl mx-auto px-3 h-full  ">
          <div className=" flex leading-10">
            <div className=""><FontAwesomeIcon icon={faEnvelope} /> CONTACT <span className="border-r-2 m-3"></span></div>
            <div className=""><FontAwesomeIcon icon={faClock} /> 08:00 - 17:00 <span className="border-r-2 m-3"></span></div>
            <div className=""><FontAwesomeIcon icon={faPhone} /> 0978564220 <span className="border-r-2 m-3"></span></div>

          </div>
          <div className="flex col-8 flex-row-reverse leading-10">
            <div><FontAwesomeIcon icon={faCartArrowDown} /></div>
            <div><FontAwesomeIcon icon={faHeart} /><span className="border-r-2 m-3"></span></div>
            <div>Đăng ký <span className="border-r-2 m-3"></span></div>
            <div>Đăng nhập <span className="border-r-2 m-3"></span></div>
            <button className=''><FontAwesomeIcon icon={faMagnifyingGlass} /><span className="border-r-2 m-3"></span></button>


          </div>

        </div>

      </section>
      <div className={`md:h-24 h-[70px] bg-white `} id="header-bottom">
        <div className="container max-w-6xl mx-auto px-3 h-full ">
          <div className="border-b flex items-center h-full">
            <div className="flex-1 md:hidden">
              <button className="btn-toggle-nav cursor-pointer pr-3 py-3 text-lg transition duration-200 ease-linear text-gray-400 hover:text-black">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <ul className="flex-1 items-center hidden md:flex">
              <li className="menu__item pr-4 font-semibold text-gray-500 transition ease-linear duration-200  hover:text-black">
                <NavLink className="no-underline" to="/">Trang chủ</NavLink>
              </li>
              <li className="menu__item pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                <NavLink className="no-underline" to="/gioi-thieu">Giới thiệu</NavLink>
              </li>
              <li className="menu__item relative pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black group">
                <Link  to="/thuc-don" className="flex items-center no-underline">
                  Sản phẩm
                  <div className="pl-1 -mt-1">
                    <FontAwesomeIcon icon={faSortDown} />
                  </div>
                </Link>
                <ul className="z-20 invisible group-hover:visible absolute top-full left-0 bg-white shadow min-w-[150px] max-w-full grid grid-cols-1 divide-y px-2 rounded-sm">
                  {/* {categories?.map((item, index) => (
                                            <li key={index}>
                                                <Link to={`/danh-muc/${item.slug}`} className="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">{item.name}</Link>
                                            </li>
                                        ))} */}
                                        
                </ul>
                
              </li>
            </ul>
            <div className="h-full">
              <Link to="/" className="block h-full py-2">
                <img className="block h-full" src="https://res.cloudinary.com/levantuan/image/upload/v1642588847/fpoly/asm-js/logo_oeo8uq.png" alt="" />
              </Link>
            </div>
            <ul className="flex-1 justify-end hidden md:flex">
              <li className="menu__item pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                <NavLink className="no-underline" to="/tin-tuc">Tin tức</NavLink>
              </li>
              <li className="menu__item pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                <NavLink className="no-underline" to="/lien-he">Liên hệ</NavLink>
              </li>
              <li className="menu__item pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                <NavLink className="no-underline" to="/cua-hang">Cửa hàng</NavLink>
              </li>
            </ul>
            <ul className="flex flex-1 justify-end md:hidden">
              <li className="uppercase text-base cursor-pointer pl-6 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-black hover:opacity-100">
                <div className="relative">
                  <label className="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1"></label>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </li>
              <li className="uppercase text-base pl-4 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-black hover:opacity-100">
                <Link to="/gio-hang" className="relative">
                  <label className="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">
                    {/* {cart.length} */}
                  </label>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header