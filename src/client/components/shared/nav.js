import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {
    const [selected, setSelected] = useState(0);

    const toggleSelected = index => {
        setSelected(index);
    };
    const NavList = props => {
        const listItems = props.pages.map((title, index) => (
            <li isSelected={selected === index} key={index} onClick={() => toggleSelected(index)}>
                {console.log(selected, index)}
                <a isSelected={selected === index} href="#">
                    {title}
                </a>
            </li>
        ));

        return <UlSC>{listItems}</UlSC>;
    };
    return <NavList pages={["Custom Design", "Products", "Contact"]} />;
};

const UlSC = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    li {
        padding: 10px;
        background: ${props => (props.isSelected ? "white" : null)};
        border-radius: 5px 5px 0px 0px;
        border: 1px grey;
        &:hover {
            background: white;
            a {
                color: black;
            }
        }
        a {
            color: ${props => props.isSelected ? "black" : "white"};
            text-decoration: none;
        }
    }
`;

export default Nav;
