import React from 'react';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.updateName = this.updateName.bind(this);
  }
  updateName(e) {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    const validName = this.state.name.length !== 0;
    return(
      <form onSubmit={() => this.props.createNotebook(this.state)}>
        <div className="notebook-form-main">
          <div className="header-container">
            <div>Create new notebook</div>
            <i className="fas fa-times"></i>
          </div>
          <p>Notebooks are useful for grouping notes around a common topic.</p>
          <label>Name</label>
          <input
            onChange={(e) => this.updateName(e)}
            type="text"
            placeholder="Notebook name"/>
        </div>
        <div className="notebook-form-buttons">
          <div>Cancel</div>
          <button
            type="button"
            disabled={!this.state.name}
            className={ validName ? "submit-button" : "" }>
            Continue
          </button>
        </div>
      </form>
    )
  }
}

export default NotebookForm;
