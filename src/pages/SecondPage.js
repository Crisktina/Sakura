import React from "react";
import { Link } from "react-router-dom";
import MainSecondPage from "../components/MainSecondPage";
import { useLocation } from "react-router-dom";

function SecondPage() {
  const location = useLocation();
  const selectedCards = location.state.from.selectedCards;

  return (
    <>
      {<Link to="/">Nueva tirada</Link>}
      <MainSecondPage selectedCards={selectedCards} />
    </>
  );
}

export default SecondPage;
