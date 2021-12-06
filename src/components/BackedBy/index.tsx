import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import backed1 from "../../assets/backed.png";
const BackendByStyle = styled.div`
    padding: 0 10%;
    padding-bottom: 225px;
    .title {
        font-family: Glue Gun;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 55px;
        text-align: center;
        letter-spacing: 0.07em;
        color: white;
        text-transform: uppercase;
        margin: 0 auto;
        margin-bottom: 72px;
        margin-top: 118px;
    }
    .memberWrapper {
        width: fit-content;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .member {
            margin: 40px 50px;
            border: 1px solid white;
            padding: 0 10px;
        }
    }
`;
const BackedBy = () => {
    return (
        <BackendByStyle>
            <div className="title">Backed BY</div>
            <div className="memberWrapper">
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
                <div className="member">
                    <img src={backed1} alt="" />
                </div>
            </div>
        </BackendByStyle>
    );
};

BackedBy.propTypes = {};

export default BackedBy;
