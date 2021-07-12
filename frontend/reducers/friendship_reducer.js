import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, RECEIVE_SEARCHED_FRIENDS, CLEAR_SEARCH, RECEIVE_SEARCHED_USERS} from '../actions/friendship_actions';



const friendshipReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let newState = Object.assign({}, state)
    // debugger 
    switch(action.type) {

      case RECEIVE_FRIEND:
        // debugger
        return action.friend;

      case RECEIVE_ALL_FRIENDS:
        // debugger
        return action.friends;

      case RECEIVE_SEARCHED_FRIENDS:
        let keys1 = Object.keys(action.friends);
        let tempStateTwo = {};
        let finalState;
        keys1.forEach((key) => {
          tempStateTwo[action.friends[key].id] = action.friends[key];
        });

        if ('userResult' in newState) {
          newState.userResult = tempStateTwo;
          finalState = newState;
        } else {
          const myState = Object.assign({}, { userResult: tempStateTwo }, newState);
          finalState = myState;
        }

        return finalState;

      case RECEIVE_SEARCHED_USERS: 
        let keysTwo = Object.keys(action.users);
        let tempStateThree = {};
        let finalStateTwo;
        keysTwo.forEach((key) => {
          tempStateThree[action.users[key].id] = action.users[key];
        });

        if ('userResult' in newState) {
          newState.userResult = tempStateThree;
          finalStateTwo = newState;
        } else {
          const myState = Object.assign({}, { userResult: tempStateThree }, newState);
          finalStateTwo = myState;
        }

        return finalStateTwo;

      case CLEAR_SEARCH:
        newState.userResult = [];
        return newState;
      
      default:
        return state;
  }
     
};
  
export default friendshipReducer;
  