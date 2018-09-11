import React           from 'react';
import ReactDOM        from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import * as Util from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //TESTS START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = Util.login;
  window.signup = Util.signup;
  //TESTS END

  const root  = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
