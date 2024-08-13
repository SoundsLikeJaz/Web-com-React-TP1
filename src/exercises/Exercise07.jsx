// Exercise07.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise07 = () => {
  return (
    <div>
      <h1>Exercise 07</h1>
      <Quiz pergunta='O que é um "Synthetic Event"?' >
          Um synthetic event é um objeto que simula um evento do navegador, desta forma o React garante que o evento funcione em todos os navegadores.
      </Quiz>
    </div>
  );
};

export default Exercise07;
