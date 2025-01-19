import React, { useRef, useEffect } from 'react'
import './index.css'


const NoteCard = ({ item }) => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = item.content
    }
  }, [item])
  return (

    <div className="note-card">
      <h2 id={`${item.id}`}>{item.title}</h2>
      <p ref={ref}></p>
    </div >
  )
}

export default NoteCard