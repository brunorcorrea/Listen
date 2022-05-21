import './styles.css'
import { useEffect, useState } from 'react'
import ProgressBar from '../ProgressBar'

export default function TimeControls(props) {
    const [timeLeft, setTimeLeft] = useState(0)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [songDuration, setSongDuration] = useState(0)
    const [percentage, setPercentage] = useState(0)

    function clearStates() {
        setTimeLeft(songDuration)
        setElapsedTime(0)
        setPercentage(0)
    }

    useEffect(() => {
        setSongDuration(props.duration/1000)
    },[props.duration])

    useEffect(() => {
        counter()
    }, [counter])

    function counter() {
        setTimeout(() => {
            setElapsedTime(elapsedTime+1)
            setTimeLeft(songDuration-elapsedTime)
            setPercentage((elapsedTime/songDuration)*100)
            if(timeLeft <= 0) clearStates()//nextSong()
        }, 1000)
    }

    function formatTime(time) {
        let minutes = Math.trunc(time/60);
        let seconds = Math.round(time % 60);
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
 
         return `${minutes}:${seconds}`

    }

    return (
        <div className='timeControls'>
            <div className="counterDiv">
                <p className='timeShow'>{formatTime(elapsedTime)}</p>
                <ProgressBar
                    percentage={percentage}
                />
                <p className='timeShow'>{formatTime(timeLeft)}</p>
            </div>
        </div>
    )
}