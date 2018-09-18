import { connect } from 'react-redux';
import { logout }  from './../../../actions/session_actions';
import { createNote } from './../../../actions/note_actions';
import Menu        from './menu'

const msp = state => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createNote: note => {
      return dispatch(createNote(note))
    },
  };
};

const MenuContainer = connect(msp, mdp)(Menu);
export default MenuContainer;
