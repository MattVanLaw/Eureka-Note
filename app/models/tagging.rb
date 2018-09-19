# == Schema Information
#
# Table name: taggings
#
#  id         :bigint(8)        not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  belongs_to :note
  belongs_to :tag

  validates :note_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :note_id }
end
