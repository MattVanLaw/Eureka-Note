import { connect } from 'react-redux';
import React       from 'react';
import { Link }    from 'react-router-dom';
import { login }   from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">sign up instead</Link>,
    otherLink: "/signup",
    otherText: "Create account",
    otherDek: "Don't have an account?",
    placeholder: "Email address or username",
    inputType: "text",
  };
};

const mdp = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  login: user => dispatch(login(user)),
});

export default connect(msp, mdp)(SessionForm);
