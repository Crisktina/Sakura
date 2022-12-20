import React from "react";

function MainSecondPage({ selectedCards }) {
  console.log(selectedCards);
  return (
    <div>
      {/* {selectedCards.map((card, index) => (
        <div key={index}>
          {index === 0 && <h2>Pasado</h2>}
          {index === 1 && <h2>Presente</h2>}
          {index === 2 && <h2>Futuro</h2>}
          <img key={index} src={card.frontImage} alt={card.spanishName} />
          <p>{card.meaning}</p>
        </div>
      ))} */}
    </div>
  );
}

export default MainSecondPage;
