import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import feature1 from "./../../assets/feature1.png";
import feature2 from "./../../assets/feature2.png";
import feature3 from "./../../assets/feature3.png";
import feature4 from "./../../assets/feature4.png";

const FeatureStyle = styled.div`
    padding: 0 15%;
    .title {
        font-family: "Glue Gun";
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 55px;
        text-align: center;
        letter-spacing: 0.07em;
        color: #333333;
        text-transform: uppercase;
        margin: 0 auto;
        margin-top: 81.5px;
        margin-bottom: 64px;
    }
    .features {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
const FeatureItemStyle = styled.div`
    max-width: 461.98px;
    max-height: 522px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px 80px;
    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 288.28px;
        height: 288.28px;
        border-radius: 288.28px;
        background: white;
    }
    .content {
        font-family: Glue Gun;
        font-style: normal;
        font-weight: normal;
        font-size: 32.7387px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 0.07em;
        color: white;
        margin-top: 38.2px;
    }
    .description {
        margin: 27px 0;
        font-family: HK Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: white;
    }
    .more {
        padding: 6.37px 18.19px;
        border: 1px solid white;
        border-radius: 90.94px;
        a {
            font-family: HK Grotesk;
            font-style: normal;
            font-weight: 600;
            font-size: 21.8258px;
            line-height: 25px;
            text-align: center;
            text-decoration: none;
            color: white;
        }
    }
`;
const Feature = () => {
    return (
        <FeatureStyle>
            <div className="title">Features</div>
            <div className="features">
                <FeatureItemStyle>
                    <div className="image">
                        <img src={feature1} alt="" />
                    </div>
                    <div className="content">NFT collectibles</div>
                    <div className="description">
                        DoragonLand is the paradise for dire collectors to
                        possess collectibles and players can receive NFTs while
                        mining, farming
                    </div>
                    <div className="more">
                        <a href="">See more</a>
                    </div>
                </FeatureItemStyle>
                <FeatureItemStyle>
                    <div className="image">
                        <img src={feature2} alt="" />
                    </div>
                    <div className="content">Marketplace</div>
                    <div className="description">
                        DoragonLand marketplace provides an efficient place for
                        players to trade NFT items on and earn massive financial
                        benefits
                    </div>
                    <div className="more">
                        <a href="">See more</a>
                    </div>
                </FeatureItemStyle>
                <FeatureItemStyle>
                    <div className="image">
                        <img src={feature3} alt="" />
                    </div>
                    <div className="content">Staking</div>
                    <div className="description">
                        Players and investors can start staking their $DOR. $DOR
                        will be staked in the different staking pools for a
                        certain period of time
                    </div>
                    <div className="more">
                        <a href="">See more</a>
                    </div>
                </FeatureItemStyle>
                <FeatureItemStyle>
                    <div className="image">
                        <img src={feature4} alt="" />
                    </div>
                    <div className="content">Ownership</div>
                    <div className="description">
                        The game mechanism ensures the true in-game assets
                        ownership for players. DoragonLand is run on Binance
                        Smart
                    </div>
                    <div className="more">
                        <a href="">See more</a>
                    </div>
                </FeatureItemStyle>
            </div>
        </FeatureStyle>
    );
};

Feature.propTypes = {};

export default Feature;
