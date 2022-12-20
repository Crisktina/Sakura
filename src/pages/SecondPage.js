import React from "react";
import { Link } from "react-router-dom";
import MainSecondPage from "../components/MainSecondPage";
import { useLocation } from "react-router-dom";

function SecondPage({ selectedCards }) {
  console.log(selectedCards);
  const location = useLocation();
  console.log(location);
  const infoLocation = location.state;
  console.log(infoLocation);
  return (
    <>
      {<Link to="/">Nueva tirada</Link>}
      <MainSecondPage
        selectedCards={selectedCards}
        infoLocation={infoLocation}
      />
    </>
  );
}

export default SecondPage;
