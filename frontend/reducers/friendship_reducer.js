import { RECEIVE_FRIENDSHIP, RECEIVE_ALL_FRIENDSHIPS} from '../actions/friendship_actions';

const friendshipReducer = (state = {}, action) => {
 
    Object.freeze(state);
    // debugger 
    switch(action.type) {
      case RECEIVE_FRIENDSHIP:
        const newFriendship = {[action.friendship.id]: action.friendship};
        return Object.assign({}, state, newFriendship);
      case RECEIVE_ALL_FRIENDSHIPS:
        return action.friendships;
      default:
        return state;
  }
     
};
  
export default friendshipReducer;
  