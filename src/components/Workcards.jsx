import React from 'react';
import cards from "../card.js";


function Workcards(){

    return(
        <div className="row cards-padd"> 
        <h1 className="work-heading">Works</h1>
            {cards.map((element)=>
            <div className="col-lg-3 cards2">
                <div class="card project-card">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzy_KKg1I8gNMYWbntJDK6kGgKWnrQbTsJQ&usqp=CAU' className="card-img-top" alt="..."/>
                   <div class="card-body card-height">
                      <h5 class="card-title">{element.title}</h5>
                      <p class="card-text">{element.content}</p>
                    </div>
                    <a  target="_blank" href={element.link} class="btn btn-primary">Source Code</a>
                </div>    
            </div>
            )}
        </div>
    )
}


export default Workcards;
