import React from 'react';
import Workheader from "./Workheader.jsx"
import Workdetails from "./Workdetails.jsx"
import Workcards from "./Workcards.jsx"

function Work(){

    return(
        <section className="work-img">
            <Workheader/>
            <Workdetails/>
            <Workcards/>
        </section>
    );
}

export default Work;