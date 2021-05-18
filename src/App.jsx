import React from 'react';
import {Switch , Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/Home/Home.jsx";
import Work from "./components/Work/Work.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/About" component={About}/>
        <Redirect to="/" /> 
      </Switch>
    </>
  );
}

export default App;
