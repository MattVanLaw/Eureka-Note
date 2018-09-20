import { connect } from 'react-redux';
import { logout }  from './../../actions/session_actions';
import Client  from './client';
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
} from './../../actions/note_actions';
import { fetchNotebooks } from './../../actions/notebook_actions';
import { fetchTags } from './../../actions/tag_actions';
import { formatDateTime, formatTime } from "./../../util/date_util";
const msp = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user,
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes),
    tags: Object.values(state.entities.tags),
  };
};

const mdp = dispatch => ({
  logout:         () => dispatch(logout()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotes:     () => dispatch(fetchNotes()),
  createNote:     note => dispatch(createNote(note)),
  deleteNote:     noteId => dispatch(deleteNote(noteId)),
  updateNote:     note => dispatch(updateNote(note)),
  fetchTags:      () => dispatch(fetchTags()),
});

const ClientContainer = connect(msp, mdp)(Client);
export default ClientContainer;
