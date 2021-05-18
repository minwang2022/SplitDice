# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  amount      :float            not null
#  bill_date   :date             not null
#  category    :string           not null
#  description :string           not null
#  note        :text
#  nums_splits :integer(4)
#  paid        :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer(4)       not null
#
# Indexes
#
#  index_bills_on_author_id  (author_id)
#
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
