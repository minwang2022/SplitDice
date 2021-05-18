class RemoveColumnFromBills < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :belong_to_group_id, :integer
   
  end
end
