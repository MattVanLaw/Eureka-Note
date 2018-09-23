import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">login instead</Link>,
    otherLink: "/login",
    otherText: "Sign in",
    otherDek: "Already have an account?",
    placeholder: "Email",
    inputType: "email",
  };
};

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
});

export default connect(msp, mdp)(SessionForm);
