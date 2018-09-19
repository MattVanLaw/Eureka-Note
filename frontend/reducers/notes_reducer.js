import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
} from './../actions/note_actions';
import { RECEIVE_TAG } from './../actions/tag_actions';
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
    default:
      return state;
  }
};

export default NotesReducer;
