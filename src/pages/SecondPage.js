import React from "react";
import { Link } from "react-router-dom";
import MainSecondPage from "../components/MainSecondPage";

function SecondPage({ selectedCards }) {
  return (
    <>
      {<Link to="/">Nueva tirada</Link>}
      <MainSecondPage selectedCards={selectedCards} />
    </>
  );
}

export default SecondPage;
