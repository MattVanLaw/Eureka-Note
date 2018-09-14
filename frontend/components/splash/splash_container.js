import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';
import Splash      from './splash';

const msp = (state) => {
  const user = state.session?
    state.entities.users[state.session.id]
    :
    null;
  return {
    currentUser: user,
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Splash);
