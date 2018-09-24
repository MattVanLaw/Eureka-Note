import * as NotebookApiUtil from "./../util/notebook_api_util";

export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export const fetchNotebooks = () => dispatch => (
  NotebookApiUtil
    .fetchNotebooks()
    .then(notebooks => dispatch(receiveAllNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  NotebookApiUtil
    .fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const updateNotebook = notebook => dispatch => (
  NotebookApiUtil
    .updateNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = notebook => dispatch => (
  NotebookApiUtil
    .createNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const deleteNotebook = notebookId => dispatch => (
  NotebookApiUtil
    .deleteNotebook(notebookId)
    .then(notebook => dispatch(removeNotebook(notebookId)))
);

const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks,
});

const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook,
});

const removeNotebook = notebookId => ({
  type: REMOVE_NOTEBOOK,
  notebookId,
});
