class RemoveTitleIndexOnNotebooksTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :notebooks, :title
  end
end
