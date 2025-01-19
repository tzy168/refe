import React, { useState, useEffect } from 'react';
import './index.css';
import "react-quill/dist/quill.snow.css"; // 引入 Quill 的 Snow 主题样式
import AddNote from './addNote';
import NoteList from './noteList';

const Note = () => {
  const [change, setChange] = useState(false)
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <button className='note-btn' onClick={() => { setChange(false) }}>note</button>
        <button className='note-btn' onClick={() => { setChange(true) }}>记笔记</button>
      </div>
      {change
        ?
        <AddNote />
        :
        <NoteList />
      }
    </div>
  )
}

export default Note;