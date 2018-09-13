import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username_or_email: "",
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
  // method for demo login.
  render() {
    return(
      <div className="form-container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="form">
          <img
            className="nav-logo"
            src={window.lightbulb}/>
          <h1>Eureka!
          <span className="subhead">Note</span></h1>
          <div className="logo-dek">Exclaim loudly whenever convenient!</div>
          <input
            type="text"
            placeholder={this.props.placeholder}
            onChange={(e) => this.update(e, "username_or_email")} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.update(e, "password")} />
          {this.renderErrors()}

          <button className="submit-button">Continue</button>
          <div className="form-footer">{this.props.otherDek}</div>
          <Link to={this.props.otherLink}>{this.props.otherText}</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
