import React    from 'react';
import { Link } from 'react-router-dom';

const NotesIndex = ({ currentUser, logout }) => {
  const personalGreeting = () => (
    <header className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </header>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
