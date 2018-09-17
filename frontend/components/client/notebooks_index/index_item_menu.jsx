import React from 'react';

class IndexItemMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
    this.handleEdit = this.handleEdit.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  handleEdit() {
    //open new form modal
    this.props.openModal('updateNotebook', this.props.notebook);
  }
  handleDelete(notebookId) {
    this.toggleDisplay();
    this.props.deleteNotebook(notebookId)
  }
  render () {
    const notebookId = this.props.notebookId;
    return(
      <ul className="index-item-menu">
        <li onClick={() => this.handleEdit()}>Rename notebook</li>
        <li onClick={(e) => this.handleDelete(notebookId)}>
          Delete notebook
        </li>
      </ul>
    )
  }
}

export default IndexItemMenu;
