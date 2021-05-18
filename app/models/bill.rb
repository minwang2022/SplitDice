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
class Bill < ApplicationRecord
    validates :amount, :description, :bill_date, :author_id, :nums_splits, presence: true
    
    belongs_to :bill_author,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :bill_splits,
        foreign_key: :bill_id,
        class_name: :Bill_split
    
    has_many :bill_recipients,
        through: :bill_splits,
        source: :recipient
    
    



end
