import * as TagApiUtil from './../util/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const ADD_TAGGING = "ADD_TAGGING";

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags().then(tags => dispatch(receiveAllTags(tags)))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)))
);

export const createTag = tag => dispatch => (
  TagApiUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)))
);

export const deleteTag = tagId => dispatch => (
  TagApiUtil.deleteTag(tagId).then(tag => dispatch(removeTag(tagId)))
);

export const addTagging = tagging => dispatch => {
  return TagApiUtil.addTagging(tagging)
            .then(newTagging => {
              return dispatch(createTagging(newTagging))
            })
};

export const deleteTagging = tagging => dispatch => (
  TagApiUtil.deleteTagging(tagging)
            .then(newTagging => dispatch(removeTagging(tagging)))
);

const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags,
});

const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag,
});

const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId,
});

const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging,
});

const createTagging = tagging => ({
  type: ADD_TAGGING,
  tagging,
});

const removeTagging = tagging => ({
    type: REMOVE_TAGGING,
    tagging,
});
