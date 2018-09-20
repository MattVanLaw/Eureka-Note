import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  REMOVE_TAGGING,
  RECEIVE_TAGGING,
} from './../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return merge({}, state, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      const newState = merge({}, state);
      delete newState[action.tagId];
      return newState;
    case REMOVE_TAGGING:
      return merge({}, state);
    case RECEIVE_TAGGING:
      return action.tagging.tags;
    default:
      return state;
  }
}

export default TagsReducer;
