import React from 'react';
import work from "../../videos/bg1.mp4";
import {NavLink} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Container} from "@material-ui/core"
import cards from "../../card.js";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

function Work(){
    return(
        <>
        <video autoPlay loop muted className="bgwork-video">
            <source src={work} type="video/mp4" />
        </video>
        <div className="header-about">
          <NavLink to='/' className="back-work"><KeyboardBackspaceIcon fontSize="large" /></NavLink>
        </div>
        <section style={{color:"white"}}>
        <Container>
            {cards.map((card)=>
            <div className="row">
              <div className="col-lg-6 work-col box-work">
                <h1 className="project-heading">{card.title}</h1>
                <p className="project-dis">{card.content}
                </p>
                <a href={card.link} className="button button2 s-btn">Source</a>
                <a href={card.live} className="button button2 l-btn">Live</a>

              </div>
              <div className="col-lg-6 work-col">
                <img src={card.img} alt="" width="80%" className="img-work" style={{height:"100%"}}/>
              </div>
            </div>
            )}
             <div className="footer-work">
                    <div className="footer-btn"><a href="https://www.instagram.com/_a_na_ndhu__/" style={{color:"white"}}><InstagramIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://github.com/anandhu720" style={{color:"white"}}><GitHubIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" style={{color:"white"}}><LinkedInIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="mailto:anandhu4310@gmail.com" style={{color:"white"}}><MailIcon fontSize="large"/></a></div>
                </div>
        </Container>
        </section>
        </>
    )
}

export default Work;