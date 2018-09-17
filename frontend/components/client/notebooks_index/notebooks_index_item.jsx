import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IndexItemMenuContainer from './index_item_menu_container';
import { fetchNotebooks } from './../../../actions/notebook_actions';
import NotebookNotes from './notebook_notes';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      carrot: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({
      display: !this.state.display,
    });
  }
  render() {
    const createdAt = new Date(this.props.notebook.created_at);
    const createdStr = createdAt.toDateString();
    const updatedAt = new Date(this.props.notebook.updated_at);
    const updatedStr = updatedAt.toDateString();
    const even = this.props.indexNumber % 2 === 0;
    return (
      <div>

      <div className={`notebooks-index-row ${even ? "even-nb" : ''}`}>
        <div className="notebook-title">
          <div className="carrot-container">
            { this.state.carrot ?
                <i onClick={() => this.setState({ carrot: false})}
                   className="fas fa-caret-down"></i>
                  :
                <i onClick={() => this.setState({ carrot: true})}
                   className="fas fa-caret-right"></i>
            }
          </div>
          <Link className="notebook-show-link"
            to={`/client/notebooks/${this.props.notebook.id}`}>
            <i className="fas fa-book"></i>
            {this.props.notebook.title}
          </Link>
          <span className="note-count">({this.props.notes.length})</span>
        </div>
        <div className="notebook-specs">
          <div>{createdStr.slice(0, createdStr.length - 5)}</div>
          <div id="middlest-spec">
            {updatedStr.slice(0, createdStr.length - 5)}
          </div>
          <div><i onClick={() => this.toggleMenu()}
                  className="fas fa-ellipsis-h"></i></div>
        </div>
      </div>
      { this.state.carrot ?
        <NotebookNotes
          noteTitles={this.props.notes.map(note => note.title)}
        /> : null
      }
      { this.state.display ?
        <IndexItemMenuContainer
          openModal={this.props.openModal}
          notebookId={this.props.notebook.id}
          notebook={this.props.notebook}
        /> : null
      }
      </div>
    );
  }
}

export default NotebookIndexItem;
