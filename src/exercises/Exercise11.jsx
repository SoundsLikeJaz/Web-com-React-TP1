// Exercise11.js
import React, {useEffect} from "react";

const Exercise11 = () => {

    useEffect(() => {
        alert("Fui renderizado!");
    }, []);

    return (
        <div>
            <h1>Exercise 11</h1>
            <p>O alert é exibido na primeira renderização da página.</p>
        </div>
    );
};

export default Exercise11;