import React, { Component } from 'react'
import SearchInput, { createFilter } from 'react-search-input';
import { Link } from 'react-router-dom';
import NotebookShow from './../notebooks_show/notebooks_show';
const NOTE_KEYS_TO_FILTERS = ['title', 'body'];

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {

    const filteredNotes = Object.values(this.props.notes).filter(createFilter(this.state.searchTerm, NOTE_KEYS_TO_FILTERS));
    
    return (
      <div tabIndex="0" onBlur={() => setTimeout(() => this.setState({ display: false }), 10000)}>
        <SearchInput 
          onClick={() => this.setState({ display: !this.state.display })}
          placeholder='Search all notes...'
          className={`search-input`} 
          onChange={this.searchUpdated}/>
        {filteredNotes.map(note => {
          return (
            <div onClick={() => this.setState({ display: false })}
            className={`searchbar-note ${this.state.display ? "" : "hidden"}`} key={note.id}>
              <Link to={`/client/notebooks/${note.notebook_id}/${this.state.searchTerm}`}>
                <div className="searchbar-note-title"><strong>{note.title}</strong></div>
                <div className="searchbar-note-title">{note.body.replace(/<[^>]+>/g, "").slice(0, 50) + "..."}</div>
              </Link>
            </div>
          )
        })}
        
      </div>
    )
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}
export default Search;