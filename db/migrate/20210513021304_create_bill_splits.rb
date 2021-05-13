class CreateBillSplits < ActiveRecord::Migration[5.2]
  def change
    create_table :bill_splits do |t|
      t.integer :bill_id, null: false
      t.integer :recipient_id, null: false
      t.boolean :recipient_paid, null: false
      t.float :bill_amount, null: false

      t.timestamps
    end

  
    add_index :bill_splits, :bill_id
    add_index :bill_splits, :recipient_id
  end
end

