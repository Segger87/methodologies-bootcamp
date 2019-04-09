import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <div>
            <UlSC>
                <li>Custom Design</li>
                <li>Contact</li>
            </UlSC>
        </div>
    );
}

const UlSC = styled.ul`
    list-style: none;
`;
export default Nav;