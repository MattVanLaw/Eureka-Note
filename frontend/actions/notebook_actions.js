import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export const fetchNotebooks = () => dispatch => {
  return NotebookApiUtil
          .fetchNotebooks()
          .then(notebooks => dispatch(receiveAllNotebooks(notebooks)));
};

export const fetchNotebook = id => dispatch => {
  return NotebookApiUtil
          .fetchNotebook(id)
          .then(notebook => dispatch(receiveNotebook(notebook)));
};

export const updateNotebook = notebook => dispatch => {
  return NotebookApiUtil
          .updateNotebook(notebook)
          .then(notebook => dispatch(receiveNotebook(notebook)));
};

export const createNotebook = notebook => dispatch => {
  return NotebookApiUtil
          .createNotebook(notebook)
          .then(notebook => dispatch(receiveNotebook(notebook)));
};

export const deleteNotebook = notebookId => dispatch => {
  return NotebookApiUtil
          .deleteNotebook(notebookId)
          .then(notebook => dispatch(removeNotebook(notebookId)));
}

const receiveAllNotebooks = notebooks => {
  return {
    type: RECEIVE_ALL_NOTEBOOKS,
    notebooks,
  };
};

const receiveNotebook = notebook => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook,
  };
};

const removeNote = notebookId => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId,
  };
};
