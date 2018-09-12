import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e, field) {
    return this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="form-container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="form">
          <img
            className="nav-logo"
            src={window.lightbulb}/>
          <h1>Eureka!</h1>
          <div className="logo-dek">Exclaim whenever convenient</div>
          <input
            type="text"
            placeholder="Email address or username"
            onChange={(e) => this.update(e, "email")} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.update(e, "password")} />
          <button className="submit-button">Continue</button>
          <div>{this.props.otherDek}</div>
          <Link to={this.props.otherLink}>{this.props.otherText}</Link>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
