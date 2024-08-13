// Exercise06.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise06 = () => {
  return (
    <div>
      <h1>Exercise 06</h1>
      <Quiz pergunta='Qual é a diferença de passar o "handleClick" e chamar o "handleClick"?' >
          Quando passamos uma função, como o exemplo "handleClick", estamos delegando à um componente a ação da chamada de função. <br/>
          Do outro lado, quando chamamos uma função, pondo parênteses em seu final (handleClick()) a função será imediatamente executada devido a sua chamada no código.
      </Quiz>
    </div>
  );
};

export default Exercise06;
