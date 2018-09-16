import React from 'react';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.updateName = this.updateName.bind(this);
    this.handleCreation = this.handleCreation.bind(this);
  }
  updateName(e) {
    this.setState({
      title: e.target.value
    });
  };
  handleCreation(e, notebook) {
    e.preventDefault();
    this.props.createNotebook(notebook)
        .then(() => this.props.fetchNotebooks());
    this.props.closeModal();
  }
  render() {
    const validName = this.state.title.length !== 0;
    return(
      <form>
        <div className="notebook-form-main">
          <div className="header-container">
            <div>Create new notebook</div>
            <i onClick={() => this.props.closeModal()} className="fas fa-times"></i>
          </div>
          <p>Notebooks are useful for grouping epiphany moments around a common theme,
            like &ldquo;Space&rdquo; or &ldquo;Taco Bell&rdquo;</p>
          <label>Name</label>
          <input
            onChange={(e) => this.updateName(e)}
            type="text"
            placeholder="Notebook name"/>
        </div>
        <div className="notebook-form-buttons">
          <div>Cancel</div>
          <button
            onClick={(e) => this.handleCreation(e, this.state)}
            type="button"
            disabled={!this.state.title}
            className={ validName ? "submit-button" : "" }>
            Continue
          </button>
        </div>
      </form>
    )
  }
}

export default NotebookForm;
