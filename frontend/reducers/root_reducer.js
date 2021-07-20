import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import billReducer from './bill_reducer';
import ui from './ui_reducer';

export default combineReducers({
    entities,
    session,
    bills: billReducer,
    errors,
    ui,
  });