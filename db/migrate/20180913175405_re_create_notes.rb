class ReCreateNotes < ActiveRecord::Migration[5.2]
  drop_table :notes
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :author_id, null: false
      t.integer :notebook_id, null: false
      t.timestamps
    end
    add_index :notes, :title, unique: true
    add_index :notes, :author_id
    add_index :notes, :notebook_id
  end
end
