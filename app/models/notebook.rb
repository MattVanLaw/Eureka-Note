# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :notes,
  foreign_key: :notebook_id,
  class_name: :Note
  
end
