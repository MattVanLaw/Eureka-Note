# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#

class Note < ApplicationRecord
  validates :title, presence: true

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :notebook,
  foreign_key: :notebook_id,
  class_name: :Notebook
end
