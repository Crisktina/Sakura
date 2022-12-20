import React from "react";
import "../styles/Header.css";
import Button from "./Button";

function Header({ selectedCards }) {
  return (
    <header className="header">
      <Button selectedCards={selectedCards} />
      <h2 className="textMain">Selecciona 3 cartas.</h2>
      <h2 className="textMain">Pasado - Presente - Futuro</h2>
    </header>
  );
}

export default Header;
