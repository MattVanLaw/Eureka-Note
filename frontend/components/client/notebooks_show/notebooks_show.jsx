import React from 'react'
import { createFilter } from 'react-search-input';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchNotebook } from "./../../../actions/notebook_actions";
import { fetchNotes } from './../../../actions/note_actions';
import NotesIndexItem from "./../notes_index/notes_index_item";
import ShowContextMenu from "./context_menu";
import MenuContainer from "./../menu/menu_container";
const NOTE_KEYS_TO_FILTERS = ['title', 'body'];

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.collapse = this.collapse.bind(this);
    this.searched = !!this.props.match.params.term;
  }
  componentDidMount() {
    if (this.props.notebookId) this.props.fetchNotebook(this.props.notebookId);
    else this.props.fetchNotes();
  }
  collapse() {
    this.setState({ display: false });
  }
  render () {
    let notes;
    let searchTerm;
    if (this.searched) {
      searchTerm = this.props.match.params.term;
      notes = Object.values(this.props.allNotes).filter(createFilter(searchTerm, NOTE_KEYS_TO_FILTERS));
    } else {
      notes = this.props.notebookNotes;
    }
    const notesLength = notes.length;
    let title = this.props.notebook.title;
    if (this.props.notebook.title) title = title.length > 24 ? title.slice(0, 25) + "..." : title;
    return(
      <div>
        <MenuContainer />
        <section className="notebook-show">
          <div className="index">
            <header className="notebook-show-header">
              <div className="notebook-title">
                {this.searched ? searchTerm : title}
              </div>
              <div className="header-toolbar">
                <div className="toolbar-left">
                  <div className="show-note-count">
                    {notesLength} {notesLength > 1 ? "Notes" : "Note"}
                  </div>
                </div>
                {this.searched ? null : <div
                  tabIndex="0" onBlur={ this.collapse }
                  onClick={() => this.setState({ display: !this.state.display })}
                  className="toolbar-right">
                  <i className="fas fa-ellipsis-h"></i>
                  {
                    this.state.display ?
                      <ShowContextMenu notebook={this.props.notebook}/>
                      :
                      null
                  }
                </div>}
              </div>
            </header>
            <section className="note-index-items">
              {
                notes.map((note, key) => {
                  return <NotesIndexItem key={key} note={note} />;
                })
              }
            </section>
          </div>

        </section>
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  const notebook = state.entities.notebooks[id] || {};
  const note_ids = notebook.note_ids || [];
  return {
    notebookId: id,
    notebook: notebook,
    notebookNotes: Object.values(state.entities.notes)
      .filter(note => note_ids.includes(note.id)),
    allNotes: Object.values(state.entities.notes),
  };
};

const mdp = dispatch => {
  return {
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default withRouter(connect(msp, mdp)(NotebookShow));
