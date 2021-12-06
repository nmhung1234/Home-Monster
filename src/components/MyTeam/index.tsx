import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import myteam from "./../../assets/myteam.png";
const MyTeamStyle = styled.div`
    padding: 0 10%;
    position: relative;
    .img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .title {
        font-family: Glue Gun;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 55px;
        text-align: center;
        letter-spacing: 0.07em;
        color: #333333;
        text-transform: uppercase;
        margin: 0 auto;
        margin-bottom: 72px;
        padding-top: 700px;
    }
    .memberWrapper {
        width: fit-content;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .member {
            margin: 40px;
            .avatar {
                width: 238px;
                height: 238px;
                border-radius: 238px;
                border: 16px solid #e6e6e6;
            }
            .name {
                margin-top: 36px;
                font-family: Glue Gun;
                font-style: normal;
                font-weight: normal;
                font-size: 36px;
                line-height: 41px;
                text-align: center;
                letter-spacing: 0.07em;
                color: white;
            }
            .responsibility {
                font-family: HK Grotesk;
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 27, 46px;
                text-align: center;
                letter-spacing: 0.03em;
                color: white;
            }
        }
    }
`;
const MyTeam = () => {
    return (
        <MyTeamStyle>
            <div className="title">MY TEAM</div>
            <div className="memberWrapper">
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
                <div className="member">
                    <img
                        className="avatar"
                        src="https://picsum.photos/200"
                        alt=""
                    />
                    <div className="name">Zoey Hoang</div>
                    <div className="responsibility">3D Director</div>
                </div>
            </div>
        </MyTeamStyle>
    );
};

MyTeam.propTypes = {};

export default MyTeam;
