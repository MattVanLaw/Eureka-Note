import React               from 'react';
import SplashContainer   from './splash/splash_container';
import { Route, Switch }   from 'react-router-dom';
import LoginFormContainer  from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Section             from './sections/section';
import ClientContainer from './client/client_container';
import NotebookShow from './client/notebooks_show/notebooks_show';
import NotesIndex from './client/notes_index/notes_index';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import Modal from './modal.jsx';


const App = () => (
  <div>
    <Modal />
    <nav>
      <ProtectedRoute path="/client" component={ClientContainer} />
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/client/notebooks/:id" component={NotebookShow}/>
      <ProtectedRoute path="/client/notes" component={NotesIndex}/>
    </nav>
    <Route exact path="/" component={Section} />
  </div>
);

export default App;
