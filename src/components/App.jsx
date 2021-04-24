
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Work from "./Work"

function App() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Main />} />
            <Route path="/work" exact component={() => <Work />} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
  
  export default App;