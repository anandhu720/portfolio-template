import React from "react";
import Workheader from "./Workheader";
import Workdetails from "./Workdetails";
import Workcards from "./Workcards";

function Work(){
    return(
        <>
            <section className="work-img">
                <Workheader/>
                <Workdetails/>
                <Workcards/>
        </section>
        </>
    )
}


export default Work;