import React from 'react';
import UserDropdown from './menu_user_dropdown';
import { withRouter, NavLink, Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDropdown: false,
    };
    this.displayDropdown = this.displayDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  displayDropdown() {
    this.setState({
      displayDropdown: !this.state.displayDropdown,
    });
  }
  closeDropdown() {
    this.setState({
      displayDropdown: false
    });
  }
  handleCreate(notebookId) {
    const path = this.props.location.pathname;

    if (path === "/client/notebooks" || path === "/client/notes" || path === "/client/tags") {
      this.props.openModal('createNote', this.props.notebooks);
    } else {
      this.props.createNote({id: notebookId});
    }
  }
  render() {
    const pathParts = this.props.location.pathname.split("/");
    const notebookId = parseInt(pathParts[pathParts.length - 1]);
    return (
      <aside className="menu-container">
        <div tabIndex="0" onBlur={ this.closeDropdown } className="user-account">
          <div
            onClick={() => this.displayDropdown()} className="username-container">
              <span className="initial-container">
                <span className="initial">
                  {this.props.currentUser.username[0].toUpperCase()}
                </span>
              </span>
              <span className="user">{this.props.currentUser.username}</span>
            <img src={window.dropArrow}/>
          </div>
          {
            this.state.displayDropdown ?
            <UserDropdown
              currentUser={this.props.currentUser}
              logout={this.props.logout} /> : null
            }
        </div>
        <div className="create-note"
             onClick={() => this.handleCreate(notebookId)}>

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" id="qa-CREATE_NOTE">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h30v30H0z"></path>
              <circle cx="15" cy="15" r="14" fill="#00A82D"></circle>
              <rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect>
              <rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect>
            </g>
          </svg>

          <span>New Note</span>
        </div>
        <div className="nav-links">
          <NavLink to="/client/notes" activeClassName="nav-link-active">
            <i className="fas fa-file-alt"></i>&nbsp;&nbsp;&nbsp;All Notes
          </NavLink>
          <NavLink to="/client/notebooks" activeClassName="nav-link-active">
            <i className="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Notebooks
          </NavLink>
          <NavLink to="/client/tags" activeClassName="nav-link-active">
            <i className="fas fa-tag"></i>&nbsp;&nbsp;&nbsp;Tags
          </NavLink>
        </div>
      </aside>
    )
  }
}

export default Menu;
