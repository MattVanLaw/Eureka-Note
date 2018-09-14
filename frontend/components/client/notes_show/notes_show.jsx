const NotesShow = ({note, notebook}) => {
  return(
    <article className="note-show">
      <div className="show-top">
        <div>
          <i><- -></i> | @ {notebook.title}
        </div>
        <div>...</div>
      </div>
      <input
        type="text"
        value={note.title} />
      <textarea value={note.body}></textarea>
    </article>
  );
};

export default NotesShow;
