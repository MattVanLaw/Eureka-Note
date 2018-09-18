import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
} from '../actions/notebook_actions';
import { RECEIVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const NotebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return merge({}, state, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {
        [action.notebook.id]: action.notebook,
      });
    case RECEIVE_NOTE:
      const newerState = merge({}, state);
      const notebook = newerState[action.note.notebook_id];
      const newNotebook = notebook.note_ids.push(action.note.id);
      return newerState;
    case REMOVE_NOTEBOOK:
      const  newState = merge({}, state);
      delete newState[action.notebookId];
      return newState;
    default:
      return state;
  }
};

export default NotebooksReducer;
