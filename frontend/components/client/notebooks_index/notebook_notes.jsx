import React from 'react';
import { Link } from 'react-router-dom';

class NotebookNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <ul className="notebook-notes">
        {
        this.props.notes[0] !== undefined ? this.props.notes.map((note, idx) => (
            <li key={idx}>
              <i className="far fa-file-alt"></i>
              <Link to="#" className="notebook-show-link">
                {note.title}
              </Link>
            </li>
          )) : null
        }
      </ul>
    );
  }
}

export default NotebookNotes;
