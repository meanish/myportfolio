import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "../node_modules/swiper/react/swiper-react";

// Import Swiper styles
import "../node_modules/swiper/swiper.min.css";
import "../node_modules/swiper/modules/pagination/pagination";

import styled from "styled-components"
import "./styles/slider.css";

// import required modules
import { Navigation } from "swiper";

const Slider = ({ img }) => {
    return (
        <Wrapper>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    img.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className="img-container" key={index}><img src={item} alt="" /></div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Wrapper>

    );
}

const Wrapper = styled.div` 
;`

export default Slider;
