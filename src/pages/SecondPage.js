import React from "react";
import { Link } from "react-router-dom";
import MainSecondPage from "../components/MainSecondPage";
import { useLocation } from "react-router-dom";
import "../styles/SecondPage.css";
import "../styles/Header.css";

function SecondPage() {
  const location = useLocation();
  const selectedCards = location.state.from.selectedCards;

  return (
    <>
      <header className="header">
        {
          <Link className="buttonLink" to="/">
            Nueva tirada
          </Link>
        }
      </header>
      <MainSecondPage selectedCards={selectedCards} />
    </>
  );
}

export default SecondPage;
