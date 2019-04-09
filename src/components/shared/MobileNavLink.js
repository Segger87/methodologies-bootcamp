import React from "react";
import styled from "styled-components";

const MobileNavLink = () => {
    return (
        <MobileNavLinkSC>
            <div></div>
            <div></div>
            <div></div>
        </MobileNavLinkSC>
    );
}

const MobileNavLinkSC = styled.div`
    cursor: pointer;
    display: inline-block;

    div {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px;
        transition: 0.4s;
    }
    
`;

export default MobileNavLink;