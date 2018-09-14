import React from 'react';
import UserDropdown from './menu_user_dropdown';

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const defaultNote = {
      author_id: this.props.currentUser.id,
      notebook_id: 1, //BUG Hard Coded for now
    }
    return (
      <aside className="menu-container">
        <UserDropdown
          currentUser={this.props.currentUser}
          logout={this.props.logout} />
        <div onClick={() => createNote(defaultNote)}> + New Note</div>
      </aside>
    )
  }
}
export default Menu;
