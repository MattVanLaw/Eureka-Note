import React from 'react';
import { formatDateTime, formatTime } from "./../../../util/date_util";
import NoteShow from './notes_show';
import { connect } from 'react-redux';
import { receiveView } from './../../../actions/view_actions';
//Make a class, add state to track selected. default false. onclick set true
//pull up notesindexitemshow component
class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div onClick={() => this.props.receiveView(this.props.note.id)}
           className="notes-index-item-container">
        <div className="notes-index-item-title">
          {this.props.note.title}
        </div>
        <div className="notes-index-item-dek">
          {`${this.props.note.body.slice(0, 75)}...`}
        </div>
        <div className="note-update-date">
          {formatTime(this.props.note.updated_at)}
        </div>
        {
          this.props.viewId === this.props.note.id ?
            <NoteShow note={this.props.note} /> : null
        }
      </div>
    );
  }
};

const msp = state => {
  return {
    viewId: state.ui.view,
  };
};

const mdp = dispatch => {
  return {
    receiveView: id => dispatch(receiveView(id)),
  };
};

export default connect(msp, mdp)(NotesIndexItem);
