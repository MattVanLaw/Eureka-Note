json.key_format! camelize: :lower
json.array! @notes, :id, :title, :body, :notebook_id, :updated_at
