import React, { useState } from 'react';
import CountDownTimer from "./parts/CountdownTimer";
import TrackCard from "./parts/TrackCard";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";



const GamePlayer: React.FC = () => {

    const gameResults = useLocation().state;
    const [mp3URLs,] = useState<string[]>(gameResults.mp3URLs);
    const [trackNames, setTrackNames] = useState<string[]>(gameResults.trackNames);
    const navigate = useNavigate();
    const [indexOfTrackPlaying, setTrackId] = useState(0);

    console.log("SCREEN: GamePlayer");

    const swapTrackNames = (draggedIndex: number, droppedIndex: number) => {
        [trackNames[draggedIndex], trackNames[droppedIndex]] = [trackNames[droppedIndex], trackNames[draggedIndex]];
        setTrackNames([...trackNames]);
    };

    const playTrack = (trackId: number) => {
        setTrackId(trackId);
    };

    const endGame = () => {
        // TODO: reimplement code to save game duration
        navigate("/gameresults", {
            state: { trackNames: trackNames, mp3URLs: mp3URLs, timeTaken: 30, answers: gameResults.answers }
        });
    };

    const verifyEndGame = () => {
        if (confirm("End Game?") === true) {
            endGame();
        }
    }

    return (
        <div className="gameplayer">
            <fieldset className="trackcontainer" >
                {trackNames.map((trackName, index) =>
                    <TrackCard
                        index={index}
                        indexOfTrackPlaying={indexOfTrackPlaying}
                        trackName={trackName}
                        playTrack={playTrack}
                        swapTrackNames={swapTrackNames}
                    />)}
            </fieldset>
            <fieldset className="lowerFieldSet">
                <legend>Game controls:</legend>
                <CountDownTimer endGame={endGame} />
                {<audio loop className="tunePlayer" autoPlay={true} controls src={indexOfTrackPlaying === -1 ? "" : mp3URLs[indexOfTrackPlaying]} ></audio>}
                <button onClick={verifyEndGame}>DONE!</button>
            </fieldset>
        </div >
    )
};

export default GamePlayer;