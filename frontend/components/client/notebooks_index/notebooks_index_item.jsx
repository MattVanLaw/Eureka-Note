import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IndexItemMenuContainer from './index_item_menu_container';
import { fetchNotebooks } from './../../../actions/notebook_actions';

const NotebookIndexItem = (props) => {
  const createdAt = new Date(props.notebook.created_at);
  const updatedAt = new Date(props.notebook.updated_at);
  const even = props.indexNumber % 2 === 0;
  // if (createdAt.toDateString() === "Invalid Date") return null;

  return (
    <div className={`notebooks-index-row ${even? "even-nb" : ''}`}>

        <Link className="notebook-show-link"
              to={`/client/notebook/${props.notebook.title}`}>
          {props.notebook.title}
        </Link>
      <div className="notebook-specs">
        <div>{createdAt.toDateString()}</div>
        <div id="middlest-spec">{updatedAt.toDateString()}</div>
        <div><i className="fas fa-ellipsis-h"></i></div>
      </div>
      <IndexItemMenuContainer
        notebookId={props.notebook.id} />
    </div>
  );
};

export default NotebookIndexItem;
