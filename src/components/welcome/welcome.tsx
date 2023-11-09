import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import getGame from '../../dto/getGameDTO';
import getHighScore, { GetHighScoreResponseDTO } from '../../dto/getHighScoreDTO';
import getUserHighScore, { GetUserHighScoreResponseDTO } from '../../dto/getUserHighScoreDTO';
import { UserProfileContext } from '../userProfile/useUserProfile';

const Welcome: React.FC = () => {

    const navigate = useNavigate();

    const { userProfile, } = useContext(UserProfileContext);
    const [userId,] = useState(userProfile.id);

    const [gameLoaded, setDataLoaded] = useState(false);
    const [songName, setSongName] = useState<string[]>([]);
    const [songURL, setSongURL] = useState<string[]>([]);
    const [correctName, setCorrectName] = useState<string[]>([]);

    const [highScoreLoaded, setHighScoreLoaded] = useState(false);
    const [highScore, setHighScore] = useState<GetHighScoreResponseDTO[]>();

    const [userHighScoreLoaded, setUserHighScoreLoaded] = useState(false);
    const [userHighScore, setUserHighScore] = useState<GetUserHighScoreResponseDTO[]>();

    const asyncFetchGameDTO = async () => {

        if (!gameLoaded) {

            const gameDTO = await getGame();
            setCorrectName(gameDTO.songName)
            setSongName(gameDTO.songName.sort(() => Math.random()));
            setSongURL(gameDTO.songURL);


            if (songName && songURL) {
                setDataLoaded(true);
            }

            console.log(songName, songURL);

        }

    };

    const asyncFetchHighScoreDTO = async () => {

        const highscoreDTO = await getHighScore();

        if (!highScoreLoaded) {
            setHighScoreLoaded(true);
            setHighScore(highscoreDTO);
        }

    };

    const asyncFetchUserHighScoreDTO = async (userId: string) => {

        if (!userHighScoreLoaded) {
            const userHighScoreDTO = await getUserHighScore(userId);
            setUserHighScoreLoaded(true);
            setUserHighScore(userHighScoreDTO);

        }

    };

    useEffect(() => {
        asyncFetchGameDTO();
        asyncFetchHighScoreDTO();
        asyncFetchUserHighScoreDTO(userId);
    }, []);




    return <div className="welcomeMain">
        <div className="welcomeHighscoreContainer">
            <table className="welcomeHighScoreTable">
                <caption>High Scores</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>User Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        highScore && highScore.map(({ userName: username, score, time }, index) => <tr>
                            <td>{index}</td>
                            <td>{username}</td>
                            <td>{score}</td>
                            <td>{time}</td>
                        </tr>)
                    }
                </tbody>
            </table>

            <table className="welcomeUserHighScoreTable">
                <caption>Your High Scores</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {userHighScore && userHighScore.map(({ position, score, time }) => <tr>
                        <td>{position}</td>
                        <td>{score}</td>
                        <td>{time.toFixed(2)}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        {<button disabled={!gameLoaded} onClick={() => navigate("/gameplayer", { state: { trackNames: songName, mp3URLs: songURL, answers: correctName } })}>{gameLoaded ? "Start Game" : "Loading game data..."}</button>}
    </div>
}
export default Welcome;

