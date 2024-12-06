import React, { useRef } from 'react'
import './type.css'
const Type = ({ content }) => {

    const typeRef = useRef(null)
    let i = 0;
    function addChar(content) {
        let timer = setInterval(function () {
            typeRef.current.innerHTML += content[i].charAt(0);
            content[i] = content[i].substring(1);
            if (content[i].length === 0) {
                clearInterval(timer);
                setTimeout(function () {
                    i += 1;
                    if (i === content.length) {
                        return;
                    }
                    popChar(typeRef.current.innerHTML);
                    addChar(content);
                }, 1300)

            }
        }, 176)
    }
    function popChar(content) {
        let timer = setInterval(function () {
            typeRef.current.innerHTML = typeRef.current.innerHTML.substring(0, typeRef.current.innerHTML.length - 1);
            if (typeRef.current.innerHTML.length === 0) {
                clearInterval(timer);
            }
        }, 6)
    }
    addChar(content);

    return (
        <div>
            <h1 className="text" ref={typeRef}> </h1>
        </div>
    )
}
export default Type