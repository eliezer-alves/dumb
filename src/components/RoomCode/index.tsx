import copyIcon from './images/copy.svg';

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyIcon} alt="Copy room code" />
            </div>
            <span>#{props.code}</span>
        </button>
    )
}