import React from 'react';
import bg from "../../videos/bg.mp4";
import Navbar from "./Navbar.jsx";
import Details from "./Details.jsx";

function Home(){
    return(
        <>
            <video autoPlay loop muted className="bg-video">
                <source src={bg} type="video/mp4" />
            </video>
            <Navbar />
            <Details />
        </>
    )
}

export default Home;