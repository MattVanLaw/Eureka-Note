import React    from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="navbar">
      <Link to="/"><h1>Eureka!</h1></Link>
      <ul className="session-links">
        <li><Link to="/signup">Sign up</Link></li>
        <li class="small">&nbsp;or&nbsp;</li>
        <li class="login"><Link to="/login">Log in</Link></li>
      </ul>
    </div>
  );
  const personalGreeting = () => (
    <header className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </header>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
