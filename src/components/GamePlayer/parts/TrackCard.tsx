interface TrackCardProps {
    index: number;
    indexOfTrackPlaying: number;
    trackName: string;
    playTrack(trackIndex: number): void;
}

const TrackCard: React.FC<TrackCardProps> = (props): JSX.Element => {
    return <>
        <fieldset className={props.index === props.indexOfTrackPlaying ? "activeTrackfield" : "trackfield"} onClick={() => props.playTrack(props.index)} >
            < button > Play Track {props.index + 1} ▶ </button >
            <div className="trackname" id={"trackName" + props.index} draggable="true"> {props.trackName}</div>
        </fieldset >
    </>
}

export default TrackCard;