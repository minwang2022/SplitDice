import * as util from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
// export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
// export const RECEIVE_SEARCHED_FRIENDS = "RECEIVE_SEARCHED_FRIENDS";
// export const CLEAR_SEARCH = "CLEAR_SEARCH";
// export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";

// export const removeFriendship = friendshipId => ({
//     type: REMOVE_FRIENDSHIP,
//     friendshipId
// });

export const receiveFriendship = friendship => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
});



export const receiveAllFriendships = friendships => ({
    type: RECEIVE_ALL_FRIENDSHIPS,
    friendships
});


export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

// export const receiveSearchedFriends = friends =>({
//     type: RECEIVE_SEARCHED_FRIENDS,
//     friends
// });

// export const clearSearch = ()=>({
//     type: CLEAR_SEARCH
// });

// export const receiveSearchedUsers = users => ({
//     type: RECEIVE_SEARCHED_USERS,
//     users
// });

// thunk action middleware
export const getFriendships = (userId) => dispatch => (
    util.getFriendships(userId).then(
        friendships => dispatch(receiveAllFriendships(friendships)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const addFriendship = (userId, friendId) => dispatch => (
    util.addFriendship(userId, friendId).then(
        friendship => dispatch(receiveFriendship(friendship)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);


// export const deleteFriendship = (friendshipId) => dispatch =>(
//     util.deleteFriendship(friendshipId).then(
//         () => dispatch(removeFriendship(friendshipId)),
//         err => dispatch(receiveErrors(err.responseJSON))
//     )
// );


// export const searchFriends = (query) => dispatch => (
//     util.searchFriends(query).then(
//         (friends) => dispatch(receiveSearchedFriends(friends))
//     )
// );
  
//   export const searchUsers = (query) => dispatch => (
//     util.searchUsers(query).then(
//         (users) => dispatch(receiveSearchedUsers(users))
//     )
// );
  
