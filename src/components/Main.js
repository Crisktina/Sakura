import React, { useEffect, useState } from "react";
import GetCards from "../services/functions";
import "../styles/Main.css";
import Cards from "./Cards";

function Main({ selectedCards, setSelectedCards }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    GetCards(setCards);
  }, []);

  return (
    <>
      <main className="containerCards">
        {cards !== []
          ? cards.map((card, index) =>
              card.cardsReverse.clowReverse ? (
                <Cards
                  key={index}
                  id={card.id}
                  meaning={card.meaning}
                  backImage={card.cardsReverse.clowReverse}
                  frontImage={card.clowCard}
                  spanishName={card.spanishName}
                  card={card}
                  selectedCards={selectedCards}
                  setSelectedCards={setSelectedCards}
                />
              ) : (
                <div key={index} style={{ display: "none" }}></div>
              )
            )
          : "No hay cards"}
      </main>
    </>
  );
}

export default Main;
