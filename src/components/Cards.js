import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  const MySwal = withReactContent(Swal);

  const newSelectCards = () => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
      setIsFlipped(!isFlipped);
    } else {
      console.warn("¡Ya has elegido 3 cartas!");
      MySwal.fire({
        title: <p>¡Ya tienes 3 cartas seleccionadas!</p>,
        background: "var(--color-orange)",
        confirmButtonColor: "var(--color-purple)",
        allowOutsideClick: "true",
      });
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <img
        className="card cardFront"
        id={id}
        src={backImage}
        alt={spanishName}
        meaning={meaning}
        onClick={newSelectCards}
      />
      <img
        className="card"
        id={id}
        src={frontImage}
        alt={spanishName}
        meaning={meaning}
      />
    </ReactCardFlip>
  );
};

export default Cards;
