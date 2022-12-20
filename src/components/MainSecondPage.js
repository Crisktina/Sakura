import React from "react";
import "../styles/Main.css";
import "../styles/SecondPage.css";

function MainSecondPage({ selectedCards }) {
  return (
    <main className="containerCardsSecond">
      {selectedCards.map((card, index) => (
        <div key={index} className="containerCardsSecondBox">
          <img
            className="card"
            key={index}
            src={card.clowCard}
            alt={card.spanishName}
          />
          <div className="cointainerInfo">
            {index === 0 && <h2>PASADO</h2>}
            {index === 1 && <h2>PRESENTE</h2>}
            {index === 2 && <h2>FUTURO</h2>}
            <div className="cointainerMeaning">
              <h3>{card.spanishName}</h3>
              <p>"{card.meaning}"</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default MainSecondPage;
