import NotebookForm   from './notebook_form';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router'
import { updateNotebook } from './../../../actions/notebook_actions';
import { closeModal } from './../../../actions/modal_actions';
import { fetchNotebooks } from './../../../actions/notebook_actions';
const msp = state => {
  return {
    notebook: { title: "" },
  };
}
const mdp = dispatch => {
  return {
    action: (notebook) => dispatch(updateNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

const NotebookUpdateFormContainer = connect(null, mdp)(NotebookForm);

export default withRouter(NotebookUpdateFormContainer);
