import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Link to="/lectura">Descubrir cartas</Link>
    </>
  );
}

export default Home;
