import React, { useEffect, useState } from "react";
import GetCards from "../services/functions";
import "../styles/Main.css";

function Main(props) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    GetCards(setCards);
  }, []);

  const handleSend = (event) => {
    const target = event.target;
    // event.preventDefault();
    console.log(target);
    const newArray = {
      // [...selectedCards, ]
    };
    // props.onClick(newTask);
  };

  return (
    <>
      <div className="container">
        {cards !== []
          ? cards.map((card, index) =>
              card.cardsReverse.clowReverse ? (
                <div key={index} onClick={(event) => handleSend(event)}>
                  <img
                    src={card.cardsReverse.clowReverse}
                    alt={card.spanishName}
                    id={card.id}
                    meaning={card.meaning}
                  />
                </div>
              ) : (
                <div key={index} style={{ display: "none" }}></div>
              )
            )
          : "No hay cards"}
      </div>
    </>
  );
}

export default Main;
