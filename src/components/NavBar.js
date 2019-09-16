import React from 'react';
import { NavLink, } from "react-router-dom";
import { Menu, Segment, } from "semantic-ui-react";


const NavBar = () => (
<>
    <Segment>
<Menu inverted>
    <Menu.Item>
        <NavLink
        exact 
        to="/"
        activeStyle={style.active}>
            Home
        </NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink
        exact 
        to="/game"
        activeStyle={style.active}>
            Game
        </NavLink>
    </Menu.Item>
</Menu>
</Segment>
</>
);


const style ={
    active: {
        fontWeight: "bold",
    }
};

export default NavBar;