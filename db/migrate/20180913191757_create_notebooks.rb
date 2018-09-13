class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :notebooks, :title, unique: true
    add_index :notebooks, :author_id
  end
end
