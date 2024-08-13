// Exercise13.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise13 = () => {
  return (
    <div>
      <h1>Exercise 13</h1>
      <Quiz pergunta="Qual é a função do useState?" >
          O useState é um hook do React que permite adicionar e gerenciar o estado em componentes funcionais. Ele retorna um par de valores: o estado atual e uma função para atualizá-lo. Isso permite que os componentes mantenham e modifiquem dados locais de forma reativa, causando a re-renderização do componente quando o estado é alterado.
      </Quiz>
    </div>
  );
};

export default Exercise13;
