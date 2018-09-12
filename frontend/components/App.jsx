import React               from 'react';
import GreetingContainer   from './greeting/greeting_container';
import { Route, Switch }   from 'react-router-dom';
import LoginFormContainer  from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';

const App = () => (
  <nav>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </nav>
);

export default App;
