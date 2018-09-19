json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name, :note_ids
    end
  end
end
