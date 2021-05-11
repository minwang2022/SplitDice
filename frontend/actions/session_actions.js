import * as Util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch =>(
    Util.login(user)
    .then( user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const logout = () => dispatch =>(
    Util.logout()
    .then( () => (dispatch(logoutCurrentUser())),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const signUp = user => dispatch =>(
    Util.signUp(user)
    .then( user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);


