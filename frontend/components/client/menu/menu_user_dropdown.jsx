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
          <ul>
            <li className="dropdown-username"></li>
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
