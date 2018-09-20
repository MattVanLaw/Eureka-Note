import React from 'react';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }
  updateTitle(e) {
    this.setState({
      title: e.target.value,
      id: this.props.notebook.id || null
    });
  };
  handleAction(e, state) {
    e.preventDefault();
    this.props.action(state)
    this.props.closeModal();
  }
  render() {
    const validTitle = this.state.title.length !== 0;
    return(
      <form onSubmit={(e) => this.handleAction(e, this.state)}>
        <div className="notebook-form-main">
          <div className="header-container">
            <div>Create new notebook</div>
            <i onClick={() => this.props.closeModal()} className="fas fa-times"></i>
          </div>
          <p>Notebooks are useful for grouping epiphany moments around a common theme,
            like &ldquo;Space&rdquo; or &ldquo;Taco Bell&rdquo;</p>
          <label>Name</label>
          <input
            name="title"
            onChange={(e) => this.updateTitle(e)}
            type="text"
            placeholder={this.props.notebook.title ?
              this.props.notebook.title : "Notebook name"}/>
        </div>
        <div className="notebook-form-buttons">
          <div onClick={() => this.props.closeModal()}>Cancel</div>
          <button
            onClick={(e) => this.handleAction(e, this.state)}
            type="button"
            disabled={!this.state.title}
            className={ validTitle ? "submit-button" : "" }>
            Continue
          </button>
        </div>
      </form>
    )
  }
}

export default NotebookForm;
