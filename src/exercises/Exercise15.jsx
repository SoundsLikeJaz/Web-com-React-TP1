// Exercise15.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise15 = () => {
  return (
    <div>
      <h1>Exercise 15</h1>
      <Quiz pergunta="Qual é a função do useMemo?" >
          O useMemo é um hook do React que memoriza o valor de uma função computada, evitando cálculos desnecessários em cada renderização. Ele só recalcula o valor quando as dependências especificadas mudam, ajudando a otimizar o desempenho em operações que são computacionalmente caras ou que envolvem muitos cálculos.
      </Quiz>
    </div>
  );
};

export default Exercise15;
