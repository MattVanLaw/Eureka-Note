import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./../util/route_util";
import Modal from "./modal.jsx";
import NotebookShow from "./client/notebooks_show/notebooks_show";
import NotesIndex from "./client/notes_index/notes_index";
import ClientContainer from "./client/client_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container";


const App = () => (
  <div>
    <Modal />
    <nav>
      <ProtectedRoute path="/client" component={ClientContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Switch>
        <ProtectedRoute exact path="/client/notebooks/:id" component={NotebookShow}/>
        <ProtectedRoute exact path="/client/search/:term" component={NotebookShow}/>
      </Switch>
      
      <ProtectedRoute path="/client/notes" component={NotesIndex}/>
    </nav>
    
  </div>
);

export default App;
