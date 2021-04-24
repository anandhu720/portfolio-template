import React from 'react';
import About from "./About.jsx"
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Heading(){
    return(
        <section>
            <div className="heading-div">
                <h1 className="heading project-card">I'm Anandha Krishnan.</h1>
                <p className="para">
                I am a Kerala based CSE student.I am interested in Coding.</p>
                <p className="para">I am currently studying at Lovely Professional University,Punjab</p>
            </div>
            <div className="nav justify-content-center">
                <a target="_blank" href="https://github.com/anandhu720" className="navbar-button icon-card"><GitHubIcon /></a>
                <a target="_blank" href="https://www.instagram.com/_a_na_ndhu__/" className="navbar-button icon-card"><InstagramIcon /></a>
                <a target="_blank" href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" className="navbar-button icon-card"><LinkedInIcon /></a>
                <a target="_blank" href="https://www.youtube.com/channel/UC96oKCVjPGoc0eG_-ExN_Ew" className="navbar-button icon-card"><YouTubeIcon /></a>
            </div>
            <About />
        </section>
    );
}

export default Heading;