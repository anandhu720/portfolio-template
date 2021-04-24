import React from 'react';

function About(){
    return(
        <div id="about-section" className="about-section">
            <h1 className="about-h1">About Me</h1>
            <div className="project-card">
            <p>
            My Name is Anandha Krishnan Valiyaveetil Kamalon . I Am from Kerala,India.      
            </p>
            <p>
            Currently I am pursuing Bachelor's degree in Computer Engineering at LPU Punjab.     
            </p>
            <p>
            I am intrested in Web devolpment.
            </p>
            </div>
            <h2 className="about-h2">Contact Details</h2>
            <address className="project-card">
            Mavungal House<br/>
            Bedaduka (PO)<br/>
            Chengala (Via) <br/>
            Kasaragod,Kerala<br/>
            Pin : 671541<br/>
            anandhu4310@gmail.com<br/>
            </address>
        </div>
    );
}

export default About;