import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, updateNote } from './../../../actions/note_actions';
import TaggingBar from './../tags/tagging_bar';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      id: this.props.note.id,
      openMenu: false,
      expand: false,
      interval: null,
    }
    this.update = this.update.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidMount() {
    // const interval = setInterval((e) => this.props.updateNote(this.state), 10000);
    // this.setState({ interval: interval });
  }
  componentWillUnmount() {
    // this.props.updateNote(this.state);
    // clearInterval(this.state.interval);
  }

  update(e, field) {
    this.setState({
      [field]: e.target.value,
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
            onChange={(e) => this.update(e, "title")}
            name="title"
            type="text"
            value={this.state.title}
            placeholder="Title"/>
          <textarea
            onChange={(e) => this.update(e, "body")}
            value={this.state.body}
            placeholder="start writing..."></textarea>
        </div>
        <TaggingBar note={this.props.note} tags={this.props.tags} />
      </section>
    );
  }
}

const msp = state => {
  const notes = state.entities.notes;
  return {
    tags: Object.values(state.entities.tags),
  }
}

const mdp = dispatch => {
  return {
    deleteNote: id   => dispatch(deleteNote(id)),
    updateNote: note => dispatch(updateNote(note)),
  };
};

export default connect(msp, mdp)(NoteShow);
