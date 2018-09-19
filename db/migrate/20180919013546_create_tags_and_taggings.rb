class CreateTagsAndTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_index :tags, :name, unique: true

    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :taggings, :note_id
    add_index :taggings, :tag_id
    add_index :taggings, [:note_id, :tag_id], unique: true
  end
end
