import React from "react";
import { Link } from "react-router-dom";

function Button({ selectedCards }) {
  return (
    <>
      <Link to="/lectura" state={{ from: "/" }}>
        Descubrir Cartas
      </Link>
    </>
  );
}

export default Button;
