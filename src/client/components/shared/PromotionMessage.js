import React from "react";
import styled from "styled-components";

const PromotionMessage = () => {
    return (
        <PromotionMessageSC>
            <p>
                <strong>Free delivery</strong> on orders over £30
            </p>
        </PromotionMessageSC>
    );
};

const PromotionMessageSC = styled.div`
    background: #1A1A1A;
    padding: 10px;
    text-align: center;
    color: white;
    font-size: 10px;
    p {
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 17px;
    }
`;

export default PromotionMessage;
