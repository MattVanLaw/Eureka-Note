import * as NoteApiUtil from "../util/note_api_util";

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes().then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchNote = id => dispatch => (
  NoteApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
);

export const updateNote = note => dispatch => (
  NoteApiUtil.updateNote(note).then(note => dispatch(receiveUpdatedNote(note)))
);

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
  NoteApiUtil.deleteNote(noteId).then(() => dispatch(removeNote(noteId)))
);

const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes,
});

const receiveUpdatedNote = note => ({
  type: UPDATE_NOTE,
  note,
});

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note,
});

const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId,
});
