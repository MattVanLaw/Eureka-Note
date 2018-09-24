import React    from "react";
import { Link } from "react-router-dom";
const Section = () => (
  <section className="main-call-to-action-container">
    <div className="main-call-to-action">
      <div className="row">
        <div className="copy">
          <h2>The easiest way<br/>to a Eureka! moment</h2>
          <p>Eureka!Note helps you capture and prioritize ideas,
          projects, and to-do lists, so none of your genius is forgotten.</p>
          <Link className="call-to-action-button" to="/signup">Sign Up For Free</Link>
        </div>
        <img className="nav-logo" src={window.heroimg}/>
      </div>
    </div>
    <footer>
      <div>This site was coded by
        <Link to="https://github.com/MattVanLaw"> Matt Van Dyke <i className="fab fa-github"></i>
        </Link>
      </div>
    </footer>
  </section>
);

export default Section;
