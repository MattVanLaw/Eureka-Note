import React from 'react';

const NotesIndexItem = ({ note }) => {
  return(
    <div className="notes-index-item-container">
      <div className="notes-index-item-title">
        {note.title}
      </div>
      <div className="notes-index-item-dek">
        {`${note.body.slice(0, 75)}...`}
      </div>
      <div className="note-creation-date">
        {note.created_at}
      </div>
    </div>
  )
};

export default NotesIndexItem;
