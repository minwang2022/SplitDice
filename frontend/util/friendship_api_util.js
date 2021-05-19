export const getFriendships = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friendships`
    })
)

export const addFriendship = (userId, friendId) => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: {friendship: {user_id: userId, friend_id: friendId}}
    })
)

// export const deleteFriendship = friendshipId => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/friendships/${friendshipId}`
//     })
// )

// export const searchFriends = (query) => (
//     $.ajax({
//       url: "/api/users/searchFriends",
//       method: "GET",
//       data: { query }
//     })
// );
  
//   export const searchUsers = (query) => (
//     $.ajax({
//       url: 'api/users/searchUsers',
//       method: 'GET',
//       data: {query}
//     })
//   );