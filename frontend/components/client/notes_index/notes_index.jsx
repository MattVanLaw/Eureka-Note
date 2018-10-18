import React from "react";
import { connect } from "react-redux";
import { createFilter } from 'react-search-input';
import { withRouter } from "react-router";
import { fetchNotes } from "./../../../actions/note_actions";
import NotesIndexItem from "./notes_index_item";
import ShowContextMenu from "./../notebooks_show/context_menu";
import MenuContainer from "./../menu/menu_container";

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.collapse = this.collapse.bind(this);
    this.searched = !parseInt(this.props.match.params.id);
    debugger
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  collapse() {
    this.setState({ display: false });
  }

  render () {
    const searchTerm = this.props.match.params.id;

    const filteredNotes = Object.values(this.props.allNotes).filter(createFilter(searchTerm, NOTE_KEYS_TO_FILTERS));
    debugger;
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
                All Notes
              </div>
              <div className="header-toolbar">
                <div className="toolbar-left">
                  <div className="show-note-count">
                    {notesLength} {notesLength < 1 ? "Notes" : "Note"}
                  </div>
                </div>
                <div
                  tabIndex="0" onBlur={ this.collapse }
                  onClick={() => this.setState({ display: !this.state.display })}
                  className="toolbar-right">
                  
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

const msp = state => {
  return {
    notes: Object.values(state.entities.notes),
  };
};

const mdp = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default withRouter(connect(msp, mdp)(NotesIndex));
