import {ApplicationTitle} from './utils/strings.js'
import './App.css'
import './utils/styles.css'
import Song from './components/Song'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import api from './api/axios'

function App() {
    const [music, setMusic] = useState({
        "image" : "https://i.pinimg.com/736x/5a/59/b5/5a59b589fe8b97dcdbce4aaf21e064ff.jpg",
        "name" : "",
        "artist" : "",
        "videoId" : null,
        "duration" : 0,
        "id" : "-1"
    })

    let idArtist = 111239
    async function fetchMusicData(){
        const formattedMusic = {};

        const { data } = await api.get(`mvid.php?i=${idArtist}`);
        const trackVideo = data.mvids[0]

        const { data : trackData } = await api.get(`track.php?h=${trackVideo?.idTrack}`);
        const track = trackData.track[0]
        formattedMusic.videoId = `${trackVideo.strMusicVid?.substring(31)}`;
    
        formattedMusic.id = trackVideo?.idTrack;
        formattedMusic.image = trackVideo?.strTrackThumb;
        formattedMusic.name = track?.strTrack;
        formattedMusic.artist = track?.strArtist;
        formattedMusic.duration = track?.intDuration;
    
        
        setMusic(formattedMusic);
    }

    useEffect( () => {
        fetchMusicData()
    },[])

    return (
        <div className = "Container">
            <Header>
                {ApplicationTitle}
            </Header>
        { !!music.videoId ?
            (
                    <div className = "Content">
                    <Song
                        imgSource = {music.image}
                        songName = {music.name}
                        authorName = {music.artist}
                        songDuration = {music.duration}
                    />
                    </div>
            ) : (
                <div className = "Content">
                    <p>Loading...</p>
                    </div>
            )
        }
        </div>
    );
}

export default App;
