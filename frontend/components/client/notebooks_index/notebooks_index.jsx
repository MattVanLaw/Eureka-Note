import React from "react";
import NotebooksIndexItem from "./notebooks_index_item";
import { connect } from "react-redux";
import { openModal } from "./../../../actions/modal_actions";
import MenuContainer from "./../menu/menu_container";

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <MenuContainer />
        <section className="all-notebooks">
          <div className="all-notebooks-title">Notebooks</div>
          <div className="notebooks-toolbar">
            <h2>My notebook list</h2>
            <div>
              <span
                onClick={() => this.props.openModal("createNotebook")}
                className="add-notebook">
                <i className="fas fa-book"></i> New Notebook
              </span>
            </div>
          </div>
          <div className="notebooks-column-header">
            <div>TITLE</div>
            <div className="header-stats">
              <div>UPDATED</div>
              <div>CREATED</div>
              <div>ACTIONS</div>
            </div>
          </div>
          <ul>
            {this.props.notebooks.map((notebook, idx) => {
              return(<NotebooksIndexItem
                notes={this.props.notes}
                openModal={this.props.openModal}
                indexNumber={idx + 1}
                key={notebook.id}
                notebook={notebook}/>)
            })}
          </ul>
        </section>
      </div>
    );
  }
}
const mdp = dispatch => {
  return {
    openModal: (string, notebook) => dispatch(openModal(string, notebook)),
  };
};

export default connect(null, mdp)(NotebooksIndex);
