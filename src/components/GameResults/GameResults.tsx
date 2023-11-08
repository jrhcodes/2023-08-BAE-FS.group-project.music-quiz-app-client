import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';

import putUserHighScore from "../../dto/postUserScoreDTO";

const GameResults: React.FC = () => {
    console.log("SCREEN: GameResults");
    const navigate = useNavigate();
    const [playURL, setPlayURL] = useState("");
    const gameResults = useLocation().state;
    const [songNames,] = useState(gameResults.trackNames);
    const [songURL,] = useState(gameResults.mp3URLs);
    const [userTimeTaken,] = useState(gameResults.timeTaken);
    const [resultsLoaded, setResultsLoaded] = useState(true);

    const [correctSongNames, setCorrectSongNames] = useState<string[]>([]);
    const [correctURLs, setCorrectURL] = useState<string[]>([]);

    // TODO: add to screen
    const [userScore, setUserScore] = useState(0);

    const sendResultsAndGetAnswers = async (userId: string, songNames: string[], songURL: string[], userTimeTaken: number) => {

        if (!resultsLoaded) {
            setResultsLoaded(true);
            const result = await putUserHighScore({ userId, songNames, songURL, userTimeTaken });

            setCorrectURL(result.correctSongURL);
            setCorrectSongNames(result.correctSongNames);
            setUserScore(result.userScore);
        }
    }

    useEffect(() => {
        // TODO: get user ID from context
        const userId = "REPLACE ME"
        // TODO: reimplement code to get game duration
        sendResultsAndGetAnswers(userId, songNames, songURL, userTimeTaken);
    }, []);



    console.log(correctSongNames, correctURLs);

    return <><div className="resultsMain">
        <table className="resultsTable">
            <thead>
                <tr>
                    <th>Your guess</th>
                    <th>The Correct Answer</th>
                    <th>Play</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody>
                {songNames.map((trackName: string, index: number) => {
                    return <tr>
                        <td>{trackName}</td>
                        <td>{correctSongNames[correctURLs.indexOf(songURL[index])]}</td>
                        <td><button onClick={() => { setPlayURL(songURL[index]) }}>▶</button></td>
                        <td>{correctSongNames[correctURLs.indexOf(songURL[index])] === trackName ? "✓" : "❌"} </td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className="resultsGameScore"><div>Score: {userScore}</div><div>TimeTaken: {userTimeTaken}</div></div>
        <audio loop autoPlay={true} controls src={playURL} ></audio>
        <button onClick={() => navigate("/welcome")}>Finish</button>



    </div ></>;
}

export default GameResults;