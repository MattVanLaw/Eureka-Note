import Splash from './splash';
import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';

const msp = ({entities, session }) => {
  const user = session ? entities.users[session.id]: null;
  return {
    currentUser: user,
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Splash);
