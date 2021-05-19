import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import friendship from './friendship_errors_reducer';

export default combineReducers({
  session,
  friendship
});
