# == Schema Information
#
# Table name: billsplits
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
#  index_billsplits_on_bill_id       (bill_id)
#  index_billsplits_on_recipient_id  (recipient_id)
#
class Billsplit < ApplicationRecord
    validates :bill_id, :recipient_id, presence: true
    

    belongs_to :bill,
        foreign_key: :bill_id,
        class_name: :Bill 
    
    belongs_to :recipient,
        foreign_key: :recipient_id,
        class_name: :User
    
    has_one :bill_author,
        foreign_key: :bill_id,
        class_name: :Bill

end
