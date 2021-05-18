export const getFriend = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users/showFriends'
    })
)

export const addFriend = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/user/addFriend',
        data: { user }
    })
)

export const deleteFriend = userId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friendships/${userId}`
    })
)

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