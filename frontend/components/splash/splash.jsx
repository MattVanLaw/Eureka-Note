import React    from "react";
import { Link } from "react-router-dom";
import Section from "./../sections/section";
import SectionTwo from "./../sections/section_two";

const Splash = () => (
  <div>

    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <h1><img className="nav-logo" src={window.lightbulb}/>
            Eureka!
            <span className="subhead">Note</span>
          </h1>
        </Link>
        <ul className="session-links">
          <li><Link to="/signup">Sign up</Link></li>
          <li className="or">&nbsp;or&nbsp;</li>
          <Link className="login" to="/login"><li>Log in</li></Link>
        </ul>
      </div>
    </div>
    <Section/>
    <SectionTwo/>
  </div>
);

export default Splash;
