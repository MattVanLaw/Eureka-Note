import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './../../../actions/note_actions';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Untitled',
      openMenu: false,
      expand: false,
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  //input value will be notebook title when it exists and is not untitled
  updateTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  openMenu() {
    this.setState({
      openMenu: true,
    });
  }
  closeMenu() {
    this.setState({
      openMenu: false,
    });
  }
  render() {
    return (
      <section onClick={(e) => e.stopPropagation()}
               className={`note-show-container ${ this.state.expand ? 'note-show-expand' : ''}`}>
        <header className="note-show-header">
          <div className='header-item-container'>
            <i onClick={() => this.setState({ expand: !this.state.expand })}
              className="fas fa-arrows-alt-h"></i>
            <div
              tabIndex="0" onBlur={ this.closeMenu }
              onClick={() => this.openMenu()}
              className="convenience-clickbox">
              {
                this.state.openMenu ?
                  <div
                    className="note-show-menu"
                    onClick={() => this.props.deleteNote(this.props.note.id)}>
                    Delete note
                  </div> : null
              }
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </header>
        <div className="note-show-buffer"></div>
        <div className="text-box-container">
          <input
            autoFocus
            onChange={(e) => this.updateTitle(e)}
            name="title"
            type="text"
            value={this.props.note.title}
            placeholder="Title"/>
          <textarea placeholder="start writing..."></textarea>
        </div>
        <footer className="tag-footer">
        </footer>
      </section>
    );
  }
}

const mdp = dispatch => {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
  };
};

export default connect(null, mdp)(NoteShow);
