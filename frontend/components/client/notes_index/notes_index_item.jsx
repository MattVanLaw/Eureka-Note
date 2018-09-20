import React from 'react';
import { formatDateTime, formatTime } from "./../../../util/date_util";
import Quill from './quill';
import { connect } from 'react-redux';
import { receiveView } from './../../../actions/view_actions';
import { Route, withRouter } from 'react-router-dom';
class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cleanText = this.props.note.body.replace(/<[^>]+>/g, '');
    if (cleanText.length > 80) cleanText = cleanText.slice(0, 80) + "...";
    const notesPage = this.props.location.pathname === "/client/notes";
    return(
      <div onClick={() => this.props.receiveView(this.props.note.id)}
           className="notes-index-item-container">
        <div className="notes-index-item-title">
          {this.props.note.title}
        </div>
        <div className="notes-index-item-dek">
          {`${cleanText}`}
        </div>
        <div className="note-update-date">
          {formatTime(this.props.note.updated_at)}
        </div>
        {
          this.props.viewId === this.props.note.id ?
            <Quill note={this.props.note} /> :
            (this.props.topNbNote ? <Quill note={this.props.topNbNote} /> : null)  
        }
      </div>
    );
  }
};

const msp = (state, ownProps) => {
  const currentNbId = parseInt(ownProps.match.params.id);
  return {
    viewId: state.ui.view,
    notes: Object.values(state.entities.notes),
    topNbNote: Object.values(state.entities.notes)
                   .filter(note => note.notebook_id === currentNbId)[0],
  };
};

const mdp = dispatch => {
  return {
    receiveView: id => dispatch(receiveView(id)),
  };
};

export default withRouter(connect(msp, mdp)(NotesIndexItem));
