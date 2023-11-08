import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';

import postUserHighScore from "../../dto/postUserScoreDTO";
import { UserProfileContext } from "../userProfile/useUserProfile";

const GameResults: React.FC = () => {
    console.log("SCREEN: GameResults");
    const navigate = useNavigate();
    const [playURL, setPlayURL] = useState("");
    const gameResults = useLocation().state;
    const [songNames,] = useState(gameResults.trackNames);
    const [songURL,] = useState(gameResults.mp3URLs);
    const [userTimeTaken,] = useState(gameResults.timeTaken);
    const [resultsLoaded, setResultsLoaded] = useState(false);
    const { userProfile, } = useContext(UserProfileContext);
    const [userId,] = useState(userProfile.id);

    const [correctSongNames, setCorrectSongNames] = useState<string[]>([]);
    const [correctURLs, setCorrectURL] = useState<string[]>([]);

    const [userScore, setUserScore] = useState(0);

    const sendResultsAndGetAnswers = async (userId: string, songName: string[], songURL: string[], userTimeTaken: number) => {

        if (!resultsLoaded) {
            console.log("GameResults POSTED DATA");

            setResultsLoaded(true);
            const result = await postUserHighScore({ userId, songName, songURL, userTimeTaken });

            setCorrectURL(result.songURL);
            setCorrectSongNames(result.songName);
            setUserScore(result.userScore);

        }
    }

    useEffect(() => {
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