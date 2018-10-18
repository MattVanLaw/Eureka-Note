import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import { Link, Redirect } from 'react-router-dom';
const NOTE_KEYS_TO_FILTERS = ['title', 'body'];

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: '',
      submitted: false,
    };
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    const filteredNotes = Object.values(this.props.notes).filter(createFilter(this.state.searchTerm, NOTE_KEYS_TO_FILTERS));
    
    return (
      <div className="search-index" tabIndex="0" onBlur={() => setTimeout(() => this.setState({ display: false }), 10000)}>
        <form onSubmit={this.handleSubmit}>
          {this.state.submitted === true ? <Redirect to={`/client/notebooks/${this.state.searchTerm}`} /> : null}
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
    this.setState({ submitted: true });
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}
export default Search;