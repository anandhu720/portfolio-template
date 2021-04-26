import React from 'react';

function Workdetails(){

    return(
        <div className="container-fluid">
            <div className="row work-main">
            <h1 className="skill-heading">Skills</h1><br/><br/><br/><br/>
            <p>HTML And CSS</p><br/>
            <div class="container">
                <div class="skills html">90%</div>
            </div><br/><br/><br/>

            <p>C And C++</p><br/>
            <div class="container">
                <div class="skills css">80%</div>
            </div><br/><br/><br/>

            <p>JavaScript And ReactJS</p>
            <div class="container">
                <div class="skills js">80%</div>
            </div><br/><br/><br/>

            <p>NodeJS</p>
            <div class="container">
                <div class="skills php">60%</div>
            </div><br/><br/><br/>

            <p>SQL And MongoDB</p>
            <div class="container">
                <div class="skills php">60%</div>
            </div><br/><br/><br/>
        </div>
        </div>
    );
}

export default Workdetails;