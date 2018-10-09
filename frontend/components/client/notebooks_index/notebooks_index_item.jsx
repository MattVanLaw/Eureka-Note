import React from "react";
import { Link, withRouter } from "react-router-dom";
import IndexItemMenuContainer from "./index_item_menu_container";
import NotebookNotes from "./notebook_notes";

class NotebooksIndexItem extends React.Component {
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

        <div className={`notebooks-index-row ${even ? "even-nb" : ""}`}>
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
            <span className="note-count">({this.props.notebook.note_ids.length})</span>
          </div>
          <div className="notebook-specs">
            <div>{updatedStr === "Invalid Date" ? "" : updatedStr.slice(4, updatedStr.length - 5)}</div>
            <div id="middlest-spec">
              {createdStr === "Invalid Date" ? "" : createdStr.slice(4, createdStr.length - 5)}
            </div>
            <div><i onClick={() => this.toggleMenu()}
              className="fas fa-ellipsis-h"></i></div>
          </div>
        </div>
        { this.state.carrot ?
          <NotebookNotes
            notes={
              this.props.notes
                .filter(note => this.props.notebook.note_ids.includes(note.id))
            }
          /> : null
        }
        { this.state.display ?
          <IndexItemMenuContainer
            indexNumber={this.props.indexNumber}
            openModal={this.props.openModal}
            notebookId={this.props.notebook.id}
            notebook={this.props.notebook}
          /> : null
        }
      </div>
    );
  }
}

export default withRouter(NotebooksIndexItem);
