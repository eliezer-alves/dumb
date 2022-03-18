import { info } from 'console';
import copyIcon from './images/copy.svg';

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <div onClick={copyRoomCodeToClipboard} className="flex-center">
            <span className="h-14 px-6 flex-center
                border-2 border-r-0 border-primary-300 rounded-l-lg
                text-xl text-gray-500 font-semibold
                hover:cursor-pointer
                hover:bg-gray-50
                active:text-gray-400
            ">#{props.code}</span>
            <button
                className="h-14 px-6 flex-center bg-primary-300
                border border-l-0 border-primary-300 rounded-r-lg 
                active:bg-primary-200
                duration-200
            ">
                <img src={copyIcon} alt="Copy room code" />
            </button>
        </div>
    )
}