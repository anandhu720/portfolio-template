import React from "react";
import Navbar from "./Navbar.jsx"
import Heading from "./Heading.jsx"
import Services from "./Services.jsx"

function Main() {
  return (
    <div class="docSlider">
        <section id="one" className="header-img">
          <Navbar />
          <Heading />
          <Services />
        </section>

    </div>

  );
}

export default Main;
