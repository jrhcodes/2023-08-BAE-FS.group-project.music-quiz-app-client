interface TrackCardProps {
    index: number;
    indexOfTrackPlaying: number;
    trackName: string;
    mp3Url: string;

    playTrack(track: string): void;
    key: string;
}


const TrackCard: React.FC<TrackCardProps> = ({ index, indexOfTrackPlaying: indexOfTrackPlaying, trackName, mp3Url, playTrack }) => {
    return <>
        <fieldset className={index === indexOfTrackPlaying ? "activeTrackfield" : "trackfield"} onClick={() => playTrack(mp3Url)} >
            < button > Play Track {index + 1} ▶ </button >
            <div className="trackname" id={"trackName" + index} draggable="true"> {trackName}</div>
        </fieldset >
    </>

}

export default TrackCard;