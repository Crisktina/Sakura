import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Cards = ({
  id,
  frontImage,
  backImage,
  spanishName,
  meaning,
  selectedCards,
  setSelectedCards,
  card,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const newSelectCards = () => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
      setIsFlipped(!isFlipped);
    } else {
      console.warn("¡Ya tienes 3 cartas seleccionadas!"); //CAMBIAR POR SWEETALERT
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <img
        id={id}
        src={backImage}
        alt={spanishName}
        meaning={meaning}
        onClick={newSelectCards}
      />
      <img id={id} src={frontImage} alt={spanishName} meaning={meaning} />
    </ReactCardFlip>
  );
};

export default Cards;
