import * as util from '../util/friendship_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const RECEIVE_SEARCHED_FRIENDS = "RECEIVE_SEARCHED_FRIENDS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";

export const removeFriend = friend => ({
    type: REMOVE_FRIEND,
    friend
});

export const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
});



export const receiveAllFriends = friends => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
});


export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

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
export const getFriends = (userId) => dispatch => (
    util.getFriends(userId).then(
        friends => dispatch(receiveAllFriends(friends)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const addFriend = (user) => dispatch => (
    util.addFriend(user)
        .then(
        friend => dispatch(receiveFriend(friend)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);


export const deleteFriend = (friend) => dispatch =>(
    util.deleteFriend(friend).then(
        () => dispatch(removeFriend(friend)),
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
  
