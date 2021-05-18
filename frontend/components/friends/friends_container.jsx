import Friends from './friends';
import { addFriend, getFriend, searchFriends, clearSearch, searchUsers } from '../../actions/friendship_action';
import { connect } from 'react-redux';
import { selectAllFriends } from '../../reducers/selectors';

const mSTP = state => {
  return {
    friends: selectAllFriends(state.friends.users),
    search: selectAllFriends(state.friends.userResult),
    errors: state.friends.errors
  };
};

const mDTP = dispatch => {
  return {
    processFriendForm: (user) => dispatch(addFriend(user)),
    fetchFriends: () => dispatch(getFriend()),
    searchFriends: (query) => dispatch(searchFriends(query)),
    clearSearch: () => dispatch(clearSearch()),
    searchUsers: (query) => dispatch(searchUsers(query))
  };
};

export default connect(mSTP, mDTP)(Friends);
