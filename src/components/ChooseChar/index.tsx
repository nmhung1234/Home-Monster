import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import top from "./../../assets/top.png";
import flareHighLight from "./../../assets/flarehighlight.png";
import arrowLeft from "./../../assets/arrowleft.png";
import arrowRight from "./../../assets/arrowright.png";

import Vectorleft from "./../../assets/Vectorleft.png";
import Vectorright from "./../../assets/Vectorright.png";

import Ellipse from "./../../assets/Ellipse.png";
import GrayhorseTrans1 from "./../../assets/GrayhorseTrans1.png";
import GrayhorseTrans2 from "./../../assets/Grayhorse_Trans2.png";

import "swiper/css";
import "swiper/css/navigation";

const ChooseCharacter = styled.div`
    .swiper-button-prev:after {
        content: "prev";
        color: white;
    }
    .swiper-button-next:after {
        content: "next";
        color: white;
    }
    .text {
        margin: 80px 0 68px 0;
        font-family: "Glue Gun";
        font-style: normal;
        font-weight: normal;
        font-size: 61.7143px;
        line-height: 71px;
        letter-spacing: 0.07em;
        color: #ffffff;
        text-shadow: -2.57143px -2.57143px 0 #333333,
            2.57143px -2.57143px 0 #333333, -2.57143px 2.57143px 0 #333333,
            2.57143px 2.57143px 0 #333333;
        z-index: 5;
    }
    .top {
        margin: 0 auto;
        width: 978px;
        height: 156px;
        background: url(${top}) no-repeat;
        position: relative;
        .flaretop {
            position: absolute;
            top: -50px;
            left: 0;
        }
        .flarebottom {
            position: absolute;
            bottom: -25px;
            left: 0;
            z-index: 10;
        }
        &-inside {
            position: absolute;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 71px;
            top: 20px;
            .text {
                font-family: Glue Gun;
                font-style: normal;
                font-weight: normal;
                font-size: 61.7143px;
                line-height: 71px;
                letter-spacing: 0.07em;
                color: #fad552;
            }
        }
        .arrow {
            width: 29.41px;
            height: 36.5px;
        }
    }
    .bottom {
        position: relative;
        top: -45px;
        height: 380px;
        background: #305e00;
        z-index: 2;
        display: flex;
        align-items: center;
        .slider-advance {
            width: 80%;
            margin: 0 auto;
        }
        .detailChar {
            width: 1062px;
            height: 272px;
            background: #3d7701;
            border: 1px solid white;
            border-radius: 30px;
            margin: auto auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .left {
                width: 257px;
                height: 262px;
                background: url(${Ellipse}) no-repeat;
                position: relative;
                img {
                    position: absolute;
                    left: -20px;
                    width: 179px;
                    height: 262px;
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: center;
                .title {
                    display: flex;
                    align-items: center;
                    .number {
                        width: 51.3px;
                        height: 51.3px;
                        border-radius: 51.3px;
                        background: #f2f2f2;
                        font-family: "HK Grotesk";
                        font-style: normal;
                        font-weight: bold;
                        font-size: 56.499px;
                        line-height: 53.1px;
                        text-align: center;
                        color: #386e00;
                    }
                    .content {
                        margin-left: 26.9px;
                        font-family: HK Grotesk;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 61.7143px;
                        line-height: 71px;
                        text-transform: capitalize;
                        /* Gray 6 */
                        color: #f2f2f2;
                    }
                }
                .description {
                    max-width: 587px;
                    text-align: left;
                    margin-top: 18px;
                    font-family: HK Grotesk;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    color: #ffffff;
                }
                img{
                    position: absolute;
                    bottom: -25px;
                    margin-left: -250px;
                    filter: opacity(0.8);
                }
            }
        }
    }
`;

const ChooseChar = () => {
    SwiperCore.use([Navigation]);
    return (
        <ChooseCharacter>
            <div className="text">Charactres</div>
            <div className="characterChange">
                <Carousel />
            </div>
            <div className="advance">
                <div className="top">
                    <img className="flaretop" src={flareHighLight} alt="" />
                    <div className="top-inside">
                        <img className="arrow" src={arrowLeft} alt="" />
                        <p className="content text">advance</p>
                        <img className="arrow" src={arrowRight} alt="" />
                    </div>
                    <img className="flarebottom" src={flareHighLight} alt="" />
                </div>
                <div className="bottom">
                    <div className="slider-advance">
                        <Swiper navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <div className="detailChar">
                                    <div className="left">
                                        <img src={GrayhorseTrans2} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            <div className="number">1</div>
                                            <div className="content">
                                                lightBlue
                                            </div>
                                        </div>
                                        <div className="description">
                                            A Crazy Defense Heroes Bronze Chest
                                            contains 3 TOWER Game Card NFT’s
                                            ranging in rarity from Common to
                                            Epic.
                                        </div>
                                        <img src={flareHighLight} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="detailChar">
                                    <div className="left">
                                        <img src={GrayhorseTrans2} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            <div className="number">1</div>
                                            <div className="content">
                                                lightBlue
                                            </div>
                                        </div>
                                        <div className="description">
                                            A Crazy Defense Heroes Bronze Chest
                                            contains 3 TOWER Game Card NFT’s
                                            ranging in rarity from Common to
                                            Epic.
                                        </div>
                                        <img src={flareHighLight} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="detailChar">
                                    <div className="left">
                                        <img src={GrayhorseTrans2} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            <div className="number">1</div>
                                            <div className="content">
                                                lightBlue
                                            </div>
                                        </div>
                                        <div className="description">
                                            A Crazy Defense Heroes Bronze Chest
                                            contains 3 TOWER Game Card NFT’s
                                            ranging in rarity from Common to
                                            Epic.
                                        </div>
                                        <img src={flareHighLight} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </ChooseCharacter>
    );
};

ChooseChar.propTypes = {};

export default ChooseChar;
