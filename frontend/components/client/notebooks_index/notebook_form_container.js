import NotebookForm   from './notebook_form';
import { connect }    from 'react-redux';
import { createNotebook } from './../../../actions/notebook_actions';
import { openModal, closeModal } from './../../../actions/modal_actions';

const mdp = dispatch => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    openModal: (string) => dispatch(openModal(string)),
    closeModal: () => dispatch(closeModal()),
  };
};

const NotebookFormContainer = connect(null, mdp)(NotebookForm);

export default NotebookFormContainer;
