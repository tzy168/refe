import React, { useEffect, useRef, useState } from 'react';
import './type.css';

const Type = ({ content }) => {
    const typeRef = useRef();
    const [text, setText] = useState('');
    useEffect(() => {
        const text = content[Math.floor(Math.random() * content.length)];
        const speed = 100;
        let index = 0;

        console.log(typeRef.current);
        const type = () => {
            if (index < text.length) {
                setText(text.substring(0, index + 1));
                index++;
                setTimeout(type, speed);
            }
        };

        type();
        return () => {
            clearInterval(type);
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
