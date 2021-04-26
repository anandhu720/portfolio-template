import React from "react";
import Navbar from "./Navbar.jsx";
import "../index.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Abouthome from "./Abouthome.jsx";

function Home(){
    return(
        <>
            <div className="body-web">
            <div className="home-bg">
                <Navbar />
                <section id="header" className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="header-div">
                                <h1  className="heading">I'm Anandha Krishnan</h1>
                                <p className="para">
                                I am a Kerala based CSE student.I am interested in Coding.</p>
                                <p className="para">
                                I am currently studying at Lovely Professional University,Punjab</p>
                            </div>
                        </div>
                    </div>
                    <div className="nav justify-content-center">
                        <a  href="https://github.com/anandhu720" className="navbar-button icon-card"><GitHubIcon /></a>
                        <a  href="https://www.instagram.com/_a_na_ndhu__/" className="navbar-button icon-card"><InstagramIcon /></a>
                        <a  href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" className="navbar-button icon-card"><LinkedInIcon /></a>
                        <a  href="https://www.youtube.com/channel/UC96oKCVjPGoc0eG_-ExN_Ew" className="navbar-button icon-card"><YouTubeIcon /></a>
                    </div>
                </div>
                </section>
            </div>
            <Abouthome/>
            
            </div>
        </>
    )
}


export default Home;