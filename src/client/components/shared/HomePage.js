import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/black.jpg";
import Reviews from "./Reviews";

const HomePage = () => {
    return (
        <>
            <BannerSC>
                <div>
                    <h1>Custom T-Shirts</h1>
                    <h2>Designed by you</h2>
                    <h2>Made by us</h2>
                </div>
            </BannerSC>
            <Reviews />
        </>
    );
};

const BannerSC = styled.div`
    background: url(${bannerImg});
    background-size: cover;
    height: 55vh;
    width: 100%;
    text-transform: uppercase;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        h1, h2 {
            text-align: center;
            letter-spacing: 4px;
        }
    }
`;

export default HomePage;
