import React, { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";

function Home() {
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <>
      <Header selectedCards={selectedCards} />
      <Main selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
    </>
  );
}

export default Home;
