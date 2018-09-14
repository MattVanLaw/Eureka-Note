import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

const NotebooksIndex = props => {

  return(
    <section className="all-notebooks">
      <div className="all-notebooks-title">Notebooks</div>
      <div className="notebooks-toolbar">
        <h2>My notebook list</h2>
        <div>

          <span className="add-notebook">+ New Notebook</span>
        </div>
      </div>
      <div className="notebooks-column-header">
        <div>TITLE</div>
        <div>CREATED BY</div>
        <div>UPDATED</div>
        <div>CREATED ON</div>
      </div>
      <ul>
        {props.notebooks.map(notebook => (
          <NotebooksIndexItem
              key={notebook.id}
              notebook={notebook}/>)
        )}
      </ul>
    </section>
  );
};

export default NotebooksIndex;
