import * as util from '../util/friendship_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SEARCHED_FRIENDS = "RECEIVE_SEARCHED_FRIENDS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";


export const receiveFriend = friend => ({
    type: RECEIVE_Friend,
    friend
});

export const receiveAllFriends = friends => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
});

export const removeFriend = friendId => ({
    type: REMOVE_Friend,
    friendId
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const receiveSearchedFriends = friends =>({
    type: RECEIVE_SEARCHED_FRIENDS,
    friends
});

export const clearSearch = ()=>({
    type: CLEAR_SEARCH
});

export const receiveSearchedUsers = users => ({
    type: RECEIVE_SEARCHED_USERS,
    users
});

// thunk action middleware

export const addFriend = user => dispatch => (
    util.addFriend(user).then(
        friend => dispatch(receiveAllFriend(friend)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const getFriend = () => dispatch => (
    util.getFriend().then(
        friends => dispatch(receiveFriend(friends))
    )
);

export const deleteFriend = (friendId) => dispatch =>(
    util.deleteFriend(friendId).then(
        () => dispatch(removeFriend(friendId)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);


export const searchFriends = (query) => dispatch => (
    util.searchFriends(query).then(
        (friends) => dispatch(receiveSearchedFriends(friends))
    )

);
  
  export const searchUsers = (query) => dispatch => (
    util.searchUsers(query).then(
        (users) => dispatch(receiveSearchedUsers(users))
    )
);
  
