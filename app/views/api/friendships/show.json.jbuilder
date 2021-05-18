json.set! @friend.id do 
    json.id @friendship.id
    json.friendId @friendship.friend_id
    json.userName @friendship.friend.username
end    