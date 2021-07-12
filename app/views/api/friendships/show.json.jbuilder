json.set! @friendship.id do 
    json.id @friendship.id
    json.userId @friendship.user_id
    json.friendId @friendship.friend_id
    json.username friendship.friend.username 
end    