import React, { useState } from "react"
import ReactQuill from "react-quill"
import { addNote } from "../../../apis/note"
import { v4 as uuidV4 } from 'uuid';
import './index.css'

const AddNote = () => {
  const [noteInfo, setNoteInfo] = useState({
    id: uuidV4(),
    title: '',
    content: ''
  })
  const handleContentChange = (e) => {
    setNoteInfo({
      ...noteInfo,
      content: e
    })
  }
  const handleAddNote = () => {
    addNote(noteInfo).then(res => {
      setNoteInfo({
        id: uuidV4(),
        title: '',
        content: ''
      })
    })
    alert('添加成功')
    // 刷新
    window.location.reload()
  }
  const handleTitleChange = (value) => {
    setNoteInfo({
      ...noteInfo,
      title: value
    })
  }
  return (
    <div className='add-note'>
      <h1>AddNote</h1>
      <div>
        <button className="add-btn" onClick={() => handleAddNote()}>add note</button>
        <input type="text"
          placeholder="请输入标题..."
          onChange={(e) => { handleTitleChange(e.target.value) }}
        />
        <ReactQuill
          style={{ width: '600px', height: '600px' }}
          theme="snow"
          placeholder="请输入内容..."
          onChange={(e) => { handleContentChange(e) }}
        />
      </div>
    </div>
  )
}

export default AddNote