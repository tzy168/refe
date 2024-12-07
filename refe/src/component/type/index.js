import React, { useEffect, useState } from 'react';
import './type.css';

const Type = ({ content }) => {
    const [text, setText] = useState('');
    useEffect(() => {
        const text = content[Math.floor(Math.random() * content.length)];
        const speed = 100;
        let index = 0;
        let timer;
        const type = () => {
            timer = setInterval(() => {
                if (index < text.length) {
                    setText(text.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        }

        setTimeout(() => {
            type();
        }, 800);

        return () => {
            clearInterval(timer);
            setText('');
        };
    }, [content]);

    return (
        <div>
            <input className="text" autoFocus={true}
                value={text} onChange={() => { }}></input>
        </div>
    );
};

export default Type;
