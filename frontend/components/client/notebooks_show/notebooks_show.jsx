import React, { Component } from 'react'
import SearchInput, { createFilter } from 'react-search-input';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchNotebook } from "./../../../actions/notebook_actions";
import NotesIndexItem from "./../notes_index/notes_index_item";
import ShowContextMenu from "./context_menu";
import MenuContainer from "./../menu/menu_container";
const NOTE_KEYS_TO_FILTERS = ['title', 'body'];

//Take pathname and...if there's a search term like notebooks/85/hey , filter on hey and only load those notes. Change the title, too.
class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.collapse = this.collapse.bind(this);
    this.searched = this.props.location.pathname.split("/").length === 5;
  }
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId);
  }
  collapse() {
    this.setState({ display: false });
  }
  render () {
    const searchTerm = this.props.location.pathname.split("/")[4] || "";
    
    const filteredNotes = Object.values(this.props.notes).filter(createFilter(searchTerm, NOTE_KEYS_TO_FILTERS));
    debugger
    let notes;
    if (this.searched) {
      notes = filteredNotes;
    } else {
      notes = this.props.notes;
    }
    const notesLength = notes.length;

    return(
      <div>
        <MenuContainer />
        <section className="notebook-show">
          <div className="index">
            <header className="notebook-show-header">
              <div className="notebook-title">
                {this.searched ? searchTerm : this.props.notebook.title}
              </div>
              <div className="header-toolbar">
                <div className="toolbar-left">
                  <div className="show-note-count">
                    {notesLength} {notesLength > 1 ? "Notes" : "Note"}
                  </div>
                </div>
                <div
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
                </div>
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
    notes: Object.values(state.entities.notes)
      .filter(note => note_ids.includes(note.id)),
  };
};

const mdp = dispatch => {
  return {
    fetchNotebook: id => dispatch(fetchNotebook(id)),
  };
};

export default withRouter(connect(msp, mdp)(NotebookShow));
