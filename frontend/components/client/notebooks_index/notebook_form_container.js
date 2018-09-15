import NotebookForm   from './notebook_form';
import { connect }    from 'react-redux';
import { createNotebook } from './../../../actions/notebook_actions';

const mdp = dispatch => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  };
};

const NotebookFormContainer = connect(null, mdp)(NotebookForm);

export default NotebookFormContainer;
