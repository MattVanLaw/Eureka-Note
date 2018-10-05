import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username_or_email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
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
  
  handleDemoSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {
      username_or_email: "demo",
      password: "demodemo"
    });
    this.props.login(user);
  }
  render() {
    return(
      <div className="form-container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="form">
          <Link to="/">
            <img className="nav-logo" src={window.lightbulb}/>
          </Link>
          <h1>Eureka!
            <span className="subhead">Note</span></h1>
          <div className="logo-dek">
            Exclaim loudly whenever convenient!
          </div>
          <button onClick={(e) => this.handleDemoSubmit(e)}
            className="demo-button">Demo</button>
          <h3 className="form-or">
            <span>or</span>
          </h3>
          <form className="inner-form">
            <input
              type={this.props.inputType}
              placeholder={this.props.placeholder}
              onChange={(e) => this.update(e, "username_or_email")} />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => this.update(e, "password")} />
            <button type="submit" className="submit-button">Continue</button>
            {this.renderErrors()}
            <div className="form-footer">{this.props.otherDek}</div>
            <Link onClick={this.props.clearErrors} to={this.props.otherLink}>{this.props.otherText}</Link>
          </form>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
