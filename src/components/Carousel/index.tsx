import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import GrayhorseTrans1 from "./../../assets/GrayhorseTrans1.png";

import Vectorleft from "./../../assets/Vectorleft.png";
import Vectorright from "./../../assets/Vectorright.png";

import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
interface propStyle {
    pos?: [number, number];
}
const CarouselStyle = styled.div<propStyle>`
    position: relative;
    max-width: 991px;
    z-index: 10 !important;
    /* overflow: hidden !important; */
    margin: 0 auto;
    .swiper-button-prev {
        background: #ff8b02 !important;
        width: 84px !important;
        height: 84px !important;
        border-radius: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% auto !important;
        background-position: center !important;
    }
    .swiper-button-prev::before {
        content: "";
        background: url(${Vectorleft}) !important;
        background-repeat: no-repeat !important;
        background-size: 100% auto !important;
        background-position: center !important;
        width: 39px !important;
        height: 35px !important;
    }
    .swiper-button-prev::after {
        display: none !important;
    }
    .swiper-button-next {
        background: #ff8b02 !important;
        width: 84px !important;
        height: 84px !important;
        border-radius: 100%;
        background-repeat: no-repeat !important;
        background-size: 100% auto !important;
        background-position: center !important;
    }
    .swiper-button-next::before {
        content: "";
        background: url(${Vectorright}) !important;
        background-repeat: no-repeat !important;
        background-size: 100% auto !important;
        background-position: center !important;
        width: 39px !important;
        height: 35px !important;
    }
    .swiper-button-next::after {
        display: none !important;
    }
`;

const Carousel = (props: any) => {
    SwiperCore.use([Navigation]);

    return (
        <CarouselStyle>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <img src={GrayhorseTrans1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GrayhorseTrans1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={GrayhorseTrans1} alt="" />
                </SwiperSlide>
            </Swiper>
        </CarouselStyle>
    );
};

Carousel.propTypes = {};

export default Carousel;
