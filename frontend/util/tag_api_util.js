export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tags',
  });
};

export const fetchTag = id => {
  return $.ajax({
    method: 'GET',
    url: `api/tags/${id}`,
  });
};

export const updateTag = tag => {
  //nope
}

export const createTag = tag => {
  return $.ajax({
    method: "POST",
    url: 'api/tags',
    data: { tag },
  });
};

export const deleteTag = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/notes/${id}`,
  });
};

export const addTagging = tagging => {
  return $.ajax({
    method: "POST",
    url: 'api/tags/add_tagging',
    data: tagging,
  });
};

export const deleteTagging = tagging => {
  return $.ajax({
    method: "DELETE",
    url: 'api/remove_tagging',
    data: tagging
  });
};
