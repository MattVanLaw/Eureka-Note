import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
} from './../actions/note_actions';
import { RECEIVE_TAG, REMOVE_TAGGING, ADD_TAGGING } from './../actions/tag_actions';
import { LOGOUT_CURRENT_USER } from './../actions/session_actions';
import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case UPDATE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      const newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case RECEIVE_TAG:
      const newerState = merge({}, state);
      const note = newerState[action.tag.note_ids[0]];
      const newNote = note.tag_ids.push(action.tag.id);
      return newerState;
    case ADD_TAGGING:
    const newnewState = merge({}, state);
    const currentNote = newnewState[action.tagging.note_id];
    currentNote.tag_ids.push(parseInt(action.tagging.tag_id));
    return newnewState;
    case REMOVE_TAGGING:
      const newestState = merge({}, state);
      const currenterNote = newestState[action.tagging.note_id];
      const tagId = action.tagging.tag_id;
      const tagIdIdx = currenterNote.tag_ids.indexOf(tagId);
      const newerNote = currenterNote.tag_ids.splice(tagIdIdx, 1);
      return newestState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default NotesReducer;
