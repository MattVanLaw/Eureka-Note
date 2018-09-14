class RemoveIndexNotNullNotesTitle < ActiveRecord::Migration[5.2]
  def change
    remove_index :notes, :title
    remove_column :notes, :title
    add_column :notes, :title, :string
  end
end
