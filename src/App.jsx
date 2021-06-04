import React,{useState,useEffect} from 'react';
import {Switch , Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/Home/Home.jsx";
import Work from "./components/Work/Work1.jsx";
import About from "./components/About/About.jsx";

import ReactLoading from "react-loading";

function App() {

  const [done,setDone] = useState(true);

  useEffect(() => setDone(false), []);

  return (
    <>{
        done ? <div className="loading-screen"> <ReactLoading type={"bars"} color={"aqua"} height={200} width={200} /></div>
        :    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Work" component={Work} />
          <Route exact path="/About" component={About}/>
          <Redirect to="/" /> 
        </Switch>
    }
    </>
  );
}

export default App;
