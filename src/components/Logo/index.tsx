
import { useNavigate} from 'react-router-dom';
import millenniumIcon from './images/millennium-icon.svg';

export function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate('/')}} className="flex-center gap-4 link">
      <img src={millenniumIcon} alt="System incon" className="mobile:w-[44px] mobile:h-[44px]"/>
      <div className="flex items-center gap-4">
        <div className="flex flex-col font-fredoka">
          <span className="text-3xl font-bold text-primary-300 mobile:text-2xl">millennium</span>
          <span className="text-xl font-semibold text-secondary-300 mobile:text-sm">Planning Poker</span>
        </div>
      </div>
    </div>
  )
}