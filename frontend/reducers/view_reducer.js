import { RECEIVE_VIEW } from '../actions/view_actions';

const viewReducer = (state = null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_VIEW:
      return action.view;
    default:
      return state;
  }
}

export default viewReducer;
