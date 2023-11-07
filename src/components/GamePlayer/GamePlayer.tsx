import React, { useState, useEffect } from 'react';
import CountDownTimer from "./parts/CountdownTimer";
import TrackCard from "./parts/TrackCard";
import { useNavigate } from 'react-router';

// const getSongListFromApi = async (): Promise<{ songName: string[], songURL: string[] }> => {
//     const gameApiUrl = "http://localhost:8080/api/v1/musicquiz/game?numberOfSongs=1";

//     const response = await fetch(gameApiUrl, {
//         method: 'GET',
//         mode: 'cors',
//         headers: {}
//     });

//     if (!response.ok) {
//         console.log("LOG:", response);
//         throw new Error(`Network response was not ok. Status: ${response.status}`);
//     }

//     const data = await response.json();

//     if (Array.isArray(data.songName) && Array.isArray(data.songURL)) {
//         return {
//             songName: data.songName,
//             songURL: data.songURL
//         };
//     } else {
//         throw new Error('Data format is invalid');
//     }
// };

const GamePlayer: React.FC = () => {

    const EMPTY_STRING_ARRAY: string[] = [];
    const [mp3URLs, setMp3URLs] = useState(EMPTY_STRING_ARRAY);
    const [trackNames, setTrackNames] = useState(EMPTY_STRING_ARRAY);
    const navigate = useNavigate();
    const [indexOfTrackPlaying, setTrackId] = useState(-1);

    console.log("SCREEN: GamePlayer");

    useEffect(() => {
        const fetchData = async () => {

            // const { songName, songURL } = await getSongListFromApi();
            // setMp3URLs(songURL);
            // setTrackNames(songName);
            // console.log(songName, songURL);


            setTrackNames([
                "Mariah Carey & Boyz II Men",
                "George McCrae",
                "Captain & Tennille",
                "The Everly Brothers",
                "Gloria Gaynor",
                "Carpenters",
                "Philip Bailey & Phil Collins",
                "The O'Jays",
                "Kay Kyser",
                "Imagination",
                "The Fray",
                "Etta James"
            ].sort(() => Math.random() - 0.5));

            setMp3URLs([
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
            ]);
        }

        fetchData();
    }, []);

    const swapTrackNames = (draggedIndex: number, droppedIndex: number) => {
        [trackNames[draggedIndex], trackNames[droppedIndex]] = [trackNames[droppedIndex], trackNames[draggedIndex]];
        setTrackNames([...trackNames]);
    };

    const playTrack = (trackId: number) => {
        setTrackId(trackId);
    };

    const endGame = () => {
        navigate("/gameresults", { state: { trackNames: trackNames, mp3URLs: mp3URLs } });
    };

    const verifyEndGame = () => {
        if (confirm("End Game?") === true) {
            endGame();
        }
    }

    return (
        <div className="gameplayer">
            <fieldset className="trackcontainer" >
                {trackNames.map((trackInfo, index) =>
                    <TrackCard
                        index={index}
                        indexOfTrackPlaying={indexOfTrackPlaying}
                        trackName={trackInfo}
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