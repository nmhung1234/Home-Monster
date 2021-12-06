import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gameplay1 from "../../assets/gameplay1.png";
import gameplay2 from "../../assets/gameplay2.png";
const GamePlayStyle = styled.div`

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
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right {
        .description {
            display: flex;
            flex-direction: column;
            margin-left: 116px;
            &-title {
                align-self: flex-start;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 42px;
                text-align: center;

                color: #333333;
            }
            &-content {
                width: 526px;
                margin-top: 24px;
                text-align: left;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.07em;
                color: #000000;
            }
        }
    }
`;
const GamePlay = () => {
    return (
        <GamePlayStyle>
            <div className="title">GAMEPLAY</div>
            <div className="content">
                <div className="left">
                    <img src={gameplay1} alt="gameplay1" />
                </div>
                <div className="right">
                    <img src={gameplay2} alt="gameplay2" />
                    <div className="description">
                        <div className="description-title">Monster</div>
                        <div className="description-content">
                            The mode in which players join battles and
                            competitions to fight against other opponents and
                            climb to the top of the leaderboard. Your dragon
                            warriors will fight against others of squads,
                            selected from a dozens of unique legends, each with
                            unique abilities to prove the strongest and gain the
                            highest ranking.
                        </div>
                    </div>
                </div>
            </div>
        </GamePlayStyle>
    );
};

GamePlay.propTypes = {};

export default GamePlay;
