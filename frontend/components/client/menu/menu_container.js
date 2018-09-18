import { connect } from 'react-redux';
import { logout }  from './../../../actions/session_actions';
import { createNote } from './../../../actions/note_actions';
import { fetchNotebooks } from './../../../actions/notebook_actions'
import { withRouter } from 'react-router-dom'
import Menu        from './menu'
import { openModal } from './../../../actions/modal_actions';

const msp = state => {
  const currentUser = state.entities.users[state.session.id];
  debugger
  return {
    currentUser: currentUser,
    notebooks: Object.values(state.entities.notebooks),
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    openModal: (string, paydirt) => dispatch(openModal(string, paydirt)),
  };
};

const MenuContainer = withRouter(connect(msp, mdp)(Menu));
export default MenuContainer;
