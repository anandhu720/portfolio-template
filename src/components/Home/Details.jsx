import { Container } from '@material-ui/core';
import {NavLink} from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';


function Details(){
    return(
        <div className="details">
            <Container>
                <div className="box">
                    <h1 className="main-heading">Hey , I'm Anandha Krishnan</h1>
                    <p className="main-dis">
                    I am a Kerala based CSE student.I am interested in Web Development.Now I am working with ReactJS framework.

                    I am currently studying at Lovely Professional University,Punjab
                    </p>
                    <div className="main-btn">
                        <NavLink to="/about" className="button button1">ABOUT</NavLink>
                    </div>
                  <div className="footer">
                    <div className="footer-btn"><a href="https://www.instagram.com/_a_na_ndhu__/" style={{color:"white"}}><InstagramIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://github.com/anandhu720" style={{color:"white"}}><GitHubIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" style={{color:"white"}}><LinkedInIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="mailto:anandhu4310@gmail.com" style={{color:"white"}}><MailIcon fontSize="large"/></a></div>
                </div>
                </div>
            </Container>
        </div>
    );
}

export default Details;
