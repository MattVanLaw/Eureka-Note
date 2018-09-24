import NotebookForm   from "./notebook_form";
import { connect }    from "react-redux";
import { createNotebook } from "./../../../actions/notebook_actions";
import { closeModal } from "./../../../actions/modal_actions";
import { fetchNotebooks } from "./../../../actions/notebook_actions";

const msp = () => ({
  notebook: {id: null, title: ""},
});

const mdp = dispatch => ({
  action: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
});

const NotebookCreateFormContainer = connect(msp, mdp)(NotebookForm);

export default NotebookCreateFormContainer;
