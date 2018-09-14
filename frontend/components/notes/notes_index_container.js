import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';
import NotesIndex  from './notes_index';
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
} from './../../actions/note_actions';
import { fetchNotebooks } from './../../actions/notebook_actions';

const msp = (state) => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user,
    notes: Object.values(state.entities.notes),
    notebooks: Object.values(state.entities.notebooks),
  };
};

const mdp = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotes: () => dispatch(fetchNotes()),
  createNote: note => dispatch(createNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  updateNote: note => dispatch(updateNote(note)),
  logout: () => dispatch(logout()),
});

const NotesIndexContainer = connect(msp, mdp)(NotesIndex);
export default NotesIndexContainer;
