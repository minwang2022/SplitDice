class RemakeColumnFromBills < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :note
    add_column :bills, :note, :text
  end
end
