import React, { useState, useEffect } from 'react'
import { NoteCard } from '../../../component'
import { getNoteList } from '../../../apis/note'
import './index.css'

const NoteList = () => {
  const [note, setNote] = useState([])
  useEffect(() => {
    getNoteList().then(res => {
      setNote(res.data)
    })
  }, [])
  const handleShow = () => {
    const sideBar = document.querySelector('.side-Bar')
    if (sideBar) {
      sideBar.classList.toggle('show')
    }
  }
  return (
    <div>

      <h1 style={{ textAlign: 'center' }}>NoteList</h1>
      <button className='note-btn listShow' onClick={() => { handleShow() }}>展开</button>
      <div className='note-main'>
        <div className='side-Bar'>
          <ul>
            {note.map((item) => {
              return <li className='side-item' key={item.id}>
                {item.title}
              </li>
            })}
          </ul>
        </div>
        <div className='md-container'>
          {note.map((item) => {
            return (
              <NoteCard item={item} key={item.id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NoteList