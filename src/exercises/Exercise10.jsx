// Exercise10.js
import React, {useEffect} from "react";

const Exercise10 = () => {

    useEffect(() => {
        alert("Fui renderizado!");
    });

  return (
    <div>
      <h1>Exercise 10</h1>
      <p>O alert é exibido a cada reenderização da página.</p>
    </div>
  );
};

export default Exercise10;