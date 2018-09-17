import React from 'react';
import { formatDateTime, formatTime } from "./../../../util/date_util";
const NotesIndexItem = ({ note }) => {
  return(
    <div className="notes-index-item-container">
      <div className="notes-index-item-title">
        {note.title}
      </div>
      <div className="notes-index-item-dek">
        {`${note.body.slice(0, 75)}...`}
      </div>
      <div className="note-update-date">
        {formatTime(note.updatedAt)}
      </div>
    </div>
  )
};

export default NotesIndexItem;
