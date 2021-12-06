import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import phuong from "./../../assets/phuong.png";
import cripto from "./../../assets/cripto.png";
import monster from "./../../assets/monster.png";
import Subtract from "./../../assets/Subtract.png";

import bgwellcome from "./../../assets/bgwellcome.png";
import Nav from "../Nav";
import ChooseChar from "../ChooseChar";
const WelcomeStyle = styled.div`
    width: 100%;
    height: 2095px;
    /* height: fit-content; */
    background-image: url(${bgwellcome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
const IntroduceWrapper = styled.div`
    /* position: relative; */
    width: 100%;
    /* height: 100%; */
    img {
        display: block;
        margin: 0 auto;
    }
    .cripto {
        transform: translateY(-45px);
    }
    .monster {
        transform: translateY(-30px);
    }
    .playNow {
        margin: 0 auto;
        width: 271px;
        height: 68.59px;
        background: linear-gradient(0deg, #c27412 0.02%, #eda924 100.03%);
        border-radius: 91.4442px;
        position: relative;
        z-index: 1;
        &-btn {
            color: #ffffff;
            font-family: "Glue Gun";
            font-size: 30.5685px;
            line-height: 68.59px;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            text-shadow: 1.82888px 3.65777px 3.65777px #ae6306;
            text-align: center;
        }
        .subtractEffect {
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }
`;

const Welcome = () => {
    return (
        <WelcomeStyle>
            <Nav />
            <IntroduceWrapper>
                <img className="" src={phuong} alt="" />
                <img className="cripto" src={cripto} alt="" />
                <img className="monster" src={monster} alt="" />
                <div className="playNow">
                    <img className="subtractEffect" src={Subtract} alt="" />
                    <div className="playNow-btn">Play now</div>
                </div>
            </IntroduceWrapper>
            <ChooseChar />
        </WelcomeStyle>
    );
};

Welcome.propTypes = {};

export default Welcome;
