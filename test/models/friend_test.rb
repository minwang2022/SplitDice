# == Schema Information
#
# Table name: friends
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer(4)       not null
#  user_id    :integer(4)       not null
#
# Indexes
#
#  index_friends_on_friend_id              (friend_id)
#  index_friends_on_user_id                (user_id)
#  index_friends_on_user_id_and_friend_id  (user_id,friend_id) UNIQUE
#
require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
