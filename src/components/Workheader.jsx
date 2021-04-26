import React from 'react';
import { Link,withRouter } from "react-router-dom";

function Workheader(props){
    return (
        <div  className="nav justify-content-center">
             <li
        class={`nav-item  ${
          props.location.pathname === "/" ? "active" : ""
        }`}
        >
        <Link id="home-section" class="navbar-button" to="/">
          Go Back
        </Link>
      </li>
        </div>
       
    )
}


export default withRouter(Workheader);