import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchNotebook, fetchNotebooks }
from './../../../actions/notebook_actions';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId);
  }
  componentWillReceiveProps(nextProp) {
    // this.props.fetchNotebook(this.props.notebookId);
  }

  render () {
    const notesLength = this.props.notes.length;
    return(
      <section className="notebook-show">
        <div className="index">
          <header>
            <div className="notebook-title">
              {this.props.notebook.title}
            </div>
            <div className="header-toolbar">
              <div className="toolbar-left">
                <div className="show-note-count">
                  {notesLength} {notesLength < 1 ? "Notes" : "Note"}
                </div>
              </div>
              <div className="toolbar-right">
              <i onClick={() => this.toggleMenu()}
                      className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </header>
          <section className="note-index-items">
            {this.props.notes.map(note => note.title)}
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
