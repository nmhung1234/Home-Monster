import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import twitter from "../../assets/twitter.png";
import tele from "../../assets/tele.png";
const FooterStyle = styled.div`
    width: 100%;
    height: 268px;
    background: #305d00;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .contact {
        p {
            text-align: left;
            font-family: HK Grotesk;
            font-style: normal;
            color: #ffffff;
            line-height: 55px;
            margin: 0;
        }
        p:nth-child(1) {
            font-weight: 700;
            font-size: 48px;
        }
        p:nth-child(2) {
            font-weight: 400;
            font-size: 40px;
        }
    }
    .social {
        img {
            margin: 15px;
        }
    }
`;
const Footer = () => {
    return (
        <FooterStyle>
            <div className="contact">
                <p>Contact us</p>
                <p>Email: info@doragonland.io</p>
            </div>
            <div className="social">
                <img src={tele} alt="" />
                <img src={twitter} alt="" />
            </div>
        </FooterStyle>
    );
};

Footer.propTypes = {};

export default Footer;
