import React           from 'react';
import ReactDOM        from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import * as Util from './actions/session_actions';
import * as NBUtil from './util/notebook_api_util';
document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root  = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
