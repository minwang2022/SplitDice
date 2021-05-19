import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import friendshipsReducer from './friendship_reducer';

export default combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer
  });
