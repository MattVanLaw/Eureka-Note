# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :author_id, :notebook_id, presence: true

  belongs_to :author
  belongs_to :notebook
end
