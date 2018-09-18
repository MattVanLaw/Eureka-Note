import React from 'react';
import { connect } from 'react-redux';
import { createNote } from './../../../actions/note_actions';
import { closeModal } from './../../../actions/modal_actions';
import { Redirect } from 'react-router-dom';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notebook_id: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, notebook) {
    debugger
    e.preventDefault();
    this.props.createNote(this.state).then(() => this.props.closeModal());
  }

  render () {
    return(
      <div className="note-create-form-container">
        <form onSubmit={(e) => this.handleSubmit(e, notebook)}
          className="note-create-form">
          <div className="form-title">Create new note in...<i className="fas fa-times"></i></div>
          <div className="select-notebook-container">
          {
            this.props.notebooks.map((notebook, key) => {
              return (
                <div key={key}
                  className={`select-notebook ${this.state.notebook_id === notebook.id ? 'selected-notebook' : ''}`}
                  onClick={() => this.setState({ notebook_id: notebook.id })}
                ><span>
                   <i className="fas fa-book"></i>
                   <div className="true-title">{notebook.title}</div>
                 </span>
                </div>);

            })
          }
        </div>
        </form>
        <div className="button-container">
          <button
            type="button"
            onClick={() => this.props.closeModal()}
            className="cancel-button">Cancel</button>
          <button
            type="button"
            className="submit-button"
            onClick={(e) => this.handleSubmit(e, notebook)}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

//need closeModal and createNote in props
const mdp = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mdp)(NoteCreateForm);
