const UserDropdown = ({currentUser, logout}) => {
  return (
    <div className="user-dropdown-container">
      <div className="user-account">
        <div className="container-username">
          {currentUser.username}<i>v</i>
        </div>
        <ul className="dropdown">
          <li className="dropdown-account">Account</li>
          <li className="dropdown-username"></li>
          <li onClick={() => logout()} className="dropdown-item">
            Sign out {currentUser.username}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default UserDropdown;
