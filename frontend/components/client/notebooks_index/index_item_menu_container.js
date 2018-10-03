import IndexItemMenu from "./index_item_menu";
import { connect } from "react-redux";
import {
  updateNotebook,
  deleteNotebook
} from "./../../../actions/notebook_actions";
import { withRouter } from "react-router-dom";

const mdp = dispatch => {
  return {
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
  };
};

const IndexItemMenuContainer = withRouter(connect(null, mdp)(IndexItemMenu));
export default IndexItemMenuContainer;
