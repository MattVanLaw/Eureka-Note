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

const msp = ({ entities, session }, ownProps) => {
  const user = entities.users[session.id];
  return {
    currentUser: user,
    notebooks: Object.values(entities.notebooks),
    notes: Object.values(entities.notes),
    tags: Object.values(entities.tags),
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotes: () => dispatch(fetchNotes()),
  createNote: note => dispatch(createNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  updateNote: note => dispatch(updateNote(note)),
  fetchTags: () => dispatch(fetchTags()),
});

const ClientContainer = connect(msp, mdp)(Client);
export default ClientContainer;
