// Exercise14.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise14 = () => {
  return (
    <div>
      <h1>Exercise 14</h1>
      <Quiz pergunta="Qual é a função do useEffect?" >
          O useEffect é um hook do React que permite realizar efeitos colaterais em componentes funcionais, como buscar dados, atualizar o DOM, ou configurar timers. Ele é executado após a renderização do componente e pode ser configurado para rodar apenas uma vez, em todas as renderizações, ou quando certas dependências mudam, controlando assim como e quando o efeito ocorre.
      </Quiz>
    </div>
  );
};

export default Exercise14;
