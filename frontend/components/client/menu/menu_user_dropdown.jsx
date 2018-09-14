import React from 'react';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-dropdown-container">
          <div className="dropdown">
            <div className="dropdown-account">Account</div>
            <div className="user-row">
              <span className="initial-drop">{this.props.currentUser.username[0].toUpperCase()}</span>
              <span className="user-drop">{this.props.currentUser.username}</span>
            </div>
            <ul>
              <li className="rule"></li>
              <li onClick={() => this.props.logout()} className="dropdown-item">
                Sign out {this.props.currentUser.username}
              </li>
            </ul>
          </div>
      </div>
    );
  }
}
export default UserDropdown;
