import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
} from '../actions/note_actions';
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
    default:
      return state;
  }
};

export default NotesReducer;
