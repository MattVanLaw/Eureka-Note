import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchNote, fetchNotes }
from './../../../actions/note_actions';
import NotesIndexItem from './notes_index_item';
import ShowContextMenu from './../notebooks_show/context_menu';
import MenuContainer from './../menu/menu_container';
class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.collapse = this.collapse.bind(this);
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  collapse() {
    this.setState({ display: false });
  }
  render () {
    const notesLength = this.props.notes.length;
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
                  <i className="fas fa-ellipsis-h"></i>

                </div>
              </div>
            </header>
            <section className="note-index-items">
              {
                this.props.notes.map((note, key) => {
                  return <NotesIndexItem key={key} note={note} />
                })
              }
            </section>
          </div>

        </section>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    notes: Object.values(state.entities.notes),
  };
}
const mdp = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
}

export default withRouter(connect(msp, mdp)(NotesIndex))
