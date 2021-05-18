@friendships.each do |friendship|
    json.set! friendship.id do
        json.id friendship.id
        json.friendId friendship.friend.id
        json.userName friendship.friend.username 

    end 

end 