class Note < ApplicationRecord
  validates :title, :author_id, :notebook_id, presence: true

  belongs_to :author
  belongs_to :notebook
end
