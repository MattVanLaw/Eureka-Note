import { connect } from 'react-redux';
import Menu        from './menu'
import { logout }  from './../../../actions/session_actions';
import { createNote } from './../../../actions/note_actions';

const msp = state => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote()),
  };
};

const MenuContainer = connect(msp, mdp)(Menu)
