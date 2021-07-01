import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS} from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
 
    Object.freeze(state);
    // debugger 
    switch(action.type) {
      case RECEIVE_FRIEND:
        const newFriendship = {[action.friend.id]: action.friend};
        return Object.assign({}, state, newFriendship);
      case RECEIVE_ALL_FRIENDS:
        return action.friendships;
      case RECEIVE_SEARCHED_FRIENDS:

      case CLEAR_SEARCH:
        newState.userResult = [];
        return newState;
      
      default:
        return state;
  }
     
};
  
export default friendshipReducer;
  