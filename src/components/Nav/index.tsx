import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "./../../assets/logo.png";
const NavWrapperStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 317px 0 317px;
    .actionWrapper {
        display: flex;
        text-transform: uppercase;
        font-family: "Glue Gun";
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.07em;
        color: #ffffff;
        text-shadow: -1px -1px 0 #333333, 1px -1px 0 #333333, -1px 1px 0 #333333,
            1px 1px 0 #333333;
        .action:not(:first-child) {
            padding-left: 64px;
        }
    }
`;
const Nav = () => {
    return (
        <NavWrapperStyle>
            <img src={logo} alt="" />
            <div className="actionWrapper">
                <div className="action">MARKETPLACE</div>
                <div className="action">Staking</div>
                <div className="action">Whitepaper</div>
                <div className="action">play now</div>
                <div className="action">wallet</div>
            </div>
        </NavWrapperStyle>
    );
};

Nav.propTypes = {};

export default Nav;
