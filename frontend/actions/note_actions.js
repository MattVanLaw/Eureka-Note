import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const fetchNotes = () => dispatch => {
  return NoteApiUtil
          .fetchNotes()
          .then(notes => dispatch(receiveAllNotes(notes)));
};

export const fetchNote = id => dispatch => {
  return NoteApiUtil
          .fetchNote(id)
          .then(note => dispatch(receiveNote(note)));
};

export const updateNote = note => dispatch => {
  return NoteApiUtil
          .updateNote(note)
          .then(note => dispatch(receiveUpdatedNote(note)));
};

export const createNote = note => dispatch => {
  return NoteApiUtil
          .createNote(note)
          .then(note => {
            return dispatch(receiveNote(note))
          });
};

export const deleteNote = noteId => dispatch => {
  return NoteApiUtil
          .deleteNote(noteId)
          .then(note => dispatch(removeNote(noteId)));
}

const receiveAllNotes = notes => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes,
  };
};

const receiveUpdatedNote = note => {
  return {
    type: UPDATE_NOTE,
    note,
  }
}

const receiveNote = note => {
  return {
    type: RECEIVE_NOTE,
    note,
  };
};

const removeNote = noteId => {
  return {
    type: REMOVE_NOTE,
    noteId,
  };
};
