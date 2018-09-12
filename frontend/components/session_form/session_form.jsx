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
      <div className="login-form-container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
          <Link to="/">Eureka!Note</Link>
          <br/>
          Find your Eureka! moment.
          <br/>
          <input
            type="text"
            placeholder="Email address or username"
            onChange={(e) => this.update(e, "email")} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.update(e, "password")} />
          <button className="submit-button">{this.props.formType}</button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
