import './styles.css'
import TimeControls from '../TimeControls'

export default function Song(props) {
    return (
        <div className="container">
            <>
                <img src={props.imgSource} alt="Music" className="musicImage"></img>
                <h3 className="musicTitle">{props.songName}</h3>
                <p className="musicAuthor">{props.authorName}</p>
            </>

            <TimeControls
                duration={props.songDuration}
            />
        </div>
    )
}