import React from 'react';
import UserDropdown from './menu_user_dropdown';
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDropdown: false,
    };
    this.displayDropdown = this.displayDropdown.bind(this);
  }
  displayDropdown() {
    this.setState({
      displayDropdown: !this.state.displayDropdown,
    });
  }

  render() {
    const defaultNote = {
      author_id: this.props.currentUser.id,
      notebook_id: 1, //BUG Hard Coded for now
    }
    return (
      <aside className="menu-container">
        <div className="user-account">
          <div onClick={() => this.displayDropdown()} className="username-container">
              <span className="initial-container">
                <span className="initial">{this.props.currentUser.username[0].toUpperCase()}</span>
              </span>
              <span className="user">{this.props.currentUser.username}</span>
            <img src={window.dropArrow}/>
          </div>
        </div>
        {
          this.state.displayDropdown ?
            <UserDropdown
              currentUser={this.props.currentUser}
              logout={this.props.logout} /> : null
        }
        <div className="create-note" onClick={() => createNote(defaultNote)}>

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" id="qa-CREATE_NOTE">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h30v30H0z"></path>
              <circle cx="15" cy="15" r="14" fill="#00A82D"></circle>
              <rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect>
              <rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect>
            </g>
          </svg>

          New Note
        </div>
        <div className="nav-links">
          <NavLink
            to="/client/notes"
            activeClassName="selected-link">All Notes</NavLink>
          <NavLink
            to="/client/notebooks"
            activeClassName="selected-link">Notebooks</NavLink>
        </div>
      </aside>
    )
  }
}
export default Menu;
