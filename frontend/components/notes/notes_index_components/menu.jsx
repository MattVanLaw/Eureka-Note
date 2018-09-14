import React from 'react';
import UserDropdown from './menu_components/menu_user_dropdown';

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <aside className="menu-container">
        <UserDropdown
          currentUser={this.props.currentUser}
          logout={this.props.logout} />
      </aside>
    )
  }
}
export default Menu;
