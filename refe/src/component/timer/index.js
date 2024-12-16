import { useState, useEffect } from "react";
const Timer = () => {
    const date = new Date().toString().split(' ')
    const dateymd = new Date().toLocaleDateString()
    const weekday = date[0]
    const [time, setTime] = useState(date[4])
    function updateDate() {
        setInterval(() => {
            let currentDate = new Date()
            setTime(currentDate.toString().split(' ')[4])
        }, 1000)
    }
    useEffect(() => {
        updateDate()
    }, [])
    return (
        <>
            <span className='now-date'>现在是 <strong>{dateymd + ' ' + weekday + ' ' + time}</strong></span>
        </>
    )
}

export default Timer;