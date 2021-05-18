import React from 'react';
import about from "../../videos/about..mp4";
import {Container} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail'
import i from "../../images/i.jpg";
import skill from "../../images/skill.jpg";

function About(){
  return(
    <>
      <video autoPlay loop muted className="bg-video about-video">
        <source src={about} type="video/mp4" />
      </video>
      <section>
        <div className="header-about">
          <NavLink to='/' className="back-about"><KeyboardBackspaceIcon fontSize="large" /></NavLink>
        </div>
        <Container>
            <div className="row">
              <div className="col-lg-8 work-col">
                <h1 className="whoami">Who Am I</h1>
                <p className="p-about">My Name is Anandha Krishnan Valiyaveetil Kamalon . I Am from Kerala,India.I am 19 years old now.
                 Currently I am pursuing Bachelor's degree in Computer Engineering at LPU Punjab.I finished my high school education at
                 Kasaragod,Kerala.I passed from there with good marks and i am interested in Programming.Now I am trying to master Web
                 Development. Also I am also started contributing to Open Source Projects in part-time.

                </p>
                <a href="mailto:anandhu4310@gmail.com" className="button s-btn">Contact Me</a>
              </div>
              <div className="col-lg-4 work-col">
                <img src={i} alt="" width="100%" height="100%"/>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-4 work-col">
                <img src={skill} alt="" width="100%" height="350px"/>
              </div>
              <div className="col-lg-8 work-col">
                <h1 className="whoami">My Skills</h1>
                <p className="p-about">
                  I am really interested in Web Development.So now I am focussing on Web Development.Now I Know C++ , HTML ,
                  CSS , JavaScript and little bit Python.I am also good at DSA in C++.Now I am working with ReactJS framework.It is really wonderful.This 
                  website is also created by ReactJS when I studying it.
                </p>
                <NavLink to="/work" className="button s-btn">Projects</NavLink>
              </div>
            </div>
        </Container>
        <div className="footer-work">
                    <div className="footer-btn"><a href="https://www.instagram.com/_a_na_ndhu__/" style={{color:"white"}}><InstagramIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://github.com/anandhu720" style={{color:"white"}}><GitHubIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" style={{color:"white"}}><LinkedInIcon fontSize="large"/></a></div>
                    <div className="footer-btn"><a href="mailto:anandhu4310@gmail.com" style={{color:"white"}}><MailIcon fontSize="large"/></a></div>
                </div>
      </section>
    </>
  )

}


export default About;
