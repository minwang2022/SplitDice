import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
// import bills from './bill_reducer';

export default combineReducers({
    entities,
    session,
    errors,
    // bills
  });