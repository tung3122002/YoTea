import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../../api/product'
import { Product } from '../../types/Product'
// type Props = {
//     product: Product[];
// }

const HomeProducts = () => {
    const [products, setProducts]= useState<Product[]>() 
    
    useEffect(()=>{
      const getProducts= async ()=>{
        const {data}= await list()
        setProducts(data)
        
      };
      getProducts()
   },[]);
    return (
        <>
            <section className="container max-w-6xl mx-auto py-9 px-3">
                <h3>
                    <a href="" className="uppercase no-underline text-center block text-[#D9A953] text-2xl font-semibold">SẢN PHẨM NỔI BẬT</a>
                </h3>
                <div className="container max-w-6xl mx-auto px-3 grid grid-cols-2 md:grid-cols-4 gap-3">


                  

                    {products?.map((items) =>(
                        
                            <div className="group" >
                        <div className="relative bg-[#f7f7f7] overflow-hidden">
                            <img src={items.img} alt="" />
                            <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button

                                className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100"
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                        <div className="text-center py-3">
                            <p className="uppercase text-xs text-gray-400">{}</p>
                            <Link to={`/san-pham/${items._id}`} className="block font-semibold text-lg">{items.name}</Link>
                            <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />

                            </ul>
                            <div className="text-sm pt-1"></div>
                        </div>
                    </div> 
                    ))}
                </div>  </section>
        </>
    )
}

export default HomeProducts