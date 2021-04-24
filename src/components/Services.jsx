import React from 'react';

function Services(){
    return(
        <div className="row">
           <div className="col-lg-4">
                <h1 className="service-heading">What I do</h1>
           </div>
           <div className="col-lg-3">
                <div class="col">
                    <div class="card project-card">
                        <div class="container">
                            <h2 className="service-subheading">Datastructes and Algorithm</h2>
                            <div class="holiday-exp">
                                I am good at Datastructes and algorithms in C++.Currently doing C and C++ as my main programming Language.Also doing datastructes and algorithms in C and C++.Thinking to start some competative coding using C++
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div class="col">
                    <div class="card project-card">
                        <div class="container">
                            <h2 className="service-subheading">Web Development</h2>
                            <div class="holiday-exp">
                                I am really interested in web Development.Currently i know HTML , CSS , Javascript , NodeJS . Now I am studying ReactJs for building Web Apps.Also in know SQL and Mongodb.I am wishing to become a Full-stack Developer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;