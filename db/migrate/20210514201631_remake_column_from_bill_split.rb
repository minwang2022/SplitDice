class RemakeColumnFromBillSplit < ActiveRecord::Migration[5.2]
  def change
    remove_column :bill_splits, :recipient_paid
    add_column :bill_splits, :recipient_paid, :boolean, default: false
    rename_column :bill_splits, :bill_amount, :splited_bill_amount
  end
end
