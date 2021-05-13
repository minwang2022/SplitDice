class AddColumnToBills < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :split_percentage, :float, null: false
  end
end
