import React from 'react';
import { Link } from 'react-router-dom';


const NotebookIndexItem = (props) => {
  //TODO try to grab length of notes, with notes with a fetchNotebook
  //to hit the notebook show page, which should push the right stuff to
  //state...
  const createdAt = new Date(props.notebook.created_at);
  const updatedAt = new Date(props.notebook.updated_at);
  const even = props.indexNumber % 2 === 0;
  if (createdAt.toDateString() === "Invalid Date") return null;
  //BUG: quick fix ^^
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
    </div>
  );
};

export default NotebookIndexItem;
