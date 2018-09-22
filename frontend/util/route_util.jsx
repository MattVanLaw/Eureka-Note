import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact}) => {
  const toRender = (props) => {
    if (loggedIn) {
      return <Redirect to='/client/notes' />;
    } else {
      return <Component {...props} />;
    }
  }
  return <Route path={path} exact={exact} render={toRender} />
};

const Protected = ({ component: Component, path, loggedIn, exact}) => {
  const toRender = (props) => {
    if (!loggedIn) {
      return <Redirect to='/login' />;
    } else {
      return <Component {...props} />;
    }
  }
  return <Route path={path} exact={exact} render={toRender} />
};

const msp = state => {
  const user = state.session?
                state.session
                :
                {};
  return {
    loggedIn: Boolean(user.id),
  };
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
