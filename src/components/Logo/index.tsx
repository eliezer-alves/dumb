
import { useNavigate } from 'react-router-dom';
import millenniumIcon from './images/millennium-icon.svg';

export function Logo() {  
  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate('/')}} className="flex-center gap-4 link">
      <img src={millenniumIcon} alt="System incon" />
      <div className="flex flex-col font-fredoka">
        <span className="text-2xl font-bold text-primary-300">milennium</span>
        <span className="font-semibold text-secondary-300">Planning Poker</span>
      </div>
    </div>
  )
}