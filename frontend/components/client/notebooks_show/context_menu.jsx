import React from "react";
import { openModal } from "./../../../actions/modal_actions";
import { deleteNotebook } from "./../../../actions/notebook_actions";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

class ShowContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteNotebook(this.props.notebook.id)
    this.setState({ redirect: true });
  }

  render() {
    const pathname = this.props.location.pathname;
    return(
      <section onClick={(e) => e.stopPropagation()}
        className="notebook-show-context-menu">
        {
          pathname.split('/')[2] === "notebooks" ?
        <div onClick={() => this.props.openModal("updateNotebook", this.props.notebook)}>
          Rename notebook
        </div>
        :
        null
        }
        <div
          onClick={this.handleDelete}>
          Delete notebook
        </div>
        {this.state.redirect ? <Redirect to="/client/notebooks" /> : null}
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

export default withRouter(connect(null, mdp)(ShowContextMenu));
