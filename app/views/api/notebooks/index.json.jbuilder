json.extract! @notebooks, :title do
  json.extract @notebooks.notes, :title
end
