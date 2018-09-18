import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchNotebook, fetchNotebooks }
from './../../../actions/notebook_actions';
import NotesIndexItem from './../notes_index/notes_index_item';
import ShowContextMenu from './context_menu';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId);
  }
  componentWillReceiveProps(nextProp) {
    // this.props.fetchNotebook(this.props.notebookId);
    this.state.display
  }

  render () {
    const notesLength = this.props.notes.length;
    return(
      <section className="notebook-show">
        <div className="index">
          <header className="notebook-show-header">
            <div className="notebook-title">
              {this.props.notebook.title}
            </div>
            <div className="header-toolbar">
              <div className="toolbar-left">
                <div className="show-note-count">
                  {notesLength} {notesLength < 1 ? "Notes" : "Note"}
                </div>
              </div>
              <div
                onClick={() => this.setState({ display: !this.state.display })}
                className="toolbar-right">
              <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </header>
          {
            this.state.display ?
              <ShowContextMenu
                onClick={(e) => e.stopPropagation()}
                notebook={this.props.notebook}/>
                :
              null
          }
          <section className="note-index-items">
            {
              this.props.notes.map((note, key) => {
                return <NotesIndexItem key={key} note={note} />
              })
            }
          </section>
        </div>

      </section>
    )
  }
}

const msp = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  const notebook = state.entities.notebooks[id] || {};
  const note_ids = notebook.note_ids || [];
  return {
    notebookId: id,
    notebook: notebook,
    notes: Object.values(state.entities.notes)
                .filter(note => note_ids.includes(note.id)),
  };
}
const mdp = dispatch => {
  return {
    fetchNotebook: id => dispatch(fetchNotebook(id)),
  };
}

export default withRouter(connect(msp, mdp)(NotebookShow))
