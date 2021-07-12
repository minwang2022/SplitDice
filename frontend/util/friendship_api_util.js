export const getFriends = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friendships`
    })
);

export const addFriend = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users/addFriend',
        data: {user}
    })
);

export const deleteFriend = friendshipId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friendships/${friendshipId}`
    })
);

export const searchFriends = (query) => (
    $.ajax({
      url: "/api/users/searchFriends",
      method: "GET",
      data: { query }
    })
);
  
export const searchUsers = (query) => (
    $.ajax({
        url: 'api/users/searchUsers',
        method: 'GET',
        data: {query}
    })
);