// Exercise03.js
import React, {useState} from "react";

const Exercise03 = () => {

    const [contador, setContador] = useState(0);

    function handleClick(){
        setContador(contador + 1);
    }

  return (
    <div>
      <h1>Exercise 03</h1>
        <button onClick={handleClick}>Clique aqui</button>
        <div className="contando">
            <h4>Contador em:</h4>
            <p>{contador}</p>
        </div>
    </div>
  );
};

export default Exercise03;
