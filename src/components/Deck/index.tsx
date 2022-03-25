import { useState } from "react"
import cx from 'classnames';
import { useRoom } from "../../hooks/useRoom";

export function Deck() {
  const { taskToVote, handleVotingIntention } = useRoom()
  const cards = [0,1,2,3,5,8,13,21,34,55,89]
  const [selectedCard, setSelectedCard] = useState<number|undefined>()

  const handleMyVote = (card: any) => {
    if (!taskToVote) return
    
    setSelectedCard(card)
    handleVotingIntention(card)
    
  }

  return (
    <div className="h-40 flex-center gap-3">
      {
        cards.map(card =>{
          return (
            <div
              key={card}
              onClick={() => handleMyVote((selectedCard == card) ? undefined : card)}
              className={cx(
                'flex-center w-14 h-24 text-2xl font-semibold border-2 rounded-md',
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