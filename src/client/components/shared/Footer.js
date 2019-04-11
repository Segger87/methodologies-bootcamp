import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterSC>
            <p>This is the footer, you better bloody love it! come on!!!!</p>
            <p>LoGoPro&copy;2019</p>
        </FooterSC>
    );
}

const FooterSC = styled.footer`
    text-transform: uppercase;
    padding: 10px;
    background: #d2cdcd;
    font-size: 10px;
    color: white;
    text-align: center;
`;
export default Footer;