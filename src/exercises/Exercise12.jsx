// Exercise12.js
import React from "react";
import Quiz from "../components/Quiz.jsx";

const Exercise12 = () => {
  return (
    <div>
      <h1>Exercise 12</h1>
      <Quiz pergunta='O que são "hooks"?' >
          Hooks em React são funções especiais que permitem que você "conecte" recursos do React, como o estado e o ciclo de vida, em componentes funcionais. Permitindo assim a alteração ou gravação dinâmica de componentes. <br/>
          Dentre os hooks mais importantes do React destacam-se: O useState, que renderiza novamente todos os componentes que dependem dele após alguma alteração; <br/>
          O useEffect, que executa alguma ação toda vez que o componente ou página é renderizado ou ao ser detectada uma mudança no parâmetro que ele foi ordenado a assistir; <br/>
          O useMemo, que guarda dentro de si a ultima renderização de um componente e impede que ele seja renderizado desnecessariamente, detectando se houveram ou não mudanças nele.
      </Quiz>
    </div>
  );
};

export default Exercise12;
