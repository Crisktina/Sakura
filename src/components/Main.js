import React, {useEffect, useState} from 'react'
import GetCards  from '../services/functions'
import '../styles/Main.css'

function Main() {
  const [cards, setCards] = useState([])

  useEffect(()=>{
    GetCards(setCards);
  },[])

  return (
    <>
  <div className="container">
        {cards !== []
          ? cards.map(card => {
              if (card.cardsReverse.clowReverse) {
                return (
                  <div key={card.id}>
                    <img
                      src={card.cardsReverse.clowReverse}
                      alt={card.spanishName}
                    />
                  </div>
                );
              }
              return <div style={{ display: "none" }}></div>;
            })
          : "No hay cards"}
      </div>
    </>
  );
}

export default Main;