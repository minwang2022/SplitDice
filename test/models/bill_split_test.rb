# == Schema Information
#
# Table name: bill_splits
#
#  id                  :bigint(8)        not null, primary key
#  recipient_paid      :boolean          default(FALSE)
#  splited_bill_amount :float            not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  bill_id             :integer(4)       not null
#  recipient_id        :integer(4)       not null
#
# Indexes
#
#  index_bill_splits_on_bill_id       (bill_id)
#  index_bill_splits_on_recipient_id  (recipient_id)
#
require 'test_helper'

class BillSplitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
