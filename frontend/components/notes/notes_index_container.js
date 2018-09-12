import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';
import NotesIndex  from './notes_index';

const msp = (state) => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user,
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(NotesIndex);
