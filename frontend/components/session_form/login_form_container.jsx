import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
      errors: state.errors.session,
      formType: 'login',
      navLink: <Link to="/signup">sign up</Link>,
    };
  };
  
  const mDTP = dispatch => {
    return {
      processForm: (user) => dispatch(login(user)),
      removeErrors: () => dispatch(removeErrors()),
    };
  };
  
  export default connect(mSTP, mDTP)(SessionForm);
  