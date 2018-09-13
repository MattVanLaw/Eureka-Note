import React    from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => (
  <div className="navbar-container">
    <div className="navbar">
      <Link to="/">
        <h1><img
          className="nav-logo"
          src={window.lightbulb}/>
        Eureka!
        <span className="subhead">Note</span></h1>
      </Link>
      <ul className="session-links">
        <li><Link to="/signup">Sign up</Link></li>
        <li className="or">&nbsp;or&nbsp;</li>
        <Link className="login" to="/login"><li>Log in</li></Link>
      </ul>
    </div>
  </div>
);

export default Greeting;
