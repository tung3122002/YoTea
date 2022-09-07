
import React from "react";
import Slider from "react-slick";

const Banner = () => {
    // const { data: sliders } = useGetSlidersQuery("");

    var settings = {
        // dots: true,
    
        // slidesToShow: 1,
        // slidesToScroll: 1,
     
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        autoplay: true,
        infinite: true,
  
    }

    return (
        <section className="w-full">
       
            <Slider {...settings}>
             
                 
                     <img src="https://yotea.vn/wp-content/uploads/2019/04/banner-web-1024x360.png" alt="" />
                     <img src="https://yotea.vn/wp-content/uploads/2019/04/banner-web-1024x360.png" alt="" />
                     <img src="https://yotea.vn/wp-content/uploads/2019/04/banner-web-1024x360.png" alt="" />
            </Slider>
        
    </section>
    )
}

export default Banner;