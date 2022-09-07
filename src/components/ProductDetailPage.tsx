import { faExpandArrowsAlt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { Product } from '../types/Product'

type Props = {}

const ProductDetailPage = (props: Props) => {
    const { id } = useParams();
    const [product, setproduct] = useState<Product>()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setproduct(data)
        };
        getProduct();
    }, [])
    return (
        <div>
            <div className="container row max-w-6xl mx-auto px-3  ">
                <div
                    className="  col-8  bg-contain bg-center bg-no-repeat "

                >
                    <img className="w-96 mx-auto" src={product?.img} alt="" />
                </div>

                <div className="col-4  ">
                    <div className="flex">
                        <Link to="/" className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm block pr-4 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-[1px] after:h-3 after:rotate-12 after:bg-gray-400">Home</Link>
                        <Link to={`/danh-muc/${product?.category._id}`} className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm">{product?.category}</Link>
                    </div>
                    <h1 className="font-semibold text-[28px] text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">{product?.name}</h1>
                    <ul className="flex items-center mt-4">
                                <li className="flex text-yellow-400 text-xs pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                   <FontAwesomeIcon icon={faStar}/>
                                   <FontAwesomeIcon icon={faStar}/>
                                   <FontAwesomeIcon icon={faStar}/>
                                   <FontAwesomeIcon icon={faStar}/>
                                   <FontAwesomeIcon icon={faStar}/>
                                </li>
                                <li className="pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4"> Đánh giá</li>
                                <li>10 Đã bán</li>
                            </ul>
                            <div className="mt-1 my-2">
                                <span className="text-3xl text-[#D9A953] font-semibold">{(product?.price )}.000 VND</span>
                                
                            </div>
                            <button className="ml-2 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailPage