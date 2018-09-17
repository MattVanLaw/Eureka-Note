import React from 'react'

const NoteShow = ({ note }) => {
  //input value will be notebook title when it exists and is not untitled
  return (
    <section className="note-show-container">
      <header className="note-show-header">

      </header>
      <div className="note-show-buffer"></div>
      <div className="text-box-container">
        <input name="title" value={note.title} type="text" placeholder="Title"/>
        <textarea placeholder="start writing..."></textarea>
      </div>
      <footer className="tag-footer">
      </footer>
    </section>
  )
}

export default NoteShow;
