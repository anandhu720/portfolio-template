import React , {useState} from 'react';
import bg from "../../videos/bg.mp4";
import Navbar from "./Navbar.jsx";
import Details from "./Details.jsx";

import ReactLoading from "react-loading";

function Home(){
    const [done,setDone] = useState(true);

    setTimeout(() => {  setDone(false) }, 4000);
    return(
        <>{
            done ?<div className="loading-screen"> <ReactLoading type={"cylon"} color={"aqua"} height={200} width={200} /></div>
            :  
            <div>
            <video autoPlay loop muted className="bg-video">
                <source src={bg} type="video/mp4" />
            </video>
            <Navbar />
            <Details />
            </div>
        }
        </>
    )
}

export default Home;