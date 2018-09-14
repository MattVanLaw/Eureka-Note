import React from 'react';
import NotesIndexItem from './notes_index_item';

const NotesIndex = props => {
  return(
    <section className="all-notes">
      <div className="all-notes-header">All Notes</div>
      <div className="all-notes-toolbar">
        {props.notes.length} Note(s)
      </div>
      <ul>
        {props.notes.map(note => {
          return <NotesIndexItem key={note.id} note={note}/>;
        })}
      </ul>
    </section>
  )
}

export default NotesIndex;
