import React from "react";

function MainSecondPage({ selectedCards }) {
  return (
    <div>
      {selectedCards.map((card, index) => (
        <div key={index}>
          {index === 0 && <h2>Pasado</h2>}
          {index === 1 && <h2>Presente</h2>}
          {index === 2 && <h2>Futuro</h2>}
          <img key={index} src={card.clowCard} alt={card.spanishName} />
          <h3>{card.spanishName}</h3>
          <p>{card.meaning}</p>
        </div>
      ))}
    </div>
  );
}

export default MainSecondPage;
