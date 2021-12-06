import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bgall from "./../assets/bgall.png";
import Welcome from "./Welcome";
import Market from "./Market";
import GamePlay from "./GamePlay";
import Feature from "./Feature";
import MyTeam from "./MyTeam";
import BackedBy from "./BackedBy";
import Footer from "./Footer";
const HomeWrapper = styled.div`
    .cantainerContent {
        background: url(${bgall}) no-repeat;
        background-size: cover;
        background-position: top;
    }
`;
const Home = () => {
    return (
        <HomeWrapper>
            <Welcome />
            <Market />
            <div className="cantainerContent">
                <GamePlay />
                <Feature />
                <MyTeam />
                <BackedBy />
                <Footer />
            </div>
        </HomeWrapper>
    );
};

Home.propTypes = {};

export default Home;
