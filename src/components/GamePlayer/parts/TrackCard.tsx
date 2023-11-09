interface TrackCardProps {
    index: number;
    indexOfTrackPlaying: number;
    trackName: string;
    playTrack(trackIndex: number): void;
    swapTrackNames(draggedIndex: number, droppedIndex: number): void;
    // onDragStart(event: React.DragEvent): void;
    // onDragOver(event: React.DragEvent): void;
    // onDrop(event: React.DragEvent): void;
}

const TrackCard: React.FC<TrackCardProps> = (props): JSX.Element => {

    const onDragStart = (event: React.DragEvent) => {
        console.log("start");
        // event.preventDefault();
        event.dataTransfer.setData("text/plain", props.index.toString());
    };

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        console.log("over");
    };

    const onDrop = (event: React.DragEvent) => {
        console.log("drop");
        const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"));
        const droppedIndex = props.index;

        if (draggedIndex !== droppedIndex) {
            props.swapTrackNames(draggedIndex, droppedIndex);
        }
    };

    const isActiveTrack = props.index === props.indexOfTrackPlaying;
    return <>
        <fieldset className={isActiveTrack ? "activeTrackfield" : "trackfield"} disabled={isActiveTrack} onClick={() => props.playTrack(props.index)} onDrop={onDrop} onDragOver={onDragOver}>
            < button  > Play Track {props.index + 1} ▶ </button >
            <div className="trackname" draggable="true" onDragStart={onDragStart} >
                {props.trackName}
            </div>
        </fieldset >
    </>
}

export default TrackCard;