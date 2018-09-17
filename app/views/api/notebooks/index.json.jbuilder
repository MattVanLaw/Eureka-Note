@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :title, :created_at, :updated_at
    json.note_ids notebook.note_ids
  end
end
