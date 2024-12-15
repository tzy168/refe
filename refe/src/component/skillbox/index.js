import React from 'react'
import { Range } from '../index'
import { useNavigate } from 'react-router-dom'
import './index.css'
const Skillcard = () => {
    const navigate = useNavigate()
    return (
        <div className='skill-box'>
            <div className='skill-card c1'>
                <span style={{ flex: 1 }}>JavaScript</span>
                <Range className='range' value={70} />
            </div>
            <div className='skill-card c2'>
                <span style={{ flex: 1 }}>React</span>
                <Range value={40} />
            </div>
            <div className='skill-card c3' onClick={() => navigate(`/hc`)}>
                <span style={{ flex: 1 }}>HTML&CSS</span><br />
                <Range value={66} />
            </div>
        </div>
    )
}

export default Skillcard