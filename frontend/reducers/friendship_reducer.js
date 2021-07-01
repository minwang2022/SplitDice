import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, RECEIVE_SEARCHED_FRIENDS, CLEAR_SEARCH} from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
 
    Object.freeze(state);
    // debugger 
    switch(action.type) {
      case RECEIVE_FRIEND:
        const newFriendship = {[action.friendship.id]: action.friendship};
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
  