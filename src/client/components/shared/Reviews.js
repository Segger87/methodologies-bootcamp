import React from "react";
import styled from "styled-components";

const Reviews = () => {
    return (
        <ReviewsSC>
            <h2>Reviews</h2>
            <ReviewsContainer>

            <Review>
                <ReviewTextSC>
                    I love this custom t-shirt from LoGoPro, these guys absolutely smashed it and I mean smashed it. So
                    comfy and my kids say I'm the coolest mum in the village. Will be ordering more.
                </ReviewTextSC>
                <span>Brenda from Village</span>
                <span>30/03/19</span>
            </Review>
            <Review>
                <ReviewTextSC>
                    Best Tee I have ever designed, love the funky colours. LoGoPro are the best!!!
                </ReviewTextSC>
                <span>Paul from City</span>
                <span>03/04/19</span>
            </Review>
            </ReviewsContainer>
        </ReviewsSC>
    );
};


const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ReviewsSC = styled.div`
    h2 {
        text-align: center;
    }
`;

const Review = styled.div`
    width: 50%;
    text-align: center;
    background: rgb(253, 209, 209);
    padding: 20px;
`;
const ReviewTextSC = styled.p`
    position: relative;
    font-style: italic;
    text-align: center;
    &::before {
        content: "“";
        padding: 10px;
        left: 0;
        top: 0;
    }
    &::after {
        content: "”";
        padding: 10px;
        right: 0;
        top: 0;
    }
`;

export default Reviews;