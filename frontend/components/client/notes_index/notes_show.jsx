import React from 'react'

const NoteShow = ({ note }) => {
  //input value will be notebook title when it exists and is not untitled
  return (
    <section onClick={(e) => e.stopPropagation()} className="note-show-container">
      <header className="note-show-header">
        <div className="header-item-container">
          <i className="fas fa-arrows-alt-h"></i>
          <div className="convenience-clickbox"></div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </header>
      <div className="note-show-buffer"></div>
      <div className="text-box-container">
        <input
          autoFocus
          name="title"
          type="text"
          value={note.title}
          placeholder="Title"/>
        <textarea placeholder="start writing..."></textarea>
      </div>
      <footer className="tag-footer">
      </footer>
    </section>
  )
}

export default NoteShow;
