import React from 'react';
import { useNavigate } from 'react-router';

const Welcome: React.FC = () => {
    const userId = "props.user";

    const getHighScoresFromAPI = (userId: string) => {
        console.log(userId);
        return {
            highScores: [
                { index: 1, name: "bill gates", score: 12, time: 10.3 },
                { index: 2, name: "gordon bennet", score: 12, time: 11.3 },
                { index: 3, name: "eric idle", score: 12, time: 12.2 },
                { index: 4, name: "boris karloff", score: 12, time: 60 },
                { index: 5, name: "smaug", score: 11, time: 11.2 },
                { index: 6, name: "boris johnson", score: 11, time: 60 },
                { index: 7, name: "eric idle", score: 11, time: 12.2 },
                { index: 8, name: "boris johnson", score: 10, time: 60 },
                { index: 9, name: "eric idle", score: 10, time: 12.2 },
                { index: 10, name: "boris johnson", score: 1, time: 60 }
            ],
            userHighScores: [
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 },
                { index: 1, score: 12, time: 45 }
            ]

        }

    }

    const navigate = useNavigate();

    const { highScores, userHighScores } = getHighScoresFromAPI(userId);

    return <>
        <div>
            <div className="highScoreTable">
                <table>
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
                        {highScores.map(({ index, name, score, time }) => <tr>
                            <td>{index}</td>
                            <td>{name}</td>
                            <td>{score}</td>
                            <td>{time}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            <div className="userHighScoreTable">
                <table>

                    <thead>
                        <caption>Yoru Personal High Scores</caption>
                        <tr>
                            <th>Rank</th>
                            <th>User Name</th>
                            <th>Score</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userHighScores.map(({ index, score, time }) => <tr>
                            <td>{index}</td>
                            <td>{score}</td>
                            <td>{time}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
        <button className="Start Game" onClick={() => navigate("/gameplayer")}>Start Game</button>
    </>
}
export default Welcome;

