# == Schema Information
#
# Table name: friendships
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer(4)       not null
#  user_id    :integer(4)       not null
#
# Indexes
#
#  index_friendships_on_friend_id              (friend_id)
#  index_friendships_on_user_id                (user_id)
#  index_friendships_on_user_id_and_friend_id  (user_id,friend_id) UNIQUE
#
class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true
    validates :user_id, uniqueness: {scope: :friend_id}


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

end
