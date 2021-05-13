# == Schema Information
#
# Table name: bills
#
#  id                 :bigint(8)        not null, primary key
#  amount             :float            not null
#  bill_date          :date             not null
#  category           :string           not null
#  description        :string           not null
#  note               :string           not null
#  paid               :boolean          default(FALSE)
#  split_percentage   :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  author_id          :integer(4)       not null
#  belong_to_group_id :integer(4)       not null
#
# Indexes
#
#  index_bills_on_author_id           (author_id)
#  index_bills_on_belong_to_group_id  (belong_to_group_id)
#
class Bill < ApplicationRecord
    validates :amount, :description, :billdate, :author_id, presence: true
    
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
