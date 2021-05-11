import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = state => {
    return {
      errors: state.errors.session,
      formType: 'signUp',
    };
  };
  
  const mDTP = dispatch => {
    return {
      processForm: (user) => dispatch(signUp(user)),
    };
  };
  
  export default connect(mSTP, mDTP)(SessionForm);
  