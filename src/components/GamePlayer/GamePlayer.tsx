import React, { useState } from 'react';
import './css/game_player.css';
import CountDownTimer from "./parts/CountdownTimer";

const trackInfo = [
    { audio: "https://cdns-preview-0.dzcdn.net/stream/c-0aaac8863ef0071300c0c99eb5aa8b5b-4.mp3", title: "Queen: Bohemian Rhapsody" },
    { audio: "https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3", title: "Daft Punk: Get Lucky" },
    { audio: "https://cdns-preview-f.dzcdn.net/stream/c-fc31a3c3db5e7283e3a70528f67c89c2-8.mp3", title: "Lady Gaga: Poker Face" },
    { audio: "https://cdns-preview-d.dzcdn.net/stream/c-dcfd5c0a4659df56e3f4a54946f4ddf5-6.mp3", title: "Mike Oldfield:Tubular Bells" },
    { audio: "https://cdns-preview-c.dzcdn.net/stream/c-cfece9cfaa89304e72c7f568693bbbf3-4.mp3", title: "The Electric Light Orchestra: Mr. Blue Sky" },
    { audio: "https://cdns-preview-3.dzcdn.net/stream/c-317614ee96aeb76afc0a2c51a20cf6bc-7.mp3", title: "Soundgarden: Blackhole Sun" },
    { audio: "https://cdns-preview-8.dzcdn.net/stream/c-843ac7d08fe24a4a7d456d3379a2698d-4.mp3", title: "Aerosmith: Walk This Way" },
    { audio: "https://cdns-preview-8.dzcdn.net/stream/c-856ae1ac2818012c04721ba8ad9b8677-9.mp3", title: "David Bowie: Lady Grinning Soul" },
    { audio: "https://cdns-preview-1.dzcdn.net/stream/c-1d15e99e80c80a19842211e157080e1f-8.mp3", title: "The Orb: Fluffy Little Clouds" },
    { audio: "https://cdns-preview-6.dzcdn.net/stream/c-65c0e09286c83c8c7e1891379414afed-8.mp3", title: "The Sex Pistols: God Save the Queen" },
    { audio: "https://cdns-preview-d.dzcdn.net/stream/c-dccbfd5489031f7f0640e833105cfa2b-8.mp3", title: "Rick Astley: Never Gonna Give You Up" },
    { audio: "https://cdns-preview-8.dzcdn.net/stream/c-8bbf0b1167b44b72bd75c369835fabe5-4.mp3", title: "Enter the Haggis: Donald, Where's Yer Troosers" },
].sort(() => Math.random() - 0.5);


const GamePlayer: React.FC = () => {
    const [trackId, setTrackId] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackOptions,] = useState([...trackInfo.map(track => track.title).sort(() => Math.random() - 0.5)]);
    const playTrack = (trackId: number) => {
        setTrackId(trackId);
        setIsPlaying(true);
    };

    return (
        <div>
            <h1>🎵🎶The super music playa game!🎵🎶</h1>
            <fieldset className="trackcontainer" >

                <legend>Select the name of each track, below</legend>
                {trackInfo.map(
                    (_, index) => {
                        const thisTrackIsPlaying = index === trackId - 1;
                        return <fieldset className={thisTrackIsPlaying ? "activeTrackfield" : "trackfield"}>
                            <button onClick={() => playTrack(index + 1)}>Mystery Track {index + 1} ▶ </button>
                            <div className="trackName" id={"trackName" + index} draggable="true"
                            > {trackOptions[index]}</div>
                        </fieldset>
                    }
                )}

            </fieldset>

            <fieldset className="lowerFieldSet">
                <legend>Game controls:</legend>
                <CountDownTimer />
                {<audio loop autoPlay={true} controls src={trackId === 0 ? "" : trackInfo[trackId - 1].audio} muted={!isPlaying}></audio>}
                <button onClick={() => alert("Who knows? Logic not yet implemented!")}>DONE!</button>
            </fieldset>
        </div >
    )
};

export default GamePlayer;
