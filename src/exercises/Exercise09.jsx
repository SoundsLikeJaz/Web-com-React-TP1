// Exercise09.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise09 = () => {
  return (
    <div>
      <h1>Exercise 09</h1>
      <Quiz pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?" >
          Tal como nas funções anônimas, há uma grande desvantagem em legibilidade de código e o uso de uma função inline a torna impossível de se reutilizar em outro pedaço do código.
      </Quiz>
    </div>
  );
};

export default Exercise09;
