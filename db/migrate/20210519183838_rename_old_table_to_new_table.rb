class RenameOldTableToNewTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :bill_splits, :billsplits
  end
end
