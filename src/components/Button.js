import React from "react";
import { Link } from "react-router-dom";

function Button(selectedCards) {
  return (
    <>
      <Link
        className="buttonLink"
        to="/lectura"
        state={{ from: selectedCards }}
      >
        Descubrir Cartas
      </Link>
    </>
  );
}

export default Button;
