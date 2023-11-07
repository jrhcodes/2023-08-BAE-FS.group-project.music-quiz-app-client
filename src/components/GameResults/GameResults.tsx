import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';

const GameResults: React.FC = () => {
    console.log("SCREEN: GameResults");
    const navigate = useNavigate();
    const [playURL, setPlayURL] = useState("");

    const sendResultsToBackend = (trackNames: string[], mp3URLs: string[]): { correctTrackNames: string[], correctURLs: string[] } => {

        console.log(trackNames, mp3URLs);

        return {
            correctTrackNames: [
                "Carpenters",
                "Mariah Carey & Boyz II Men",
                "The O'Jays",
                "George McCrae",
                "Philip Bailey & Phil Collins",
                "Captain & Tennille",
                "The Everly Brothers",
                "Gloria Gaynor",
                "Kay Kyser",
                "Imagination",
                "Etta James",
                "The Fray",
            ],

            correctURLs: [
                "https://cdns-preview-d.dzcdn.net/stream/c-d430d34ee1554956fb61bb584bf01701-6.mp3",
                "https://cdns-preview-f.dzcdn.net/stream/c-f68c9c9dbb03f99f6b0080c1982cf4d8-5.mp3",
                "https://cdns-preview-0.dzcdn.net/stream/c-05291b3d16b4896721d2c8097c80cbe6-7.mp3",
                "https://cdns-preview-0.dzcdn.net/stream/c-0551b36f9957df4333a1f9242b9304f2-3.mp3",
                "https://cdns-preview-2.dzcdn.net/stream/c-2506e0bbca0e2237f44f41a6199bd1e8-6.mp3",
                "https://cdns-preview-f.dzcdn.net/stream/c-f78303dc35ca1c1e2ed8e97709d3c683-5.mp3",
                "https://cdns-preview-a.dzcdn.net/stream/c-a8e6cda70eef9b1d2e71e36cea22eaf0-1.mp3",
                "https://cdns-preview-d.dzcdn.net/stream/c-d6a75bbb6083ce8851ebcccc65ed1c1a-6.mp3",
                "https://cdns-preview-7.dzcdn.net/stream/c-72dccd196829d2b4cbf36731ffd77ab1-4.mp3",
                "https://cdns-preview-f.dzcdn.net/stream/c-fec936e322b528e2dacd53675d573b2e-5.mp3",
                "https://cdns-preview-1.dzcdn.net/stream/c-1e50497182c6dbbe27ddb1e36101a704-12.mp3",
                "https://cdns-preview-7.dzcdn.net/stream/c-79bd632ab398554820eed52ca42075e7-7.mp3"
            ]

        }
    }

    const gameResults = useLocation().state;


    const trackNames: string[] = gameResults.trackNames;
    const mp3URLs: string[] = gameResults.mp3URLs;

    const { correctTrackNames, correctURLs } = sendResultsToBackend(trackNames, mp3URLs);
    console.log(correctTrackNames, correctURLs);

    return <><div className="resultsWindow">
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
                {trackNames.map((trackName, index) => {
                    return <tr>
                        <td>{trackName}</td>
                        <td>{correctTrackNames[correctURLs.indexOf(mp3URLs[index])]}</td>
                        <td><button onClick={() => { setPlayURL(mp3URLs[index]) }}>▶</button></td>
                        <td>{correctTrackNames[correctURLs.indexOf(mp3URLs[index])] === trackName ? "✓" : "❌"} </td>
                    </tr>
                })}
                <audio loop autoPlay={true} controls src={playURL} ></audio>
                <button onClick={() => navigate("/welcome")}>"Finish"</button>
            </tbody>
        </table>

        <div>New Score: 11 12:23 - Rank 100023</div>

    </div ></>;
}

export default GameResults;