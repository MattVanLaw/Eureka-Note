import React from 'react'

const NotebookIndexItem = (props) => {
  //TODO try to grab length of notes, with notes with a fetchNotebook
  //to hit the notebook show page, which should push the right stuff to
  //state...
  return (
    <div className="notebooks-index-row">
      <div className="notebooks-index-item">{props.notebook.title}</div>
    </div>
  )
}

export default NotebookIndexItem;
