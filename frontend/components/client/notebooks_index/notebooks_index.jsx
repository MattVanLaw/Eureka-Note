import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';
import NotebookFormContainer from './notebook_form_container';

const NotebooksIndex = props => {
  return(
    <section className="all-notebooks">
      <NotebookFormContainer />
      <div className="all-notebooks-title">Notebooks</div>
      <div className="notebooks-toolbar">
        <h2>My notebook list</h2>
        <div>

          <span className="add-notebook">
            <i className="fas fa-book"></i> New Notebook
          </span>
        </div>
      </div>
      <div className="notebooks-column-header">
        <div>TITLE</div>
        <div className="header-stats">
          <div>UPDATED</div>
          <div>CREATED ON</div>
          <div>ACTIONS</div>
        </div>
      </div>
      <ul>
        {props.notebooks.map((notebook, idx) => (
          <NotebooksIndexItem
              indexNumber={idx + 1}
              key={notebook.id}
              notebook={notebook}/>)
        )}
      </ul>
    </section>
  );
};

export default NotebooksIndex;
