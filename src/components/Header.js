import React from "react";
import "../styles/Header.css";
import Button from "./Button";

function Header({ selectedCards }) {
  return (
    <div className="header">
      <Button selectedCards={selectedCards} />
    </div>
  );
}

export default Header;
