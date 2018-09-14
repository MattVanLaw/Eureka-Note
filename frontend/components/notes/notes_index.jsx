import React    from 'react';
import { Link } from 'react-router-dom';
import Menu from './notes_index_components/menu';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }

  render () {
    return (
      <header className="header-group">
        <Menu />
        <section className="notes-index-container">

        </section>
        <article className="note-show">
          // <header>
          //   <div><i>expand arrow</i>
          //    | {this.props.notebooks
          //           .map(notebook => <p>{notebook.title}</p>)}
          //   <i>...</i>
          //   </div>
          // </header>
        </article>

        <h2 className="header-name">{this.props.currentUser.username}</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
        <ul>
          {this.props.notes.map(note => {
            return <li>{note.id}{note.body}</li>;
          })}

        </ul>
      </header>)
  }
}

export default NotesIndex;
