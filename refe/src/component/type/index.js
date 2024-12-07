import React, { useEffect, useRef, useState } from 'react';
import './type.css';

const Type = ({ content }) => {
    const typeRef = useRef();
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
        type();
        return () => {
            clearInterval(timer);
        };
    }, [content]);

    return (
        <div>
            <input className="text" autoFocus={true}
                ref={typeRef} value={text}></input>
        </div>
    );
};

export default Type;
