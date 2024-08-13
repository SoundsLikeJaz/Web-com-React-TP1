// Exercise02.js
import React from "react";

const Exercise02 = () => {

    function handleClick() {
        alert("Você clicou em mim!")
    }

  return (
    <div>
      <h1>Exercise 02</h1>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
};

export default Exercise02;
