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
          this.props.noteTitles.map((title, idx) => (
            <li key={idx}>
              <i className="far fa-file-alt"></i>
              <Link to="#" className="notebook-show-link">{title}</Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default NotebookNotes;
