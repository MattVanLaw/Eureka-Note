import React               from 'react';
import GreetingContainer   from './greeting/greeting_container';
import { Route, Switch }   from 'react-router-dom';
import LoginFormContainer  from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Section             from './sections/section';
import NotesIndexContainer from './notes/notes_index_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';

const App = () => (
  <div>
    <nav>
      <ProtectedRoute exact path="/notes" component={NotesIndexContainer} />
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </nav>
    <Route exact path="/" component={Section} />
  </div>
);

export default App;
