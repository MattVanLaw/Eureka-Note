import React from "react";

class IndexItemMenu extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = { display: false };
    this.handleEdit = this.handleEdit.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  handleEdit() {
    this.props.openModal("updateNotebook", this.props.notebook);
  }
  
  handleDelete(notebookId) {
    this.toggleDisplay();
    this.props.deleteNotebook(notebookId);
  }
  render () {
    const notebookId = this.props.notebookId;
    return(
      <ul className="index-item-menu">
        <li onClick={() => this.handleEdit()}>Rename notebook</li>
        { 
          this.props.indexNumber !== 1 ? 
          <li id="notebook-delete" onClick={() => this.handleDelete(notebookId)}>
            Delete notebook
          </li>
          :
          null
        }
      </ul>
    );
  }
}

export default IndexItemMenu;
