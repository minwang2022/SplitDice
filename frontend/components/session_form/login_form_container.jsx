import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
      errors: state.errors.session,
      formType: 'login',
      navLink: <Link to="/signUp">sign up</Link>,
    };
  };
  
  const mDTP = dispatch => {
    return {
      processForm: (user) => dispatch(login(user)),
    };
  };
  
  export default connect(mSTP, mDTP)(SessionForm);
  