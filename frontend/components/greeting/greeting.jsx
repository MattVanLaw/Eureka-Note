import React    from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <header className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
//Greeting is a component to test out basic front-end auth.
