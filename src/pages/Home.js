import React from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Link to="/lectura">Descubrir cartas</Link>
      <Main />
    </>
  );
}

export default Home;
