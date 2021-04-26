import React from "react";
import {Switch , Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import "./index.css";
import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
   <>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/About" component={About} /> */}
      <Route exact path="/Work" component={Work} />
      <Redirect to="/" /> 
    </Switch>
    <Footer />
   </>
  );
}

export default App;
