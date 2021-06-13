import { Container } from '@material-ui/core';
import {NavLink} from "react-router-dom";
import React from 'react';

function Navbar() {
    return(
        <div className="navbar">
            <Container>
                <NavLink className="navbar-style" to="/">HOME</NavLink>
                <NavLink className="navbar-style" to="/work">WORK</NavLink>
                <a href="mailto:anandhu4310@gmail.com" className="navbar-style">CONTACT</a>
            </Container>
        </div>
    )
}

export default Navbar
