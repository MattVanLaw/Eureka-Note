import { combineReducers } from 'redux';
import modal from './modal_reducer';
import viewReducer from './view_reducer';
export default combineReducers({
  modal,
  view: viewReducer,
});
