class RenameColumnFromBills < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :split_percentage
    add_column :bills, :nums_splits, :integer
  end
end
