import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

const NotebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return merge({}, state, action.notebooks);
    case RECEIVE_NOTE:
      return merge({}, state, {
        [action.notebook.id]: action.notebook,
      });
    case REMOVE_NOTE:
      const  newState = merge({}, state);
      delete newState[action.notebook.id];
      return newState;
    default:
      return state;
  }
};

export default NotebooksReducer;
