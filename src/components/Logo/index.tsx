
import { useNavigate} from 'react-router-dom';
import millenniumIcon from './images/millennium-icon.svg';

export function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate('/')}} className="flex-center gap-4 link">
      <img src={millenniumIcon} alt="System incon" />
      <div className="flex items-center gap-4">
        <div className="flex flex-col font-fredoka">
          <span className="text-3xl font-bold text-primary-300">millennium</span>
          <span className="text-xl font-semibold text-secondary-300">Planning Poker</span>
        </div>
      </div>
    </div>
  )
}