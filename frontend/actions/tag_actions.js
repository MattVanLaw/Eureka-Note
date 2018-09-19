import * as TagApiUtil from './../util/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const fetchTags = () => dispatch => {
  return TagApiUtil
          .fetchTags()
          .then(tags => dispatch(receiveAllTags(tags)));
};

export const fetchTag = id => dispatch => {
  return TagApiUtil
          .fetchTag(id)
          .then(tag => dispatch(receiveTag(tag)));
};

export const createTag = tag => dispatch => {
  return TagApiUtil
          .createTag(tag)
          .then(tag => {
            return dispatch(receiveTag(tag));
          });
};

export const deleteNote = tagId => dispatch => {
  return TagApiUtil
          .deleteTag(tagId)
          .then(tag => dispatch(removeTag(tagId)));
};

export const addTagging = tagging => dispatch => {
  return APIUtil
          .addTagging(tagging)
          .then(newTagging => dispatch(receiveTagging(newTagging)));
};

export const deleteTagging = tagging => dispatch => {
  return APIUtil
          .deleteTagging(tagging)
          .then(newTagging => dispatch(receiveTagging(newTagging)));
};

const receiveAllTags = tags => {
  return {
    type: RECEIVE_ALL_TAGS,
    tags,
  };
};

const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag,
  }
}

const removeTag = tagId => {
  return {
    type: REMOVE_TAG,
    tagId,
  };
};

const receiveTagging = tagging => {
  return {
    type: RECEIVE_TAGGING,
    tagging
  };
};

const removeTagging = tagging => {
  return {
    type: REMOVE_TAGGING,
    tagging
  };
};
