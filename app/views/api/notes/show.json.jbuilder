@note.each do |note|
  json.set! note.id do
    json.partial! 'api/notes/note', note: @note
    json.tag_ids note.tag_ids
  end
end
