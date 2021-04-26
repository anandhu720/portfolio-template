import React from "react";


function Abouthome(){
    return(
        <>
            <div id="about" className="container-fluid abouthome-main">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="abouthome-heading">What I do</h1> 
                    <p className="abouthome-para">
                    My Name is Anandha Krishnan Valiyaveetil Kamalon . I Am from Kerala,India. Currently I am pursuing Bachelor's degree in Computer Engineering at LPU Punjab. I am intrested in Web devolpment. I know HTML , CSS , JavaScript , NodeJS , MongoDB , SQL . Currently i am working with ReactJS.This website is made by ReactJs as an trail.
                    </p>

                    <a className="btn btn-danger cv-button" href="https://drive.google.com/drive/folders/1qiAJMY8LutQvaD4bOXDJRniP2ZXWHTB_">Download CV</a>
                    <a className="btn btn-danger cv-button" href="mailto:anandhu4310@gmail.com">Mail Me</a>
                </div>
                <div className="col-lg-6">
                    <img src="http://www.pngplay.com/wp-content/uploads/4/Thinking-Man-PNG-HD-Quality.png" alt="" className="about-img"/>
                </div>
            </div>
            </div>
        </>
    )
}

export default Abouthome;