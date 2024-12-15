import React from 'react';
import './index.css';

const Range = ({ value }) => {
    return (
        <div className='range-main'>
            <span className="range">
                <span className='inner' style={{ width: `${value}%` }}>{value}%</span>
            </span>
        </div>
    );
};

export default Range;