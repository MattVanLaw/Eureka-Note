import React from 'react';

const UserDropdown = ({currentUser, logout}) => {
  return (
    <div className="user-dropdown-container">
      <div className="user-account">
        <div className="username-container">
          <span className="initial">{currentUser.username[0].toUpperCase()}</span>
          <span className="user">{currentUser.username}</span>
          <img
            src={window.dropArrow}/>
        </div>
        <div className="dropdown">
          <div className="dropdown-account">Account</div>
          <div className="user-row">
            <span className="initial-drop">{currentUser.username[0].toUpperCase()}</span>
            <span className="user-drop">{currentUser.username}</span>
          </div>
          <ul>
            <li className="rule"></li>
            <li onClick={() => logout()} className="dropdown-item">
              Sign out {currentUser.username}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default UserDropdown;
