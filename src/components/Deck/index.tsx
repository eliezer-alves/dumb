import { useState } from "react"
import cx from 'classnames';

export function Deck() {
  const cards = [0,1,2,3,5,8,13,21,34,55,89]
  const [selectedCard, setSelectedCard] = useState<number|undefined>()

  return (
    <div className="h-40 flex-center gap-3">
      {
        cards.map(card =>{
          return (
            <div
              key={card}
              onClick={() => setSelectedCard((selectedCard == card) ? undefined : card)}
              className={cx(
                'flex-center w-14 h-24',
                'border-2 border-primary-300 rounded-md',
                'text-2xl text-primary-300 font-semibold',
                'hover:cursor-pointer',
                'duration-200 ease-out',
                {'bg-primary-300 text-white mb-6': (card == selectedCard)},
                {'hover:mb-3 hover:bg-primary-50': card != selectedCard}
              )}>
              {card}
            </div>
          )
        })
      }
    </div>
  )
}