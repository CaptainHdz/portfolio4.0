import React from "react";
import "./style.css";
import 'materialize-css'

const About = () => {
  return (
    <div>
      <nav>
    <div className="nav-wrapper grey darken-4">
      <h2 className="brand-logo center">Logo</h2>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
      <div className="row">Who Am I?</div>
      <div className="row">
        <div className="col m6">
        Bacon ipsum dolor amet meatloaf beef ribs tri-tip t-bone tongue pork chop brisket cupim sirloin. Beef andouille beef ribs tenderloin alcatra bacon, biltong hamburger sirloin pastrami venison. Sausage chuck buffalo kielbasa ground round ham hock biltong brisket leberkas turducken turkey pork loin shankle. Pig landjaeger short ribs, alcatra ham meatloaf filet mignon venison flank shankle turkey turducken pork belly rump porchetta.
        </div>
        <div className="col m6">
        Bacon ipsum dolor amet meatloaf beef ribs tri-tip t-bone tongue pork chop brisket cupim sirloin. Beef andouille beef ribs tenderloin alcatra bacon, biltong hamburger sirloin pastrami venison. Sausage chuck buffalo kielbasa ground round ham hock biltong brisket leberkas turducken turkey pork loin shankle. Pig landjaeger short ribs, alcatra ham meatloaf filet mignon venison flank shankle turkey turducken pork belly rump porchetta.
        </div>
      </div>
    </div>
  );
};

export default About;
