import React from 'react';
import UserDropdown from './menu_user_dropdown';

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
              <span className="initial">{this.props.currentUser.username[0].toUpperCase()}</span>
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
          <span className="create-plus-container">
            <span className="create-plus">+</span>
          </span> New Note
          </div>
      </aside>
    )
  }
}
export default Menu;
