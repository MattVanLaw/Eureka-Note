json.extract! @notebook, :id, :title, :note_ids


# json.notes do
#   @notebook.notes.each do |note|
#     json.set! note.id do
#       json.partial! 'api/notes/note', note: note
#     end
#   end
# end
