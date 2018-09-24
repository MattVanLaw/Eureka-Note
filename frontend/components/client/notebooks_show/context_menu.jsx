import React from "react";
import { openModal } from "./../../../actions/modal_actions";
import { deleteNotebook } from "./../../../actions/notebook_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ShowContextMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section onClick={(e) => e.stopPropagation()}
        className="notebook-show-context-menu">
        <div onClick={() => this.props.openModal("updateNotebook", this.props.notebook)}>
          Rename notebook
        </div>
        <Link
          to="/client/notebooks"
          onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>
          Delete notebook
        </Link>
      </section>
    );
  }
}

const mdp = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    openModal: (string, notebook) => dispatch(openModal(string, notebook)),
  };
};

export default connect(null, mdp)(ShowContextMenu);
