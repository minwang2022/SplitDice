class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.float :amount, null:false
      t.string :description, null:false
      t.date :bill_date, null:false
      t.integer :author_id, null:false
      t.boolean :paid, default: false
      t.integer :belong_to_group_id, null:false
      t.string :note, null:false
      t.string :category, null:false

      t.timestamps
    end

    add_index :bills, :author_id
    add_index :bills, :belong_to_group_id
  end
end
