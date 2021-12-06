import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dashboard from "./../../assets/DashBoard.png";
import gameItem from "./../../assets/GameItem.png";
import bgmarket1 from "./../../assets/bgmarket1.png";
import bgmarket2 from "./../../assets/bgmarket2.png";
const MarketStyle = styled.div`
    margin-top: 165px;
    background-image: url(${bgmarket1}), url(${bgmarket2});
    background-repeat: no-repeat;
    background-position: right top, left 400px;
    .title {
        font-family: Glue Gun;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 41px;
        text-align: center;
        letter-spacing: 0.07em;
        color: #333333;
        text-transform: uppercase;
        margin: 0 auto;
    }
    .description {
        width: 887px;
        margin: 0 auto;
        margin-top: 70px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.07em;
        color: #000000;
    }
    .showcase {
        margin-top: 67px;
        width: 100%;
        display: flex;
        justify-content: center;
        img:first-child {
            height: 716px;
        }
        img:nth-child(2) {
            margin-top: 62px;
            margin-left: -80px;
        }
    }
`;
const Market = () => {
    return (
        <MarketStyle>
            <div className="title">MARKETPLACE</div>
            <div className="description">
                DoragonLand players could start trading NFT items on Mirana
                Marketplace to earn enormous financial benefits.
            </div>
            <div className="showcase">
                <img src={dashboard} alt="" />
                <img src={gameItem} alt="" />
            </div>
        </MarketStyle>
    );
};

Market.propTypes = {};

export default Market;
