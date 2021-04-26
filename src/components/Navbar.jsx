import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <NavLink class="nav-link active navabr-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                    <a class="nav-link navabr-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link navabr-link" to="/work">Work</NavLink>
                </li>
            </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;