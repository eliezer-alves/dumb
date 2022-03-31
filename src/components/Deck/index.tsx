import { useEffect, useState } from "react"
import cx from 'classnames';
import { useRoom } from "../../hooks/useRoom";

export function Deck() {
  const { taskToVote, handleVotingIntention } = useRoom()
  const cards = [1,2,3,5,8,13,21,34,55,89]
  const [selectedCard, setSelectedCard] = useState<number|undefined>()

  useEffect(() => {
    if (!taskToVote){
      setSelectedCard(undefined)
    }
  
    return () => {}
  }, [taskToVote])
  

  const handleMyVote = (card: any) => {
    if (!taskToVote) return
    
    setSelectedCard(card)
    handleVotingIntention(card)
    
  }

  return (
    <div className="max-w-full h-40 px-4 gap-3 flex justify-center items-center overflow-x-scroll mobile:justify-start">
      {
        cards.map(card =>{
          return (
            <div
              key={card}
              onClick={() => handleMyVote((selectedCard == card) ? undefined : card)}
              className={cx(
                'flex-center w-14 h-24 text-2xl font-semibold border-2 rounded-md mobile:px-4',
                'duration-200 ease-out',
                {'border-primary-300 text-primary-300 hover:cursor-pointer': taskToVote},
                {'border-gray-500 text-gray-500 hover:cursor-no-drop': !taskToVote},
                {'bg-primary-300 text-white mb-6': (card == selectedCard && taskToVote)},
                {'hover:mb-3 hover:bg-primary-50': card != selectedCard && taskToVote},
              )}>
              {card}
            </div>
          )
        })
      }
    </div>
  )
}