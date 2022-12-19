import React, {useEffect, useState} from 'react'
import GetCards  from '../services/functions'
import '../styles/Main.css'

function Main() {
  const [cards, setCards] = useState(null)

  useEffect(()=>{
    GetCards(setCards)
  },[])

  return (
    <>
      <div className= 'container'>
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <a href={`${card.id}`}>{card.id}</a>
                <img src={card.cardsReverse.clowReverse} alt={card.spanishName}/>
            </div>
         
        ))
            ) : ('No hay cards')}
    </div>
    </>
  )
}

export default Main