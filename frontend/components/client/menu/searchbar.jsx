import React, { Component } from 'react';
import SearchInput from 'react-search-input';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: '',
      submitted: 0,
    };
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear;
  }

  componentWillUnmount() {
    clearTimeout(this.clear)
  }

  render() {
    return (
      <div className="search-index" tabIndex="0" onBlur={() => this.clear = setTimeout(() => this.setState({ display: false }), 10000)}>
        <form onSubmit={this.handleSubmit}>
        <SearchInput 
          onClick={() => this.setState({ display: !this.state.display })}
          placeholder='Search all notes...'
          className={`search-input`} 
          onChange={this.searchUpdated}/>
        </form>
        <i className={`fas fa-search ${this.state.searchTerm !== "" ? 'mag-lit' : ""}`}></i>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchTerm.length > 0) {
      this.props.history.push(`/client/search/${this.state.searchTerm}`);
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}
export default withRouter(Search);